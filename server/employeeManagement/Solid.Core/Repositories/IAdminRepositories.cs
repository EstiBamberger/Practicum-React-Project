using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Solid.Core.Enteties;

namespace Solid.Core.Repositories
{
    public interface IAdminRepositories
    {
        bool IsAdmin(string name, string password);
        Admin AddAdmin(Admin admin);

    }
}
