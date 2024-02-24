using Employees.WebAPI.Database;
using Employees.WebAPI.Servce.EmployeeService;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
#region Forçar lowercase nas roas da API
builder.Services.AddRouting(options => options.LowercaseUrls = true);
#endregion
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

#region Conexão com o banco de dados
var configuration = builder.Configuration;
builder.Services.AddDbContext<EmployeeDbContext>(opt => opt.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));
#endregion

#region Injeção de dependência
builder.Services.AddScoped<IEmployeeService, EmployeeService>();
#endregion

#region Cors
builder.Services.AddCors();

#endregion

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(c =>
{
    c.AllowAnyHeader();
    c.AllowAnyMethod();
    c.AllowAnyOrigin();
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
