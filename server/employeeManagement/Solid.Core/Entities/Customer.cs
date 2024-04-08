using System.ComponentModel.DataAnnotations;
using System.Reflection;
using Solid.Core.Entities;

namespace Solid.Core.Enteties
{
    public enum Gender
    {
        Male,
        Female
    }
    public class Customer
    {
        //public int Id { get; set; }
        //public string Tz { get; set; }
        //public string FirstName { get; set; }
        //public string LastName { get; set; }
        //public DateTime StartDate { get; set; }
        //public DateTime Birthday { get; set; }
        //public bool IsMale { get; set; }
        //public List<JobPosition> JobPositionList { get; set; }
        [Key]
        public int EmployeeId { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string TZ { get; set; }

        [Required]
        public DateTime DateOfStartingWork { get; set; }

        [Required]
        public DateTime DateOfBirth { get; set; }

        [Required]
        public Gender Gender { get; set; }
        public bool IsDeleted { get; set; }


        public virtual List<EmployeeJobPosition> Roles { get; set; }
    }
}
