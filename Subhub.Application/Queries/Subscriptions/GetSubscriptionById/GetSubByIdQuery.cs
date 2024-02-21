using MediatR;
using Subhub.Contracts.Responses;

namespace Subhub.Application.Queries.Subscriptions.GetSubscriptionById;

public record GetSubByIdQuery(int Id) : IRequest<GetSubByIdResponse>;
