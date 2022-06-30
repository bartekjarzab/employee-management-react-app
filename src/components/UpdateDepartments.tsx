import React, { useState, useEffect, ChangeEvent } from "react";
import UpdateDepartmentsDataService from "../services/EmployeeService";
import { Link } from "react-router-dom";
import IUpdateDepartmentsData from '../types/UpdateDepartments';
import DepartmentDataService from "../services/DepartmentService";
import IDepartmentData from '../types/Department';
import Select from "react-select";
import { getValue } from "@testing-library/user-event/dist/utils";

const UpdateDepartments: React.FC = () => {
  
  const initialUpdateDepartmentState = {
    id: 1,
    departmentsList: [],  
  };

    useEffect(() => {
    retrieveDepartments();
  }, []);
  
  const [departments, setDepartments] = useState<Array<IDepartmentData>>([]);
  const [selectedDepartments, setSelectedDepartment] = useState<Array<Number>>([]);
  const [employeeWithDepartments, setEmployeeWithDepartments] = useState<IUpdateDepartmentsData>(initialUpdateDepartmentState);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEmployeeWithDepartments({ ...employeeWithDepartments, [name]: value });
  };

const retrieveDepartments = () => {
    DepartmentDataService.getAllDepartments()
      .then((response: any) => {
        setDepartments(response.data);
        console.log(retrieveDepartments);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const SaveEmployeeWithDepartment = () => {
    var data = {
      id: employeeWithDepartments.id,
      departmentsList: employeeWithDepartments.departmentsList,
    };


     UpdateDepartmentsDataService.updateDepartments(data)
      .then((response: any) => {
        setEmployeeWithDepartments({
          id: response.data.id,
          departmentsList: response.data.departmentsList,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
    const newEmployeeWithDepartments = () => {
    setEmployeeWithDepartments(initialUpdateDepartmentState);
    setSubmitted(false);
  };
  return ( <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newEmployeeWithDepartments}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="IdEmployee">IdEmployee</label>
            <input
              type="Number"
              className="form-control"
              id="IdEmployee"
              required
              value={employeeWithDepartments.id}
              onChange={handleInputChange}
              name="IdEmployee"
            />
          </div>
          <div className="form-group">
            <label htmlFor="departments">departments</label>
                {/* <Select
                            value={departments.map((x) => x)}
                            closeMenuOnSelect={false}
                            isMulti
                            options={departments.map((x) => x.name)}
                            onChange={undefined}
                            getValue={} 
                        /> */}
                        <select 
                        multiple={true}
                        onChange = {(e) => setSelectedDepartment(Array.isArray(e) ? e.map((x) => x.value):[])}>
                        {departments.map((departments) => (
                        <option key={departments.id} value={departments.name}>
                        {departments.name}
                        </option>
      ))}
    </select>
          </div>
          <button onClick={SaveEmployeeWithDepartment} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
  export default UpdateDepartments;