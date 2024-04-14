using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Solid.Core.Enteties;
using Solid.Core.Entities;
using Solid.Core.Repositories;

namespace Solid.Data.Repositories
{
    public class CustomersRepository : ICustomerRepositories
    {
        private readonly DataContext _context;

        public CustomersRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<Customer> AddCustomerAsync(Customer cust)
        {
            var customer = await _context.Customers.Where(c => c.TZ == cust.TZ).FirstOrDefaultAsync();
            if (customer == null)
            {
                _context.Customers.Add(cust);
                await _context.SaveChangesAsync();
                return cust;
            }
            else
            {
                return null;
            }
        }

        public async Task DeleteCustomerAsync(string tz)
        {
            var temp = _context.Customers.Where(c => c.TZ == tz).FirstOrDefault();
            temp.IsDeleted = true;
            await _context.SaveChangesAsync();
        }

        public async Task<List<Customer>> GetCustomersAsync()
        {
            return _context.Customers.Include(u => u.Roles).ToList();
        }
        public async Task<Customer> GetCustomersByTzAsync(string tz)
        {
            return _context.Customers.Include(c => c.Roles).Where(c => c.TZ == tz).FirstOrDefault();
        }
        public async Task<Customer> UpdateCustomerAsync(int id, Customer cust)
        {

            var existingCustomer = await _context.Customers
                                        .Include(c => c.Roles)
                                        .FirstOrDefaultAsync(c => c.EmployeeId == id);

            if (existingCustomer != null)
            {
                existingCustomer.TZ = cust.TZ;
                existingCustomer.FirstName = cust.FirstName;
                existingCustomer.LastName = cust.LastName;
                existingCustomer.DateOfBirth = cust.DateOfBirth;
                existingCustomer.DateOfStartingWork = cust.DateOfStartingWork;
                existingCustomer.Gender = cust.Gender;

                foreach (var existingRole in existingCustomer.Roles.ToList())
                {
                    _context.EmployeeJobs.Remove(existingRole);
                }

                foreach (var newRole in cust.Roles)
                {
                    existingCustomer.Roles.Add(newRole);
                }

                await _context.SaveChangesAsync();
            }

            return existingCustomer;
        }

    }
}
