using Microsoft.EntityFrameworkCore;
using System;

namespace backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Patient> Patients { get; set; }
        public DbSet<Recommendation> Recommendations { get; set; }
        public DbSet<AuditLog> AuditLogs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Patient>().HasData(
                new Patient { ID = 1, Name = "John Doe", DOB = new DateTime(1980, 5, 20), Email = "johndoe@example.com" },
                new Patient { ID = 2, Name = "Jane Smith", DOB = new DateTime(1990, 7, 15), Email = "janesmith@example.com" },
                new Patient { ID = 3, Name = "Sam Wilson", DOB = new DateTime(1975, 10, 10), Email = "samwilson@example.com" }
            );

            modelBuilder.Entity<Recommendation>().HasData(
                new Recommendation { ID = 1, Description = "Annual Allergy Check", IsCompleted = false, PatientID = 1 },
                new Recommendation { ID = 2, Description = "Blood Pressure Screening", IsCompleted = false, PatientID = 2 },
                new Recommendation { ID = 3, Description = "Diabetes Screening", IsCompleted = false, PatientID = 3 }
            );
        }
    }
}