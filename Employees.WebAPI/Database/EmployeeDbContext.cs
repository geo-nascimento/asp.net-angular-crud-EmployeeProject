using Employees.WebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace Employees.WebAPI.Database;

public class EmployeeDbContext : DbContext
{
    public EmployeeDbContext(DbContextOptions<EmployeeDbContext> options):base(options)
    {
        
    }


    public DbSet<EmployeeModel> Employees { get; set; }
}
