using System;

namespace backend.Data
{
    public class Patient
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public DateTime DOB { get; set; }
        public string Email { get; set; }
    }
}