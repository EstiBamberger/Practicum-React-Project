using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Solid.Core.Enteties;
using Solid.Core.Repositories;

namespace Solid.Data.Repositories
{
    public class JobPositionRepository:IJobsPositionRepositories
    {
        private readonly DataContext _context;

        public JobPositionRepository(DataContext context)
        {
            _context = context;
        }
        public JobPosition AddJob(JobPosition job)
        {
            var temp=_context.Jobs.Where(j=>j.Name == job.Name).FirstOrDefault();
            if (temp != null)
            {
                return null;
            }
            else
            {
                _context.Jobs.Add(job);
                _context.SaveChanges();
                return job;
            }

        }

        public JobPosition DeleteJob(string name)
        {
            var temp = _context.Jobs.Where(j=>j.Name==name).FirstOrDefault();
            if (temp != null)
            {
                _context.Jobs.Remove(temp);
                _context.SaveChanges();
                return temp;
            }
            else
             return null;
        }

        public List<JobPosition> GetJobs()
        {
            return _context.Jobs.ToList();
        }
    }
}
