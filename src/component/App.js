import React, { useState, useEffect } from "react";
import "../css/app.css";
import EmployeeList from "./EmployeeList";
import EmployeeEdit from "./EmployeeEdit";
import { v4 as uuidv4 } from "uuid";

export const EmployeeContext = React.createContext();

function App() {
  const [selectedEmployeeId, setSelectedEmployeeId] = useState();
  const [employees, setEmployees] = useState(sampleEmployees);

  const selectedEmployee = employees.find(
    (employee) => employee.id === selectedEmployeeId
  );

  const employeeContextValue = {
    onHandleEmployeeAdd,
    onHandleEmployeeDelete,
    onHandleEmployeeSelect,
    onHandleEmployeeChange,
  };

  useEffect(() => {
    const employeeJson = localStorage.getItem("Employee_List");
    if (employeeJson !== null) setEmployees(JSON.parse(employeeJson));
  }, []);

  useEffect(() => {
    localStorage.setItem("Employee_list", JSON.stringify(employees));
  }, [employees]);

  function onHandleEmployeeChange(id, employee) {
    const newEmployees = [...employees];
    const index = newEmployees.findIndex((r) => r.id === id);
    newEmployees[index] = employee;
    setEmployees(newEmployees);
  }

  function onHandleEmployeeSelect(id) {
    setSelectedEmployeeId(id);
  }

  function onHandleEmployeeAdd() {
    const newEmployee = {
      id: uuidv4(),
      name: "",
      age: 18,
      contact: "",
      hobbies: "",
      experiences: [
        {
          id: uuidv4(),
          position: "",
          companyName: "",
          duration: "",
        },
      ],
    };
    setSelectedEmployeeId(newEmployee.id);
    setEmployees([...employees, newEmployee]);
  }

  function onHandleEmployeeDelete(id) {
    if (selectedEmployeeId != null && selectedEmployeeId === id) {
      setSelectedEmployeeId(undefined);
    }
    setEmployees(employees.filter((employee) => employee.id !== id));
  }

  return (
    <EmployeeContext.Provider value={employeeContextValue}>
      <EmployeeList employees={employees} />
      {selectedEmployee && <EmployeeEdit employee={selectedEmployee} />}
    </EmployeeContext.Provider>
  );
}

const sampleEmployees = [
  {
    id: 1,
    name: "Bruno Pluto",
    age: 40,
    contact: "+012-456-789",
    hobbies: "1.Coding\n2.Cooking\n3.Playing Piano",
    experiences: [
      {
        id: 1,
        position: "Accountant",
        companyName: "Green Garden Hotel",
        duration: "1.5 years",
      },
      {
        id: 2,
        position: "Finance Manager",
        companyName: "MoonWalk Company",
        duration: "2 years",
      },
    ],
  },
  {
    id: 2,
    name: "Freddie Jupiter",
    age: 38,
    contact: "+012-456-789",
    hobbies: "1.Web Development\n2.Singing\n3.Beach walk",
    experiences: [
      {
        id: 1,
        position: "Assistant Manager",
        companyName: "Radical Finance",
        duration: "2 years",
      },
      {
        id: 2,
        position: "Manager",
        companyName: "The ABD Bank",
        duration: "2 years",
      },
    ],
  },
];

export default App;
