using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace backend.Migrations
{
    public partial class SeedPatients : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // Insert data into the Patients table
            migrationBuilder.InsertData(
                table: "Patients",
                columns: new[] { "ID", "DOB", "Email", "Name" },
                values: new object[,]
                {
                    { 1, new DateTime(1980, 5, 20), "johndoe@example.com", "John Doe" },
                    { 2, new DateTime(1990, 7, 15), "janesmith@example.com", "Jane Smith" },
                    { 3, new DateTime(1975, 10, 10), "samwilson@example.com", "Sam Wilson" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Patients",
                keyColumn: "ID",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Patients",
                keyColumn: "ID",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Patients",
                keyColumn: "ID",
                keyValue: 3);
        }
    }
}