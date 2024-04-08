using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Solid.Core.Enteties;

namespace Solid.Core.Services
{
    public interface ICustomerService
    {
        Task<List<Customer>> GetCustomersAsync();
        Task<Customer> GetCustomersByTzAsync(string tz);

        Task<Customer> AddCustomerAsync(Customer user);

        Task<Customer> UpdateCustomerAsync(int id, Customer user);

        Task DeleteCustomerAsync(string tz);
    }
}
