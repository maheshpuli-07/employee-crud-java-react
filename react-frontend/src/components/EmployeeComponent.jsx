import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom';





const EmployeeComponent = () => {

     const [firstName, setFirstName] = useState('')
     const [lastName, setLastName] = useState('')
     const [emailId, setEmailId] = useState('')
     const [successMessage, setSuccessMessage] = useState(''); // State for success message

     const {id} = useParams();

     const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        emailId: ''
     })

     const navigator = useNavigate();


     useEffect(() => {

      if(id){
        getEmployee(id).then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmailId(response.data.emailId);

        }).catch(error => {
          console.error(error);
        })
      }
      
     },[id]);

  

    

    function saveOrUpdateEmployee(e) {
      e.preventDefault();

      if(validateForm()) {
        const employee = {firstName, lastName, emailId}
      console.log(employee);

        if (id) {
            updateEmployee(id, employee).then((response) => {
                console.log(response.data);
                setSuccessMessage('Employee updated successfully!'); // Set success message
                setTimeout(() => {
                    setSuccessMessage(''); // Clear message after 3 seconds
                    navigator('/employees');
                }, 2000); // Navigate after 3 seconds
            }).catch(error => {
                console.error(error);
            });
        } else {
            createEmployee(employee).then((response) => {
                console.log(response.data);
                setSuccessMessage('Employee created successfully!'); // Set success message
                setTimeout(() => {
                    setSuccessMessage(''); // Clear message after 3 seconds
                    navigator('/employees');
                }, 2000); // Navigate after 3 seconds
            }).catch(error => {
                console.error(error);
            });
        }


      }

      

    }

    function validateForm(){
      let valid = true;

      const errorCopy = {... errors}

      if(firstName.trim()) {
        errorCopy.firstName = '';
      }else {
        errorCopy.firstName = 'FirstName Is Required';
        valid = false;
      }

      if(lastName.trim()) {
        errorCopy.lastName = '';
      }else {
        errorCopy.lastName = 'LastName Is Required';
        valid = false;
      }

      if(emailId.trim()) {
        errorCopy.emailId = '';
      }else {
        errorCopy.emailId = 'Email Address Is Mandatory';
        valid = false;
      }
      
      setErrors(errorCopy);

      return valid;
      
    }

    function pageTitle(){
      if(id){
        return <h2 className='text-center'>Update Employee</h2>
      }else {
        return <h2 className='text-center'>Add Employee</h2>
      }
    }
    
    function viewEmployeeList() {
      navigator('/employees'); 
    }
    

  return (
    <div className='container'>
      <br /> <br/>
      <div className='row'>
        <div className='card mb-5 col-md-6 offset-md-3 offset-md-3'>
          { pageTitle() };
          <div className='card-body'>
            {/* Conditionally render the success message */}
            {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>FirstName:</label>
                <input
                  type='text'
                  placeholder='Enter Employee FirstName'
                  name='firstName'
                  value={firstName}
                  className={`form-control ${ errors.firstName ? 'is-invalid': ''}`}
                  onChange={(e) => { 
                    setFirstName(e.target.value);
                  }}
                >
                </input>
                {errors.firstName && <div className='invalid-feedback'> {errors.firstName} </div> }

              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>LastName:</label>
                <input
                  type='text'
                  placeholder='Enter Employee LastName'
                  name='lastName'
                  value={lastName}
                  className={ `form-control ${ errors.lastName ? 'is-invalid' : ''}`}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                >
                </input>
                {errors.lastName && <div className='invalid-feedback'> {errors.lastName} </div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>EmailId:</label>
                <input
                  type='text'
                  placeholder='Enter Employee email address'
                  name='email'
                  value={emailId}
                  className={`form-control ${errors.emailId ? 'is-invalid': ''}`}
                  onChange={(e) => {
                    setEmailId(e.target.value);
                  }}
                >
                </input>
                {errors.emailId && <div className='invalid-feedback'> {errors.emailId} </div>}
              </div>

              <button className='btn btn-success' onClick={saveOrUpdateEmployee}> Submit </button>

              {id && (
                <button
                  className='btn btn-info ml-2'
                  onClick={viewEmployeeList}
                  style={{ marginLeft: '10px' }}
                >
                  View List
                </button>
              )}

            </form>
          </div>
        </div>

      </div>

    </div>
  )
}

export default EmployeeComponent  