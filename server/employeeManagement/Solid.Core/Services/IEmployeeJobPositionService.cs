using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Solid.Core.Enteties;
using Solid.Core.Entities;

namespace Solid.Core.Services
{
    public interface IEmployeeJobPositionService
    {
        Task<List<EmployeeJobPosition>> GetEmployeeJobPositionAsync();
        Task<EmployeeJobPosition> AddEmployeeJobPositionAsync(EmployeeJobPosition employeeJobPosition);

        EmployeeJobPosition UpdateEmployeeJobPosition(int id, EmployeeJobPosition employeeJobPosition);

        Task DeleteEmployeeJobPositionAsync(int id);
    }
}
