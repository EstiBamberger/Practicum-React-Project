using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Solid.Core.Enteties;
using Solid.Core.Repositories;
using Solid.Core.Services;

namespace Solid.Service
{
    public class CustomerService:ICustomerService
    {
        private readonly ICustomerRepositories _customerRepositor;
        public CustomerService(ICustomerRepositories customerRepositor)
        {
            _customerRepositor = customerRepositor;
        }

        public async Task<Customer> AddCustomerAsync(Customer customer)
        {
            return await _customerRepositor.AddCustomerAsync(customer);
        }

        public async Task DeleteCustomerAsync(string tz)
        {
            await _customerRepositor.DeleteCustomerAsync(tz);
        }

        public async Task<List<Customer>> GetCustomersAsync()
        {
            return await _customerRepositor.GetCustomersAsync();
        }
        public async Task<Customer> GetCustomersByTzAsync(string tz)
        {
            return await _customerRepositor.GetCustomersByTzAsync(tz);
        }
        public async Task<Customer> UpdateCustomerAsync(int id, Customer customer)
        {
            return await _customerRepositor.UpdateCustomerAsync(id, customer);
        }
    }
}
