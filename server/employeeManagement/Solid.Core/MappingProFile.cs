using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Solid.Core.DTOs;
using Solid.Core.Enteties;
using Solid.Core.Entities;

namespace Solid.Core
{
    public class MappingProFile:Profile
    {
        public MappingProFile()
        {
            CreateMap<CustomerDto, Customer>().ReverseMap();
            CreateMap<AdminDto, Admin>().ReverseMap();
            CreateMap<JobPositionDto, JobPosition>().ReverseMap();
            CreateMap<EmployeeJobPositionDto,EmployeeJobPosition>().ReverseMap();
        }
    }
}
