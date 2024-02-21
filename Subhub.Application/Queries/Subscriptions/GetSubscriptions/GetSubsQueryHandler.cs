using Mapster;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Subhub.Contracts.Responses;
using Subhub.Infrastructure;

namespace Subhub.Application.Queries.Subscriptions.GetSubscriptions;

public class GetSubsQueryHandler : IRequestHandler<GetSubsQuery, GetSubsResponse>
{
    private readonly SubscriptionsDbContext _subscriptionsDbContext;
    public GetSubsQueryHandler(SubscriptionsDbContext subscriptionsDbContext)
    {
        _subscriptionsDbContext = subscriptionsDbContext;
    }
    public async Task<GetSubsResponse> Handle(GetSubsQuery request, CancellationToken cancellationToken)
    {
        var subscriptions = await _subscriptionsDbContext.Subscriptions.ToListAsync(cancellationToken);
       
       return subscriptions.Adapt<GetSubsResponse>();
    }
    

}


