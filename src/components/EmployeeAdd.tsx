import React, { useState, ChangeEvent } from "react";
import EmployeeDataService from "../services/EmployeeService";
import IEmployeeData from '../types/Employee';

const EmployeeAdd: React.FC = () => {
  const initialEmployeeState = {
    id: null,
    firstName: "",
    lastName: "",
    age: "",
    contactNumber: "",
    
  };
  const [employee, setEmployee] = useState<IEmployeeData>(initialEmployeeState);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };
  
  const saveEmployee = () => {
    var data = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      age: employee.age,
      contactNumber: employee.contactNumber,
    };


    EmployeeDataService.createEmployee(data)
      .then((response: any) => {
        setEmployee({
          id: response.data.id,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          age: response.data.age,
          contactNumber: response.data.contactNumber,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  const newEmployee = () => {
    setEmployee(initialEmployeeState);
    setSubmitted(false);
  };
  return ( <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newEmployee}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="firstName">FirstName</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              required
              value={employee.firstName}
              onChange={handleInputChange}
              name="firstName"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">LastName</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={employee.lastName}
              onChange={handleInputChange}
              name="lastName"
            />
          </div>


         <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              className="form-control"
              id="age"
              required
              value={employee.age}
              onChange={handleInputChange}
              name="age"
            />
          </div>

           <div className="form-group">
            <label htmlFor="contactNumber">contactNumber</label>
            <input
              type="text"
              className="form-control"
              id="contactNumber"
              required
              value={employee.contactNumber}
              onChange={handleInputChange}
              name="contactNumber"
            />
          </div>
          <button onClick={saveEmployee} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default EmployeeAdd;