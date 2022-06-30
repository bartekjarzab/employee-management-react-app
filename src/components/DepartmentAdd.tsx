import React, { useState, ChangeEvent } from "react";
import DepartmentDataService from "../services/DepartmentService";
import IDepartmentData from '../types/Department';
const DepartmentAdd: React.FC = () => {
  const initialDepartmentState = {
    id: null,
    name: "",
    location: "",
  };
  const [department, setDepartment] = useState<IDepartmentData>(initialDepartmentState);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDepartment({ ...department, [name]: value });
  };
  
  const saveDepartment = () => {
    var data = {
      name: department.name,
      location: department.location,
    
    };


    DepartmentDataService.createDepartment(data)
      .then((response: any) => {
        setDepartment({
          id: response.data.id,
          name: response.data.name,
          location: response.data.location,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  const newDepartment = () => {
    setDepartment(initialDepartmentState);
    setSubmitted(false);
  };
  return ( <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newDepartment}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={department.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              required
              value={department.location}
              onChange={handleInputChange}
              name="location"
            />
          </div>
          <button onClick={saveDepartment} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default DepartmentAdd;