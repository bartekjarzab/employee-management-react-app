import {useState, ChangeEvent} from "react";
import DepartmentDataService from "../services/DepartmentService";
import IDepartmentData from '../types/Department';

const UpdateDepartment: React.FC = () => {
    const initialUpdateDepartmentState = {
        id: 2,
        name: "",
        location: "",
    };

    const[currentDepartment, setCurrentDepartment] = useState<IDepartmentData>(initialUpdateDepartmentState);
   
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCurrentDepartment({ ...currentDepartment, [name]: value });
  };

  var data = {
    id: currentDepartment.id,
    name: currentDepartment.name,
    location: currentDepartment.location,
  }
//  DepartmentDataService.updateDepartment(currentDepartment.id, data)
//       .then((response: any) => {
//         console.log(response.data);
//         setCurrentDepartment({ ...currentDepartment});
//       })
//       .catch((e: Error) => {
//         console.log(e);
//       });
  
  const UpdateDep = () => {
    DepartmentDataService.updateDepartment(currentDepartment.id, currentDepartment)
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
              value={currentDepartment.id}
              onChange={handleInputChange}
              name="id"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={currentDepartment.name}
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
              value={currentDepartment.location}
              onChange={handleInputChange}
              name="location"
            />
          </div>
          <button onClick={UpdateDep} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
  export default UpdateDepartment;