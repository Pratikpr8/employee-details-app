import React from "react";
import ExperienceList from "./ExperienceList";

export default function Employee(props) {

  const { name, age, contact, hobbies,experiences } = props;

  return (
    <div className="employee">
      <div className="employee__header">
        <h3 className="employee__title ">{name}</h3>
        <div>
          <button className="btn btn--primary mr-1">Edit</button>
          <button className="btn btn--danger">Delete</button>
        </div>
      </div>
      <div>
        <span>Age:</span>
        <span>{age}</span>
      </div>
      <div>
        <span>Contact:</span>
        <span>{contact}</span>
      </div>
      <div>
        <span>Hobbies:</span>
        <div>{hobbies}</div>
      </div>
      <div>
        <span>Experience:</span>
        <ExperienceList experiences={experiences}/>
      </div>
    </div>
  );
}
