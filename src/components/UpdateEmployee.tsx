import {useState, ChangeEvent} from "react";
import EmployeeDataService from "../services/EmployeeService";
import IEmployeeData from '../types/Employee';

const UpdateEmployee: React.FC = () => {
    const initialUpdateDepartmentState = {
        id: 1,
        firstName: "",
        lastName: "",
        age: "",
        contactNumber: "",
    };

    const[currentEmployee, setCurrentEmployee] = useState<IEmployeeData>(initialUpdateDepartmentState);
   
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCurrentEmployee({ ...currentEmployee, [name]: value });
  };

  var data = {
    id: currentEmployee.id,
    firstName: currentEmployee.firstName,
    lastName: currentEmployee.lastName,
    age: currentEmployee.age,
    contactNumber: currentEmployee.contactNumber,
  }

  const UpdateEmp = () => {
    EmployeeDataService.updateEmployee(currentEmployee.id, currentEmployee)
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return ( <div className="submit-form">
      { (
        <div>
            <div className="form-group">
            <label htmlFor="id">ID</label>
            <input
              type="text"
              className="form-control"
              id="id"
              required
              value={currentEmployee.id}
              onChange={handleInputChange}
              name="id"
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              required
              value={currentEmployee.firstName}
              onChange={handleInputChange}
              name="firstName"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              required
              value={currentEmployee.lastName}
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
              value={currentEmployee.age}
              onChange={handleInputChange}
              name="age"
            />
          </div>
            <div className="form-group">
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              type="text"
              className="form-control"
              id="contactNumber"
              required
              value={currentEmployee.contactNumber}
              onChange={handleInputChange}
              name="contactNumber"
            />
          </div>
          <button onClick={UpdateEmp} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
  export default UpdateEmployee;