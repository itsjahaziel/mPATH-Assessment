namespace backend.Data
{
    public class Recommendation
    {
        public int ID { get; set; }
        public string Description { get; set; }
        public bool IsCompleted { get; set; }
        public int PatientID { get; set; }
        public Patient Patient { get; set; }
    }
}