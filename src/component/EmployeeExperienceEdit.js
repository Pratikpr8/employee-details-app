import React from "react";

export default function EmployeeExperienceEdit(props) {

  const {experience,onHandleExperienceChange,onHandleExperienceDelete} = props

  function handleChange(changes) {
    onHandleExperienceChange(experience.id, { ...experience, ...changes });
  }

  return (
    <>
      <label 
        htmlFor="position" 
        className="employee-edit__label"
      >
        Position
      </label>
      <input 
        className="employee-edit__input" 
        type="text" 
        id="position" 
        value={experience.position}
        onChange={(e)=> handleChange({position: e.target.value})}
      />
      <label 
        htmlFor="companyName" 
        className="employee-edit__label">
        Company Name
      </label>
      <input 
        className="employee-edit__input" 
        type="text" 
        id="companyName" 
        value={experience.companyName}
        onChange={(e)=> handleChange({companyName: e.target.value})}

      />
      <label 
        htmlFor="duration" 
        className="employee-edit__label">
        Duration
      </label>
      <input 
        className="employee-edit__input" 
        type="text" 
        id="duration" 
        value={experience.duration}
        onChange={(e)=> handleChange({duration: e.target.value})}
      />
      <div></div>
      <button 
        className="btn btn--danger"
        onClick={()=>onHandleExperienceDelete(experience.id)}
      >
        &times;
      </button>
    </>
  );
}
