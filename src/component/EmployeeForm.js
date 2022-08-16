import React from 'react'
// import "./form.css"
import "./employeeForm.css";
import {useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import uuid from "react-uuid"
import { addEmployee, editEmployee } from '../localStorage/localstorage';
import { useParams } from 'react-router-dom';
import { getEmployeeById } from '../localStorage/localstorage';



const EmployeeForm = () => {
  const navigate = useNavigate()
  const {id}  = useParams();

 const {inputValues, handleInputChange,setForm ,resetForm  } = useForm ({
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
 })


 useEffect(() => {
  if (id) {
      const employee = getEmployeeById(id);
      setForm(employee);
  }
}, [id]);

//   console.log(inputValues, handleInputChange)
// let id = 1 ;
  const handleSubmit = (e) => {
    e.preventDefault();
   id ? editEmployee(id , inputValues) : addEmployee({id:uuid() , ...inputValues});
   navigate("/employee-list")
   resetForm();
  }
  

  
  return (
    <>
          {/* create form  */}
          <div className = "form-container d-flex align-items-center justify-content-center px-4">
 
            <div className = "container-fluid wrapper-container col-md-6 p-4 ">

             <div className = "row ">
             <h1 className = "user-heading text-center my-3">{id ? "Edit" : "Add new"} User  </h1>
             
             <form onSubmit = {handleSubmit}>
                   {/* first-name */}
                 <div className = "col-12 col-md-6  offset-md-3 ">
                 <label htmlFor="first-name" class="form-label">First Name <span className = "important-mark">*</span></label>
                     <div class="input-group mb-3">
                    <input type="text" class="form-control p-3" name = "firstName" value = {inputValues.firstName} onChange = {handleInputChange} placeholder = "First Name" id="first-name" aria-describedby="basic-addon3" required  />
                     </div>
                 </div>
                 {/* last name */}
                 <div className = "col-12 col-md-6  offset-md-3">
                 <label htmlFor="last-name" class="form-label">Last Name <span className = "important-mark">*</span> </label>
                     <div class="input-group mb-3">
                    <input type="text" class="form-control p-3" name = "lastName" value = {inputValues.lastName}  onChange = {handleInputChange} placeholder = "Last Name" id="last-name" aria-describedby="basic-addon3" required   />
                     </div>
                 </div>
                 {/* email */}
                 <div className = "col-12 col-md-6  offset-md-3">
                 <label htmlFor="email" class="form-label">Email <span className = "important-mark">*</span></label>
                     <div class="input-group mb-3">
                    <input type="text" class="form-control p-3" name = "email" value = {inputValues.email}  onChange = {handleInputChange} placeholder = "Email" id="email" aria-describedby="basic-addon3"  required  />
                     </div>
                 </div>
                 {/* phone */}
                 <div className = "col-12 col-md-6  offset-md-3"> 
                 <label htmlFor="phone-number" class="form-label">Phone Number <span className = "important-mark">*</span></label>
                     <div class="input-group mb-3">
                    <input type="text" class="form-control p-3" name = "phone"  value = {inputValues.phone}   onChange = {handleInputChange} placeholder='Phone Number' id="phone-number" aria-describedby="basic-addon3" required  />
                     </div>
                 </div>
                 {/* button */}
                 <div class="  text-center">
                 <button class="btn submit-button btn-lg" type="submit"> Submit Button</button>
                 
                 </div>
             </form>
            
             </div>
            </div>
          </div>

          {/* edit form  */}
      
    </>
   
  )
}

export default EmployeeForm
