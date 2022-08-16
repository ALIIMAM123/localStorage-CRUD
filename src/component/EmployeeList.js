import { useState, useEffect } from "react";
import { getListEmployees } from "../localStorage/localstorage";
import EmployeeItem from "./EmployeeItem";
import "./employeeList.css";
import { useNavigate } from "react-router-dom";


export const EmployeeList = () => {
    const navigate = useNavigate();
    const [employees , setEmployees] = useState([]);
   console.log(employees ," xxxxxx")
   useEffect(() => {
     setEmployees( getListEmployees())
   }, [])


  const handleBack = () => {
    navigate("/")
   
  }

 return (
    <div className = "bg--color" >
  
   
 
   <div className = "go-back-button container">
   <div className = "row">
   <div className = "col-12">
    <h1 className = "text-center heading">Details </h1>
    </div>
    <div className = "col-12 ">
    <button class = "go-back   mb-3" onClick = {handleBack}>Go Back</button>
      </div>
  
   </div>
   
   <table className = "table table-hover" border={1}>
        <thead className = "top-row">
            <tr>
                <th scope = "col">Firstname </th>
                <th scope = "col">Lastname</th>
                <th scope = "col">E-mail</th>
                <th scope = "col">Phone</th>
                <th scope = "col"></th>
            </tr>
        </thead>
        <tbody className = "eachbody">
     { employees.map(employee =>  <EmployeeItem  employee = { employee} setEmployees = {setEmployees} /> )}
        </tbody>
    </table>

               
    </div>
           
    
    
    
   </div>
  
  
 
 )
}
