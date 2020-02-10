import React,{useState} from 'react';

import './App.css';





function App() {
const {firstName, setFirstName} =useState();
const {lastName, setLastName} =useState();
const {email, setEmail} =useState();




function onSubmit(){
 console.log(firstName+" "+ lastName + " - " +email)
 }




  return (
   
    <div className="main">
      
      <form> 
   

     <input
    type="text"
    name="txtLname"
    value={setLastName}
    placeholder="Last Name"
    required
/>
     <input
    type="text"
    name="txtFname"
    value={setFirstName}
    placeholder="First Name"
    required
/>

   <input
    type="email"
    name="txtEmail"
     value={setEmail}
    placeholder="Email"
    required
/>


  <input type="submit" value="submit" />
</form> 



    </div>
   
  );
}

export default App;
