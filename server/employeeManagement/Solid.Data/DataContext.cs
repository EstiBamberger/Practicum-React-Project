using Microsoft.EntityFrameworkCore;
using Solid.Core.Enteties;
using Solid.Core.Entities;

namespace Solid.Data
{
    public class DataContext:DbContext
    {
        public DbSet<JobPosition> Jobs { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Admin> Admin { get; set; }
        public DbSet<EmployeeJobPosition> EmployeeJobs { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=EMEighth");
        }
    }
}
