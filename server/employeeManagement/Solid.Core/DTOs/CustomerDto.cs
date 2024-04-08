using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Solid.Core.Enteties;
using Solid.Core.Entities;

namespace Solid.Core.DTOs
{
    public class CustomerDto
    {

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
