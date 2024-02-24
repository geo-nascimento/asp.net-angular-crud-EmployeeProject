using System.Text.Json.Serialization;

namespace Employees.WebAPI.Models.Enums;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum DepartmentEnum
{
    RH, 
    Financeiro, 
    Compras, 
    Atendimento, 
    Zeladoria
}
