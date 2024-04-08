using System.ComponentModel.DataAnnotations;

namespace Solid.Core.Enteties
{
    public class Admin
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
    }
}
