import React, {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees, clearAllEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

   const [employees, setEmployees] = useState([])

   const navigator = useNavigate();

   useEffect(() => {
    getAllEmployees();
   },[])

   function getAllEmployees(){

    listEmployees().then((response) => {
        setEmployees(response.data)
    }).catch(error => {
        console.error(error);
    })

   }

   function addNewEmployee() {
    navigator('/add-employee');
   }

   function updateEmpl(id){
    navigator(`/edit-employee/${id}`);
   }

    function removeEmployee(id){

    navigator(`/delete-employee/${id}`);

    const confirmed = window.confirm("Are you sure you want to delete this record?");

    if (confirmed) {
        deleteEmployee(id).then(() => {
            getAllEmployees(); 
            navigator('/employees');
        }).catch(error => {
            console.error(error);
        });
    } else {
        navigator('/employees');
    }
    }

    function viewEmployee(){
        getAllEmployees();
    }

    function clearAll() {

        navigator(`/clear-all`);

        const confirmed = window.confirm("Are you sure you want to delete all employees?");
        if (confirmed) {
            clearAllEmployees().then(() => {
                getAllEmployees(); // Refresh the employee list
                navigator('/employees');
            }).catch(error => {
                console.error(error);
            });
        } else {
            navigator('/employees');
        }
    }
  return (
    <div className='container'>
        <div className='sticky-header'>
        <h2 className='text-center'>List Of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={ addNewEmployee }>Create Emp</button>
        </div>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee EmailId</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                            <td>
                                
                                <button className='btn btn-info' onClick={() => updateEmpl(employee.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)} style={{marginLeft: '10px'}}>Delete</button>
                                

                            </td>
                        </tr>
                    )
                }
                
            </tbody>
        </table>
        {employees.length > 0 && (
                <button className='btn btn-danger' onClick={clearAll}>Clear All</button>
            )}
    </div>
  )
}

export default ListEmployeeComponent