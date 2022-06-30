import React, { useState, useEffect, ChangeEvent } from "react";
import DepartmentDataService from "../services/DepartmentService";
import { Link } from "react-router-dom";
import IDepartmentData from '../types/Department';

const DepartmentsList: React.FC = () => {
  const [departments, setDepartments] = useState<Array<IDepartmentData>>([]);

  useEffect(() => {
    retrieveDepartments();
  }, []);

  const retrieveDepartments = () => {
    DepartmentDataService.getAllDepartments()
      .then((response: any) => {
        setDepartments(response.data);
        console.log(retrieveDepartments);
      })
      .catch((e: Error) => {
    //    console.log(e);
      });
  };

  return (
    <div>
      <h4>Departments List</h4>
     
         <div className="container">
                    <div className="row">
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {departments && departments.map(department =>
                                    <tr>
                                        <td>{department.name}</td>
                                        <td>{department.location}</td>
                                     
                                        
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
    </div>
            
             
       
  );
};

export default DepartmentsList;