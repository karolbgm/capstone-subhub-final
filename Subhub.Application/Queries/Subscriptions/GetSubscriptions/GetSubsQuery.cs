using MediatR;

namespace Subhub.Application.Queries.Subscriptions.GetSubscriptions;

public record GetSubsQuery() : IRequest<GetSubsResponse>
{

}
