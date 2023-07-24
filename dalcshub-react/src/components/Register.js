// Author: Vrund Patel

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css'
import { Button} from '@mui/material';

const Register = () => {

  const [input, setInput] = useState({
    fName: "",
    lName: "",
    type: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInput({
        ...input,
        [name]: value
    });
  };

  const submitHandler = (e) =>{
    
    e.preventDefault()
    console.log(input)

    const errors = validate()
    setError(errors);
    
    console.log(errors)
    console.log(Object.values(errors)[4].length) 
 
    if(Object.values(errors)[0].length === 0 && Object.values(errors)[1].length === 0 &&
        Object.values(errors)[2].length === 0 && Object.values(errors)[3].length === 0 &&
        Object.values(errors)[4].length === 0){
            
            //const addToDatabase = registerUser()
            registerUser()

            setInput({
                fName: "",
                lName: "",
                type: "",
                email: "",
                password: "",
                confirmPassword: "",
            })
    }

  };

  const [errors, setError] = useState({})

  const validate = () => {
    const error = {}

    //firstName
    if(!input.fName) {
        error.fName = "First Name is requried"
    }
    else if(!/[A-Za-z]+/.test(input.fName)){
        error.fName = "Enter a valid first name"
    }
    else{
        error.fName = ""
    }

    //lastName
    if(!input.lName) {
        error.lName = "Last Name is requried"
    }
    else if(!/[A-Za-z]+/.test(input.lName)){
        error.lName = "Enter a valid last name"
    }
    else{
        error.lName = ""
    }

    //email
    if(!input.email) {
        error.email = "Email is requried"
    }
    else if(!/\S+@\S+\.\S+/.test(input.email)){
        error.email = "Enter a valid email"
    }
    else{
        error.email = ""
    }

    //password
    if(!input.password) {
        error.password = "Password is requried"
    }
    else if(input.password.length < 8){
        error.password = "Enter a valid password"
    }
    else{
        error.password = ""
    }

    //confirm password
    if(!input.confirmPassword) {
        error.confirmPassword = "Re-enter the password to confirm"
    }
    else if( input.confirmPassword !== input.password ){
        error.confirmPassword = "Password does not match"
    }
    else{
        error.confirmPassword = ""
    }

    return error
  };

  const registerUser = async () => {

    const {fName, lName, email, password} = input;

    if (!fName || !lName || !email || !password) {
        window.alert("Please fill in all required fields.");
        return;
    }

    try {

        const res = await fetch('/api/user/x', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName: fName,
                lastName: lName,
                email: email,
                password: password
            })
        });
    
        const data = await res.json();
    
        if(data.status === 422 || !data){
            window.alert("Invalid Registration")
            console.log("Invalid user's registration")
        } 
        else{
            window.alert("Registration Successful")
            console.log("User's registration Completed")
        }
    
    } catch (error) {
        console.error('Error:', error);
        window.alert("An error occurred. Please try again later.");
    }
    
  } 

  return (
    <div className='sign-up'>
        
        <h2>Register your Account for DalCSHub</h2>
        <div className='container'>
            <form  method='POST' onSubmit={submitHandler}>
                <div>
                    <label>First Name</label><br></br>
                    <input
                        type='text'
                        className='form-control'
                        name='fName'
                        value={input.fName}
                        onChange={handleChange}
                        id='fName'>
                    </input>

                    <div>
                        {errors.fName && <span id='error-tag'>{errors.fName}</span>}    
                    </div>
                    
                </div>

                <div>
                    <label>Last Name</label><br></br>
                    <input
                        type='text'
                        className='form-control'
                        name='lName'
                        value={input.lName}
                        onChange={handleChange}
                    />

                    <div>
                        {errors.lName && <span id='error-tag'>{errors.lName}</span>} 
                    </div>   
                </div>

                <div>
                    <label>Account Type</label>
                    <select
                        className='form-control'
                        name='accountType'
                        value={input.accountType}
                        onChange={handleChange}
                        defaultValue={'Select'}
                    >
                        <option value={'Select'} disabled> Select Type </option>
                        <option value={"Instructor"}>Instructor</option>
                        <option value={"Student"}>Student</option>
                        <option value={"Alumni"}>Alumni</option>
                    </select>
                </div>

                <div>
                    <label>Email</label><br></br>
                    <input
                        className='form-control' 
                        name='email' 
                        value={input.email} 
                        onChange={handleChange}
                        placeholder='example@dal.ca'
                    />

                    <div>
                        {errors.email && <span id='error-tag'>{errors.email}</span>}
                    </div>  
                </div>

                <div>
                    <label>Password</label><br></br>
                    <input
                        type='password'
                        className='form-control' 
                        name='password' 
                        value={input.password} 
                        onChange={handleChange}
                    />

                    <div>
                        {errors.password && <span id='error-tag'>{errors.password}</span>}
                    </div>
                </div>

                <div>
                    <label>Confirm Password</label><br></br>
                    <input
                        type='password'
                        variant='outlined'
                        className='form-control' 
                        name='confirmPassword' 
                        value={input.confirmPassword} 
                        onChange={handleChange}
                    />
                    
                    <div>
                        {errors.confirmPassword && <span id='error-tag'>{errors.confirmPassword}</span>}
                    </div>
                </div>

                <div>
                    <Button variant='contained' type='submit' id='regis-btn'>Create Account</Button>
                </div>

                <p>
                    Already Register? <Link to={"/login"}>Login</Link>
                </p>

            </form>
        </div>

    </div>
  );
};

export default Register;
