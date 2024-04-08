using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Solid.Core.Enteties;

namespace Solid.Core.Services
{
    public interface IJobPositionServices
    {
        List<JobPosition> GetJobs();

        JobPosition AddJob(JobPosition job);

        JobPosition DeleteJob(string name);
    }
}
