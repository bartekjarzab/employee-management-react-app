import http from "../http-common";
import IEmployeeData from "../types/Employee";


const getAllEmployees = () => {
  return http.get<Array<IEmployeeData>>("/employees");
};
const createEmployee = (data: any) => {
  return http.post("/employees", data);
};
const updateDepartments = (data: any) => {
  return http.post("/updateDepartments", data);
};
const updateEmployee = (id:any, data: IEmployeeData ) => {
  return http.put(`/employees/${id}`, data)
};

const EmployeeService = {
  getAllEmployees,
  createEmployee,
  updateDepartments,
  updateEmployee,
};
export default EmployeeService;