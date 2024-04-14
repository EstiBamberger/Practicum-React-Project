using System.ComponentModel.DataAnnotations;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Solid.Core.DTOs;
using Solid.Core.Enteties;
using Solid.Core.Entities;
using Solid.Core.Services;
using WorkersManagement.Models;
using Solid.Service;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace bank.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Customers : ControllerBase
    {
        private readonly ICustomerService _customerService;
        private readonly IMapper _mapper;
        public Customers(ICustomerService customerService, IMapper mapper)
        {
            _customerService = customerService;
            _mapper = mapper;
        }
        // GET: api/<Customers>
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var customers = await _customerService.GetCustomersAsync();
            var customersDto = new List<CustomerDto>();
            for (int i = 0; i < customers.LongCount(); i++)
            {
                customersDto.Add(_mapper.Map<CustomerDto>(customers[i]));
            }
            return Ok(customersDto);
        }
        // GET: api/<Customers>
        [HttpGet("{tz}")]
        public async Task<ActionResult> Get(string tz)
        {
            var customer = await _customerService.GetCustomersByTzAsync(tz);
            var customerDto = _mapper.Map<CustomerDto>(customer);
            return Ok(customer);
        }
        // POST api/<Customers>
        [HttpPost]
        [Authorize]
        public async Task<ActionResult> Post([FromBody] CustomerPostModel value)
        {
            var temp = await _customerService.GetCustomersByTzAsync(value.TZ);
            if (temp != null)
                return BadRequest("The ID already exists.");
            var customerToAdd = new Customer
            {
                FirstName = value.FirstName,
                LastName = value.LastName,
                TZ = value.TZ,
                DateOfStartingWork = value.DateOfStartingWork,
                DateOfBirth = value.DateOfBirth,
                Gender = value.Gender,
            };
            customerToAdd.Roles = new List<EmployeeJobPosition>();
            for (int i = 0; i < value.Roles.Count; i++)
            {
                var roleToAdd = new EmployeeJobPosition
                {
                    JobPositionName = value.Roles[i].JobPositionName,
                    IsManagerial = value.Roles[i].IsManagerial,
                    DateStartRole = value.Roles[i].DateStartRole,
                };
                customerToAdd.Roles.Add(roleToAdd);
            }
            var customerList = await _customerService.GetCustomersAsync();
            var sameTzCustomer = customerList
                .Where(c => c.TZ == customerToAdd.TZ && c.EmployeeId != customerToAdd.EmployeeId)
                .FirstOrDefault();
            if (!Solid.Service.Validators.Validate(customerToAdd) || sameTzCustomer != null)
                return BadRequest("One or more of the data entered is incorrect.");
            var customer = await _customerService.AddCustomerAsync(customerToAdd);
            return Ok(customer);
        }

        // PUT api/<Customers>/5
        [HttpPut("{id}")]
        [Authorize]
        public async Task<ActionResult> Put(int id, [FromBody] CustomerPostModel value)
        {
            var customerToAdd = new Customer
            {
                FirstName = value.FirstName,
                LastName = value.LastName,
                TZ = value.TZ,
                DateOfStartingWork = value.DateOfStartingWork,
                DateOfBirth = value.DateOfBirth,
                Gender = value.Gender,
                Roles = new List<EmployeeJobPosition>()
            };
            for (int i = 0; i < value.Roles.Count; i++)
            {
                var roleToAdd = new EmployeeJobPosition
                {
                    JobPositionName = value.Roles[i].JobPositionName,
                    IsManagerial = value.Roles[i].IsManagerial,
                    DateStartRole = value.Roles[i].DateStartRole,
                };
                customerToAdd.Roles.Add(roleToAdd);
            }
            await _customerService.UpdateCustomerAsync(id, customerToAdd);
            return NoContent();
        }

        // DELETE api/<Customers>/5
        [HttpDelete("{tz}")]
        [Authorize]
        public async Task<ActionResult> Delete(string tz)
        {
            await _customerService.DeleteCustomerAsync(tz);
            return NoContent();
        }
    }
}
