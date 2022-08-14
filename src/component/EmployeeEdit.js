import React, { useContext } from "react";
import EmployeeExperienceEdit from "./EmployeeExperienceEdit";
import { EmployeeContext } from "./App";
import { v4 as uuidv4 } from "uuid";

export default function EmployeeEdit({ employee }) {
  const { onHandleEmployeeChange, onHandleEmployeeSelect } =
    useContext(EmployeeContext);

  function handleChange(changes) {
    onHandleEmployeeChange(employee.id, { ...employee, ...changes });
  }

  function onHandleExperienceChange(id, experience) {
    const newExperiences = [...employee.experiences];
    const index = newExperiences.findIndex((exp) => exp.id === id);
    newExperiences[index] = experience;
    handleChange({ experiences: newExperiences });
  }

  function onHandleExperienceAdd() {
    const newExperience = {
      id: uuidv4(),
      position: "",
      companyName: "",
      duration: "",
    };

    handleChange({ experiences: [...employee.experiences, newExperience] });
  }

  function onHandleExperienceDelete(id) {
    handleChange({
      experiences: employee.experiences.filter((exp) => exp.id !== id)
    });
  }

  return (
    <div className="employee-edit">
      <div className="employee-edit__remove-button-container">
        <button
          className="btn employee-edit__remove-button"
          onClick={() => onHandleEmployeeSelect(undefined)}
        >
          &times;
        </button>
      </div>
      <div className="employee-edit__details-grid">
        <label htmlFor="name" className="employee-edit__label">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="employee-edit__input"
          value={employee.name}
          onChange={(e) => handleChange({ name: e.target.value })}
        />
        <label htmlFor="Contact" className="employee-edit__label">
          Contact
        </label>
        <input
          type="text"
          id="contact"
          name="contact"
          className="employee-edit__input"
          value={employee.contact}
          onChange={(e) => handleChange({ contact: e.target.value })}
        />
        <label htmlFor="Age" className="employee-edit__label">
          Age
        </label>
        <input
          type="number"
          min="18"
          id="age"
          name="age"
          className="employee-edit__input"
          value={employee.age}
          onChange={(e) => handleChange({ age: parseInt(e.target.value) || "" })}
        />
        <label htmlFor="hobbies" className="employee-edit__label">
          Hobbies
        </label>
        <textarea
          name="hobbies"
          id="hobbies"
          className="employee-edit__input"
          value={employee.hobbies}
          onChange={(e) => handleChange({ hobbies: e.target.value })}
        />
      </div>
      <br />
      <label className="employee-edit__label">Experience</label>
      <div className="employee-edit__experience-grid">
        {employee.experiences.map((experience) => (
          <EmployeeExperienceEdit
            key={experience.id}
            experience={experience}
            onHandleExperienceChange={onHandleExperienceChange}
            onHandleExperienceDelete={onHandleExperienceDelete}
          />
        ))}
      </div>
      <div className="employee-edit__add-experience-btn-container">
        <button
          className="btn btn--standard"
          onClick={() => onHandleExperienceAdd()}
        >
          Add Experience
        </button>
      </div>
    </div>
  );
}
