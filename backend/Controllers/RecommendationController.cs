using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using backend.Data;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RecommendationController : ControllerBase
    {
        private readonly AppDbContext _dbContext;

        public RecommendationController(AppDbContext dbContext)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        }

        // Get all recommendations (Accessible to all authenticated users)
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAllRecommendations()
        {
            var recommendations = await _dbContext.Recommendations.ToListAsync();
            return Ok(recommendations);
        }

        // Get recommendations for a specific patient
        [HttpGet("patient/{patientId}")]
        [Authorize]
        public async Task<IActionResult> GetRecommendationsByPatient(int patientId)
        {
            var recommendations = await _dbContext.Recommendations
                .Where(r => r.PatientID == patientId)
                .ToListAsync();

            if (recommendations == null || recommendations.Count == 0)
                return NotFound("No recommendations found for this patient.");

            return Ok(recommendations);
        }

        // Mark a recommendation as completed (Restricted to Healthcare Professionals)
        [HttpPut("{id}/complete")]
        [Authorize(Roles = "HealthcareProfessional")]
        public async Task<IActionResult> MarkRecommendationAsCompleted(int id)
        {
            var recommendation = await _dbContext.Recommendations.FindAsync(id);
            if (recommendation == null)
                return NotFound("Recommendation not found.");

            recommendation.IsCompleted = true;
            await _dbContext.SaveChangesAsync();

            return Ok(new { Message = "Recommendation marked as completed.", Recommendation = recommendation });
        }
    }
}