import React,{useContext} from "react";
import Employee from "./Employee";
import { EmployeeContext } from "./App";



export default function EmployeeList({ employees }) {


  const {onHandleEmployeeAdd} = useContext(EmployeeContext)
  
  return (
    <div className="employee-list">
    <div>
        {employees.map((employee) => {
          return (
          <Employee 
            key={employee.id} 
            {...employee}
          />
          )})}
      </div>

      <div className="employee-list__add-employee-btn-container">
      <button 
        className="btn btn--standard"
        onClick={onHandleEmployeeAdd}
      >
        Add Person
      </button>
      </div>
    </div>
    
  );
}
