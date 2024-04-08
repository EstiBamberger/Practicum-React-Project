using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Solid.Core.Enteties;

namespace Solid.Core.Repositories
{
    public interface IJobsPositionRepositories
    {
        List<JobPosition> GetJobs();

        JobPosition AddJob(JobPosition job);

        JobPosition DeleteJob(string name);
    }
}
