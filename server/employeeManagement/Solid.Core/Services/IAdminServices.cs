using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Solid.Core.Enteties;

namespace Solid.Core.Services
{
    public interface IAdminServices
    {
        bool IsAdmin(string name, string password);
        Admin AddAdmin(Admin admin);


    }
}
