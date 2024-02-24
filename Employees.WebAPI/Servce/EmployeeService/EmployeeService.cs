using Employees.WebAPI.Database;
using Employees.WebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace Employees.WebAPI.Servce.EmployeeService;

public class EmployeeService : IEmployeeService
{
    private readonly EmployeeDbContext _db;

    public EmployeeService(EmployeeDbContext db)
    {
        _db = db;
    }

    public async Task<ServiceResponse<List<EmployeeModel>>> GetEmployees()
    {
        ServiceResponse<List<EmployeeModel>> serviceresponse = new ServiceResponse<List<EmployeeModel>>();
        
        try
        {
            serviceresponse.Data = await _db.Employees.ToListAsync();

            if (serviceresponse.Data.Count == 0)
            {
                serviceresponse.Message = "No data has been found";
            }

        } catch (Exception ex)
        {
            serviceresponse.Message = ex.Message;
            serviceresponse.Success = false;
        }

        return serviceresponse;
    }

    public async Task<ServiceResponse<EmployeeModel>> GetEmployeeById(int id)
    {
        ServiceResponse<EmployeeModel> serviceResponse = new ServiceResponse<EmployeeModel>();
        try
        {
            EmployeeModel employee = await _db.Employees.FirstOrDefaultAsync(x => x.Id == id);

            serviceResponse.Data = employee;

            if (employee == null) 
            {
                serviceResponse.Data = null;
                serviceResponse.Message = "Employee not found";
                serviceResponse.Success = false;
            }


        } catch (Exception ex)
        {
            serviceResponse.Message = ex.Message;
            serviceResponse.Success = false;
        }

        return serviceResponse;
    }

    public async Task<ServiceResponse<List<EmployeeModel>>> CreateEmployee(EmployeeModel newEmployee)
    {
        ServiceResponse<List<EmployeeModel>> serviceresponse = new ServiceResponse<List<EmployeeModel>>();

        try
        {
            if (newEmployee == null)
            {
                serviceresponse.Data = null;
                serviceresponse.Message = "Invalid data. Please provide details!";
                serviceresponse.Success = false;

                return serviceresponse;
            }

            await _db.Employees.AddAsync(newEmployee);
            await _db.SaveChangesAsync();

            serviceresponse.Data = await _db.Employees.ToListAsync();

        } catch (Exception ex)
        {
            serviceresponse.Message = ex.Message;
            serviceresponse.Success = false;
        }

        return serviceresponse;
    }


    public async Task<ServiceResponse<List<EmployeeModel>>> UpdateEmployee(EmployeeModel toUpdateEmployee)
    {
        ServiceResponse<List<EmployeeModel>> serviceResponse = new ServiceResponse<List<EmployeeModel>>();

        try
        {
            EmployeeModel employee = await _db.Employees.AsNoTracking().FirstOrDefaultAsync(x => x.Id == toUpdateEmployee.Id);

            if (employee == null) 
            {
                serviceResponse.Data = null;
                serviceResponse.Message = "Employee not found";
                serviceResponse.Success = false;
            }

            employee.LastModifiedAt = DateTime.Now.ToLocalTime();
            _db.Employees.Update(toUpdateEmployee);
            await _db.SaveChangesAsync();

            serviceResponse.Data = await _db.Employees.ToListAsync();

        }
        catch (Exception ex)
        {
            serviceResponse.Message = ex.Message;
            serviceResponse.Success = false;
        }

        return serviceResponse;
    }

    public async Task<ServiceResponse<List<EmployeeModel>>> ToInactivateEmployee(int id)
    {
        ServiceResponse<List<EmployeeModel>> serviceResponse = new ServiceResponse<List<EmployeeModel>>();

        try
        {
            EmployeeModel employee = await _db.Employees.FirstOrDefaultAsync(x => x.Id == id);

            if (employee == null)
            {
                serviceResponse.Data = null;
                serviceResponse.Message = "Employee not found";
                serviceResponse.Success = false;
            }

            employee.Active = false;
            employee.LastModifiedAt = DateTime.Now.ToLocalTime();

            _db.Employees.Update(employee);
            await _db.SaveChangesAsync();

            serviceResponse.Data = await _db.Employees.ToListAsync();

        } catch (Exception ex)
        {
            serviceResponse.Message = ex.Message;
            serviceResponse.Success = false;
        }

        return serviceResponse;
    }


    public async Task<ServiceResponse<List<EmployeeModel>>> DeleteEmployee(int id)
    {
        ServiceResponse<List<EmployeeModel>> serviceResponse = new ServiceResponse<List<EmployeeModel>>();

        try
        {
            EmployeeModel employee = await _db.Employees.FirstOrDefaultAsync(x => x.Id == id);

            if (employee == null)
            {
                serviceResponse.Data = null;
                serviceResponse.Message = "Employee not found";
                serviceResponse.Success = false;
            }

            _db.Employees.Remove(employee);
            await _db.SaveChangesAsync();

            serviceResponse.Data = await _db.Employees.ToListAsync();


        } catch (Exception ex)
        {
            serviceResponse.Message = ex.Message;
            serviceResponse.Success = false;
        }

        return serviceResponse;
    }

}
