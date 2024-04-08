using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Solid.Core.Enteties;

namespace Solid.Core.Entities
{
    public class EmployeeJobPosition
    {
        [Key]
        public int JobPositionId { get; set; }
        public string JobPositionName { get; set; }

        public bool IsManagerial { get; set; }

        public DateTime DateStartRole { get; set; }
    }
}
