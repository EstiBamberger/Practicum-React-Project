using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Solid.Core.Enteties;

namespace Solid.Core.DTOs
{
    public class EmployeeJobPositionDto
    {
        public string JobPositionName { get; set; }

        public bool IsManagerial { get; set; }

        public DateTime DateStartRole { get; set; }
    }
}
