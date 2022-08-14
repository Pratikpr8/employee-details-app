import React,{useContext} from "react";
import ExperienceList from "./ExperienceList";
import { EmployeeContext } from "./App";

export default function Employee(props) {
  const {id, name, age, contact, hobbies, experiences } = props;

  const {onHandleEmployeeDelete, onHandleEmployeeSelect} = useContext(EmployeeContext)

  return (
    <div className="employee">
      <div className="employee__header">
        <h3 className="employee__title ">{name}</h3>
        <div>
          <button 
            className="btn btn--primary mr-1"
            onClick={() => onHandleEmployeeSelect(id)}
          >
            Edit
          </button>
          <button 
            className="btn btn--danger"
            onClick={()=>onHandleEmployeeDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="employee__row">
        <span className="employee__label">Age:</span>
        <span className="employee__value">{age}</span>
      </div>
      <div className="employee__row">
        <span className="employee__label">Contact:</span>
        <span className="employee__value">{contact}</span>
      </div>
      <div className="employee__row">
        <span className="employee__label">Hobbies:</span>
        <div className="employee__value employee__value--indented employee__hobbies">{hobbies}</div>
      </div>
      <div className="employee__row">
        <span className="employee__label">Experience:</span>
        <div className="employee__value--indented">
        <ExperienceList experiences={experiences} />
        </div>
      </div>
    </div>
  );
}
