using Mapster;
using Subhub.Contracts.Responses;
using Subhub.Domain.Entities;

namespace Subhub.Application.Mappings;

public class MappingConfig
{
    public static void Configure()
    {
        TypeAdapterConfig<List<Subscription>, GetSubsResponse>.NewConfig()
            .Map(dest => dest.SubscriptionsDtos, src => src);
    }
}

