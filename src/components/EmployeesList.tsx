import React, { useState, useEffect, ChangeEvent } from "react";
import EmployeeDataService from "../services/EmployeeService";
import { Link } from "react-router-dom";
import IEmployeeData from '../types/Employee';

const EmployeesList: React.FC = () => {
  const [employees, setEmployees] = useState<Array<IEmployeeData>>([]);

  useEffect(() => {
    retrieveEmployees();
  }, []);

  const retrieveEmployees = () => {
    EmployeeDataService.getAllEmployees()
      .then((response: any) => {
        setEmployees(response.data);
        console.log(retrieveEmployees);
      })
      .catch((e: Error) => {
    //    console.log(e);
      });
  };

  return (
    <div>
      <h4>Employee List</h4>
     
         <div className="container">
                    <div className="row">
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Firstname</th>
                                    <th scope="col">Lastname</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Contact Number</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {employees && employees.map(employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.age}</td>
                                        <td>{employee.contactNumber}</td>
                                        
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
    </div>
            
             
       
  );
};

export default EmployeesList;