import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';
import DepartmentAdd from './components/DepartmentAdd';
import DepartmentsList from './components/DepartmentsList';
import EmployeeAdd from './components/EmployeeAdd';
import EmployeesList from './components/EmployeesList';
import UpdateDepartment from './components/UpdateDeparment';
import UpdateDepartments from './components/UpdateDepartments';
import UpdateEmployee from './components/UpdateEmployee';


function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
       
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Employees List
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/employeesAdd"} className="nav-link">
              Employees Add
            </Link>
          </li>
           <li className="nav-item">
            <Link to={"/departmentsList"} className="nav-link">
              Departments List
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/departmentsAdd"} className="nav-link">
              Departments Add
            </Link>
          </li>
           <li className="nav-item">
            <Link to={"/updateDepartment"} className="nav-link">
              Update Department
            </Link>
          </li>
           <li className="nav-item">
            <Link to={"/updateEmployee"} className="nav-link">
              Update Employee
            </Link>
          </li>
           <li className="nav-item">
            <Link to={"/updateDepartments"} className="nav-link">
              Update Departments
            </Link>
          </li>
        </div>
      </nav>
        <Routes>
          <Route path="/" 
                 element={
                    <EmployeesList/>
                 } />
                 <Route path="/employeesAdd" 
                 element={
                    <EmployeeAdd/>
                 } />
                 <Route path="/departmentsList" 
                 element={
                    <DepartmentsList/>
                 } />
                 <Route path="/departmentsAdd" 
                 element={
                    <DepartmentAdd/>
                 } />
                 <Route path="/updateDepartments" 
                 element={
                    <UpdateDepartments/>
                 } />
                  <Route path="/updateDepartment" 
                 element={
                    <UpdateDepartment/>
                 } />
                  <Route path="/updateEmployee" 
                 element={
                    <UpdateEmployee/>
                 } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
