using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Solid.Core.Enteties;
using Solid.Core.Services;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WorkersManagement.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace employeeManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAdminServices _adminService;
        private readonly IMapper _mapper;
        private readonly IConfiguration _configuration;

        public AuthController(IConfiguration configuration, IAdminServices adminService, IMapper mapper)
        {
            _adminService = adminService;
            _mapper = mapper;
            _configuration = configuration;
        }

        [HttpPost]
        public IActionResult Login([FromBody]  AdminPostModel loginModel)
        {
             var isAdmin= _adminService.IsAdmin(loginModel.Name, loginModel.Password);
            if (!isAdmin)
            {
                return BadRequest();
            }
            else
            {
            var claims = new List<Claim>()
            {
                new Claim("name",loginModel.Name),
                new Claim("password", loginModel.Password)
            };


                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetValue<string>("JWT:Key")));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                var tokeOptions = new JwtSecurityToken(
                    issuer: _configuration.GetValue<string>("JWT:Issuer"),
                    audience: _configuration.GetValue<string>("JWT:Audience"),
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(6),
                    signingCredentials: signinCredentials
                );
                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                return Ok(new { Token = tokenString });
            }
        }
    }

}
