//Author: Vrund Patel

import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../css/styles.css'
import { Button } from '@mui/material'

const Login = () => {

    const navigate = useNavigate();
    const [loginInput, setLoginInput] = useState({
        loginEmail: "",
        loginPassword: ""
    });

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value

        setLoginInput({
            ...loginInput,
            [name]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginInput)

        const loginError = validateInput()
        setLoginError(loginError)

        if(Object.values(loginError)[0].length === 0
            && Object.values(loginError)[1].length === 0){

            verifyLoginCredentials()

            setLoginInput({
                loginEmail: "",
                loginPassword: ""
            })


        }
    };

    const [loginErrors, setLoginError] = useState({})

    const validateInput = () => {
        const loginError = {}

        //email
        if(!loginInput.loginEmail) {
            loginError.loginEmail = "Email is requried"
        }
        else if(!/\S+@\S+\.\S+/.test(loginInput.loginEmail)){
            loginError.loginEmail = "Enter a valid email"
        }
        else{
            loginError.loginEmail = ""
        }

        //password
        if(!loginInput.loginPassword) {
            loginError.loginPassword = "Password is requried"
        }
        else{
            loginError.loginPassword = ""
        }
        
        return loginError;
    };

    const verifyLoginCredentials = async () => {

        const {loginEmail, loginPassword} = loginInput
        const res = await fetch('/api/user/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: loginEmail,
                password: loginPassword
            })
        })

        const data = res.json()
        
        if(res.status === 400 || !data){
            console.log("Atleast one of the field is invalid from front end")
            window.alert("Atleast one of the field is invalid")
        }
        else{
            window.alert("Login Successful")
            console.log("Login Successful")
            navigate('/main')
        }
    };

  return (
    <div className='login'>
        <form className='login-form' method='POST' onSubmit={handleSubmit}>

            <div>
                <label>Email</label><br></br>
                <input 
                    type='text' 
                    id='email' 
                    name='loginEmail' 
                    value={loginInput.loginEmail}
                    onChange={handleChange} 
                    />

                <div>
                    {loginErrors.loginEmail && <span id='error-tag'>{loginErrors.loginEmail}</span>}    
                </div>
            </div>

            <br></br>
            
            <div>
                <label>Password</label><br></br>
                <input 
                    type='password' 
                    id='password' 
                    name='loginPassword' 
                    value={loginInput.loginPassword}
                    onChange={handleChange}/>

                <div>
                    {loginErrors.loginPassword && <span id='error-tag'>{loginErrors.loginPassword}</span>}
                </div>
            </div>
            
            <div><br></br>
                <Button variant="contained" size='small' type='submit' id="login-btn">Login</Button>
            </div>

            <p>
                Forgot Password? <Link to={"/Register"}>Sign Up</Link>
            </p>
        </form>
    </div>
  )
}

export default Login;