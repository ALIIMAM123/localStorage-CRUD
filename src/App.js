import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import EmployeeForm from './component/EmployeeForm';
import EmployeeItem from './component/EmployeeItem';
import { EmployeeList } from './component/EmployeeList';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path = "/" element = {<EmployeeForm />} />
      <Route path = "/employee-item" element = {<EmployeeItem />} />
      <Route path = "/employee-list" element = {<EmployeeList />} />
      <Route path = "/edit-employee/:id" element = {<EmployeeForm />} />
    </Routes>
     
    </div>
  );
}

export default App;
