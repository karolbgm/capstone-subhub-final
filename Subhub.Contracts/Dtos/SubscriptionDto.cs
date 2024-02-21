namespace Subhub.Contracts.Dtos;

public record SubscriptionDto(int Id, string Name, string Category, string Type, int Cost, DateTime PaymentDate, int Period, bool IsActive, DateTime CreateDate);

