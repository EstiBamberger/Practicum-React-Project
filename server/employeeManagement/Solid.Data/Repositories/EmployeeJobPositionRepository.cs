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
    public class EmployeeJobPositionRepository:IEmployeeJobPositionRepositories
    {
        private readonly DataContext _context;

        public EmployeeJobPositionRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<EmployeeJobPosition> AddEmployeeJobPositionAsync(EmployeeJobPosition employeeJobPosition)
        {
            _context.EmployeeJobs.Add(employeeJobPosition);
            await _context.SaveChangesAsync();
            return employeeJobPosition;
        }

        public async Task DeleteEmployeeJobPositionAsync(int id)
        {
            var temp = _context.EmployeeJobs.Find(id);
            _context.EmployeeJobs.Remove(temp);
            await _context.SaveChangesAsync();

        }

        public async Task<List<EmployeeJobPosition>> GetEmployeeJobPositionAsync()
        {
            return _context.EmployeeJobs.ToList();
        }

        public EmployeeJobPosition UpdateEmployeeJobPosition(int id, EmployeeJobPosition employeeJobPosition)
        {
            var temp = _context.EmployeeJobs.ToList().Find(u => u.JobPositionId == id);
            if (temp != null)
            {
                temp.JobPositionName = employeeJobPosition.JobPositionName;
                temp.IsManagerial = employeeJobPosition.IsManagerial;
                temp.DateStartRole=employeeJobPosition.DateStartRole;
            }
            _context.SaveChanges();
            return temp;
        }
    }
}
