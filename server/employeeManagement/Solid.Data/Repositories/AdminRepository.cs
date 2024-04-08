using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Solid.Core.Enteties;
using Solid.Core.Repositories;

namespace Solid.Data.Repositories
{
    public class AdminRepository:IAdminRepositories
    {
        private readonly DataContext _context;

        public AdminRepository(DataContext context)
        {
            _context = context;
        }

        public bool IsAdmin(string name, string password)
        {
            return _context.Admin.Where(u => u.Name == name && u.Password == password).ToList().Count > 0;
        }
        public Admin AddAdmin(Admin admin)
        {
            _context.Admin.Add(admin); 
            _context.SaveChanges();
            return admin;
        }
    }
}
