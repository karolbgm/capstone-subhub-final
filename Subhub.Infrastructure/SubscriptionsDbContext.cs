using Microsoft.EntityFrameworkCore;
using Subhub.Domain.Entities;
namespace Subhub.Infrastructure;

public class SubscriptionsDbContext : DbContext
{
  public SubscriptionsDbContext(DbContextOptions options) : base(options)
  {

  }
  public DbSet<Subscription> Subscriptions {get; set;}
}
