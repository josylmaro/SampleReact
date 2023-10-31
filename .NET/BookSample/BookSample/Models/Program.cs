using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen(c => c.SwaggerDoc("v1", new OpenApiInfo
{
    Version = "v1",
    Title = "API for  Books",
    Description = "Use for generating documents for delivery"
}));

var app = builder.Build();

    app.UseSwagger();
    app.UseSwaggerUI(c =>
    c.SwaggerEndpoint("v1/swagger.json", "Sample swagger for books"));


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
