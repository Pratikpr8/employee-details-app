import React from 'react';
import '../css/app.css';
import EmployeeList from './EmployeeList';

function App() {
  return (
    <>
    <EmployeeList employees={sampleEmployees}/>
    </>
  );
}

const sampleEmployees = [

  {
    id:1,
    name:"Bruno Pluto",
    age:40,
    contact:"+012-456-789",
    hobbies:"1.Coding\n2.Cooking\n3.Playing Piano",
    experiences: [
      {
        id:1,
        position:"Accountant",
        companyName:"Green Garden Hotel",
        duration:"1.5 years"
      },
      {
        id:2,
        position:"Finance Manager",
        companyName:"MoonWalk Company",
        duration:"2 years"

      }
    ]
  },
  {
    id:2,
    name:"Freddie Jupiter",
    age:38,
    contact:"+012-456-789",
    hobbies:"1.Web Development\n2.Singing\n3.Beach walk",
    experiences:[
      {
        id:1,
        position:"Assistant Manager",
        companyName:"Radical Finance",
        duration: "2 years"
      },
      {
        id:2,
        position:"Manager",
        companyName:"The ABD Bank",
        duration:"2 years"
      }
    ]
  }

]

export default App;
 