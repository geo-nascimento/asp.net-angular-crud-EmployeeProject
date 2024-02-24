using Employees.WebAPI.Models.Enums;
using System.ComponentModel.DataAnnotations;

namespace Employees.WebAPI.Models;

public class EmployeeModel
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    public string LastName { get; set; }
    public DepartmentEnum Department { get; set; }
    public bool Active { get; set; }
    public WorkShiftEnum WorkShift { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now.ToLocalTime();
    public DateTime LastModifiedAt { get; set;} = DateTime.Now.ToLocalTime();

}
