using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using backend.Data;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PatientController : ControllerBase
    {
        private readonly AppDbContext _dbContext;

        public PatientController(AppDbContext dbContext)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }

        // Accessible only to users with the "Admin" role
        [HttpGet("admin-only")]
        [Authorize(Roles = "Admin")]
        public IActionResult GetAdminData()
        {
            return Ok(new { Message = "This is sensitive data only accessible to Admins." });
        }

        // Accessible only to users with the "HealthcareProfessional" role
        [HttpGet("doctor-only")]
        [Authorize(Roles = "HealthcareProfessional")]
        public IActionResult GetDoctorData()
        {
            return Ok(new { Message = "This is data accessible only to Healthcare Professionals." });
        }

        // Accessible to all authenticated users with pagination, filtering, and search
        [HttpGet("all")]
        [Authorize]
        public IActionResult GetAllPatients([FromQuery] string? search, [FromQuery] int page = 1, [FromQuery] int pageSize = 10)
        {
            if (page <= 0 || pageSize <= 0)
                return BadRequest("Page and pageSize must be greater than 0.");

            var query = _dbContext.Patients.AsQueryable();

            // Search by name or email
            if (!string.IsNullOrEmpty(search))
            {
                query = query.Where(p => p.Name.ToLower().Contains(search.ToLower()) || p.Email.ToLower().Contains(search.ToLower()));
            }

            // Pagination
            var totalPatients = query.Count();
            var patients = query
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            return Ok(new
            {
                TotalCount = totalPatients,
                Page = page,
                PageSize = pageSize,
                Data = patients
            });
        }

        // Search by Name or ID
        [HttpGet("search")]
        [Authorize]
        public IActionResult SearchPatients([FromQuery] string? name, [FromQuery] int? id)
        {
            var query = _dbContext.Patients.AsQueryable();

            if (!string.IsNullOrEmpty(name))
            {
                // Case-insensitive search using ToLower
                query = query.Where(p => p.Name.ToLower().Contains(name.ToLower()));
            }

            if (id.HasValue)
            {
                query = query.Where(p => p.ID == id.Value);
            }

            var results = query.ToList();

            if (!results.Any())
            {
                return NotFound(new { Message = "No patients found matching the criteria." });
            }

            return Ok(results);
        }
    }
}