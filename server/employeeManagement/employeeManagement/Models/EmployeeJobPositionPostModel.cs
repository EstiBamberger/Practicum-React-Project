using Solid.Core.Enteties;

namespace WorkersManagement.Models
{
    public class EmployeeJobPositionPostModel
    {
        public string JobPositionName { get; set; }
        public bool IsManagerial { get; set; }

        public DateTime DateStartRole { get; set; }
    }
}
