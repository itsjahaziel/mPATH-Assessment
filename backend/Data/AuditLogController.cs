using Microsoft.AspNetCore.Mvc;
using backend.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuditLogController : ControllerBase
    {
        private readonly AppDbContext _dbContext;

        public AuditLogController(AppDbContext dbContext)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }

        // Get all audit logs (Accessible to authenticated users)
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAllAuditLogs()
        {
            var auditLogs = await _dbContext.AuditLogs.ToListAsync();
            return Ok(auditLogs);
        }

        // Create a new audit log (Restricted to authenticated users with a specific role)
        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> CreateAuditLog([FromBody] AuditLog auditLog)
        {
            if (auditLog == null)
            {
                return BadRequest("Invalid data.");
            }

            _dbContext.AuditLogs.Add(auditLog);
            await _dbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAllAuditLogs), new { id = auditLog.ID }, auditLog);
        }
    }
}