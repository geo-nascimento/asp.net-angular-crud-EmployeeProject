using System.Text.Json.Serialization;

namespace Employees.WebAPI.Models.Enums;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum WorkShiftEnum
{
    Manha,
    Tarde,
    Noite
}
