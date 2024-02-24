using Employees.WebAPI.Models;

namespace Employees.WebAPI.Servce.EmployeeService;

public interface IEmployeeService
{
    Task<ServiceResponse<List<EmployeeModel>>> GetEmployees();
    Task<ServiceResponse<EmployeeModel>> GetEmployeeById(int id);
    Task<ServiceResponse<List<EmployeeModel>>> CreateEmployee(EmployeeModel newEmployee);
    Task<ServiceResponse<List<EmployeeModel>>> UpdateEmployee(EmployeeModel toUpdateEmployee);
    Task<ServiceResponse<List<EmployeeModel>>> DeleteEmployee(int id);
    Task<ServiceResponse<List<EmployeeModel>>> ToInactivateEmployee(int id);

}
