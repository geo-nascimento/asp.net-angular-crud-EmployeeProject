using Employees.WebAPI.Models;
using Employees.WebAPI.Servce.EmployeeService;
using Microsoft.AspNetCore.Mvc;

namespace Employees.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _es;

        public EmployeeController(IEmployeeService es)
        {
            _es = es;
        }

        [HttpGet]
        public async Task<ActionResult<ServiceResponse<List<EmployeeModel>>>> GetEmployees()
        {
            return Ok(await _es.GetEmployees());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceResponse<EmployeeModel>>> GetEmployeeById(int id)
        {
            ServiceResponse<EmployeeModel> employee = await _es.GetEmployeeById(id);

            return Ok(employee);
        }

        [HttpPost]
        public async Task<ActionResult<ServiceResponse<List<EmployeeModel>>>> CreateEmployee(EmployeeModel newEmployee)
        {
          return CreatedAtRoute("",await _es.CreateEmployee(newEmployee));
        }

        [HttpPut("inactivate/{id}")]
        public async Task<ActionResult<ServiceResponse<List<EmployeeModel>>>> ToInactivateEmployee(int id)
        {
            ServiceResponse<List<EmployeeModel>> serviceResponse = await _es.ToInactivateEmployee(id);

            return Ok(serviceResponse);
        }

        [HttpPut]
        public async Task<ActionResult<ServiceResponse<List<EmployeeModel>>>> UpdateEmployee(EmployeeModel toUpdateEmployee)
        {
            ServiceResponse<List<EmployeeModel>> serviceResponse = await _es.UpdateEmployee(toUpdateEmployee);

            return Ok(serviceResponse);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ServiceResponse<List<EmployeeModel>>>> DeleteEmployee(int id)
        {
            ServiceResponse<List<EmployeeModel>> serviceResponse = await _es.DeleteEmployee(id);

            return Ok(serviceResponse);
        }
    }
}
 