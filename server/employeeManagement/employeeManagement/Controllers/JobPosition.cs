using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Solid.Core.DTOs;
using Solid.Core.Enteties;
using Solid.Core.Services;
using WorkersManagement.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace employeeManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobPosition : ControllerBase
    {
        private readonly IJobPositionServices _jobsServices;
        private readonly IMapper _mapper;
        public JobPosition(IJobPositionServices jobsServices, IMapper mapper)
        {
            _jobsServices = jobsServices;
            _mapper = mapper;
        }

        // GET: api/<jobs>
        [HttpGet]
        public ActionResult Get()
        {
            var jobs = _jobsServices.GetJobs();
            var jobsDto = new List<JobPositionDto>();
            for (int i = 0; i < jobs.LongCount(); i++)
            {
                jobsDto.Add(_mapper.Map<JobPositionDto>(jobs[i]));
            }
            return Ok(jobsDto);
        }

        // POST api/<jobs>
        [HttpPost]
        [Authorize]
        public ActionResult Post([FromBody] JobPositionPostModel value)
        {
            var jobToAdd = new Solid.Core.Enteties.JobPosition { 
                Name = value.Name};
            var temp= _jobsServices.AddJob(jobToAdd);
            if(temp != null)
            {
                return Ok(true);
            }
            return Ok(false);
        }


        // DELETE api/<jobs>/5
        [HttpDelete("{name}")]
        [Authorize]
        public ActionResult Delete(string name)
        {
            Solid.Core.Enteties.JobPosition temp=_jobsServices.DeleteJob(name);
            if (temp!=null)
            {
                 return Ok(true);
            }
            else
            {
                return Ok(null);
            }
        }
    }
}

