namespace Subhub.Domain.Entities;

public class Subscription : BaseEntity
{
    public string Name { get; set; }
    public string Category { get; set; }
    public string Type { get; set; }
    public int Cost { get; set; }
    public DateTime PaymentDate { get; set; }
    public int Period { get; set; }
    public bool IsActive { get; set; }
}
