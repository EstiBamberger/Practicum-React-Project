using Solid.Core.Enteties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Solid.Service
{
    public class Validators
    {
        public static bool Validate(Customer customer)
        {
            if (customer.TZ.Length != 9 || !Regex.IsMatch(customer.TZ, @"^\d{9}$"))
            {
                return false;
            }
            if (customer.DateOfBirth.Year > DateTime.Today.Year)
            {
                return false;
            }
            if (customer.Roles.Any(role => role.DateStartRole < customer.DateOfStartingWork))
            {
                return false;
            }
            return true;
        }
    }
}
