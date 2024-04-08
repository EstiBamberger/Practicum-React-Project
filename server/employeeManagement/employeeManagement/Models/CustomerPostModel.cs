using System.ComponentModel.DataAnnotations;
using Solid.Core.Enteties;
using Solid.Core.Entities;

namespace WorkersManagement.Models
{
    public class CustomerPostModel
    {
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

        public virtual List<EmployeeJobPositionPostModel> Roles { get; set; }
    }
}
