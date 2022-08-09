import React from "react";
import Employee from "./Employee";

export default function EmployeeList({ employees }) {
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
      <button className="btn btn--primary">Add Person</button>
      </div>
    </div>
    
  );
}
