using System;

namespace backend.Data
{
    public class AuditLog
    {
        public int ID { get; set; }
        public string Action { get; set; }
        public string Username { get; set; }
        public DateTime Timestamp { get; set; }
    }
}