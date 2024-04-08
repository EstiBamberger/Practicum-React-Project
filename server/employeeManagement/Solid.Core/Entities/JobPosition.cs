using System.ComponentModel.DataAnnotations;

namespace Solid.Core.Enteties
{
    public class JobPosition
    {
        [Key]
        public int RoleId { get; set; }

        [Required]
        public string Name { get; set; }
        //public int Id { get; set; }
        //public string Name { get; set; }
        //public DateTime Start { get; set; }
        //public bool IsAdministrative { get; set; }
    }
}
