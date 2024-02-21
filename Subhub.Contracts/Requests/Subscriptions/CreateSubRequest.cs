namespace Subhub.Contracts.Requests.Subscriptions;

public record CreateSubRequest(string Name, string Category, string Type, int Cost, DateTime PaymentDate, int Period, bool IsActive);

