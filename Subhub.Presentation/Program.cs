using Microsoft.EntityFrameworkCore;
using Subhub.Application;
using Subhub.Infrastructure;
using Subhub.Presentation.Modules;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<SubscriptionsDbContext>(optionsAction => {
    optionsAction.UseSqlite(builder.Configuration.GetConnectionString(name:"DbConnectionString"));
});

builder.Services.AddApplication();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.AddSubscriptionsEndpoints();
app.Run();
