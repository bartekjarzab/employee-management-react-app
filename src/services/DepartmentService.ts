import http from "../http-common";
import IDepartmentData from "../types/Department";


const getAllDepartments = () => {
  return http.get<Array<IDepartmentData>>("/departments");
};
const createDepartment = (data: any) => {
  return http.post("/departments", data);
};
const updateDepartment =(id: any, data: any) => {
  return http.put(`/departments/${id}`, data );
};
const DepartmentService = {
  getAllDepartments,
  createDepartment,
  updateDepartment,
};
export default DepartmentService;