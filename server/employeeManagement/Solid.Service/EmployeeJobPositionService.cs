using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Solid.Core.Enteties;
using Solid.Core.Entities;
using Solid.Core.Repositories;
using Solid.Core.Services;

namespace Solid.Service
{
    public class EmployeeJobPositionService:IEmployeeJobPositionService
    {
        private readonly IEmployeeJobPositionRepositories _iEmployeeJobPositionRepos;
        public EmployeeJobPositionService(IEmployeeJobPositionRepositories eJobPosRepositor)
        {
            _iEmployeeJobPositionRepos = eJobPosRepositor;
        }

        public async Task<EmployeeJobPosition> AddEmployeeJobPositionAsync(EmployeeJobPosition employeeJobPosition)
        {
            return await _iEmployeeJobPositionRepos.AddEmployeeJobPositionAsync(employeeJobPosition);
        }

        public async Task DeleteEmployeeJobPositionAsync(int id)
        {
          await _iEmployeeJobPositionRepos.DeleteEmployeeJobPositionAsync(id);
        }

        public async Task<List<EmployeeJobPosition>> GetEmployeeJobPositionAsync()
        {
            return await _iEmployeeJobPositionRepos.GetEmployeeJobPositionAsync();
        }

        public EmployeeJobPosition UpdateEmployeeJobPosition(int id, EmployeeJobPosition employeeJobPosition)
        {
            return _iEmployeeJobPositionRepos.UpdateEmployeeJobPosition(id, employeeJobPosition);
        }
    }
}
