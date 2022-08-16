import React from 'react'
import "./employeeItem.css";
import { useNavigate } from 'react-router-dom';
import { getListEmployees, removeEmployee } from '../localStorage/localstorage';

function EmployeeItem({employee , setEmployees}) {
    const navigate = useNavigate()
    const {id , firstName, lastName , email , phone} = employee;
    console.log(id , firstName ,lastName,email , phone , ".....")
    
  const deleteEmployee = () => {
    removeEmployee(id);
    setEmployees(getListEmployees())
  }




  return (
    <tr className = "test">
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>
            <div className = "d-flex gap-2">
                <span type = "button" className = "badge edit-button p-2" onClick = {() => navigate(`/edit-employee/${id}`)}>Edit</span>
                <span type = "button" className = "badge delete-button p-2" onClick = {() => deleteEmployee()}>Delete</span>
            </div>
        </td>
    </tr>
  )
}

export default EmployeeItem
