import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import datas from "../../assets/PersonDetails.json"
import { useNavigate } from "react-router-dom";
import "./Login.scss"






const Login = () => {
    const [uname,setUname] = useState("")
    const [pass,setPass] = useState("")
    const [err,setErr] = useState("")
    const [error,setError] = useState(false)

    let navigate = useNavigate()

    function handleName(event){
        setUname(event.target.value)
        console.log(event.target.value);
    }

    function handlePass(event){
        setPass(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        datas.map((data)=>{
           if(uname == data.name && pass == data.password){
            
                navigate("/home")
            
             
             console.log("matched");
           }
           else{
            if(pass == ""){
                setErr("")
            }else{
                setErr("Incorrect Entry")
                setError(true)
            }
                
           }
        })

    }


  return (
    <div className="login-container">
      <div className="login-main-container">
        <div className="login-left">
          <div className="login-left-top">
            <h2>Sign in</h2>
            <div className="links">
                <FacebookIcon sx={{ mr: '10px' }}/>
                <GoogleIcon sx={{ mr: '10px' }}/>
                <LinkedInIcon sx={{ mr: '10px' }}/>
            </div>
            <p>or use your account</p>
          </div>
          <div className="login-left-bottom">
                <form onSubmit={handleSubmit}>
                {/* <Stack id= "stack" spacing={5} direction="row"> */}
                <TextField   id="outlined-basic" label="Username" variant="outlined"  helperText={err}  sx={{ mr: '15px' }} type={"text"}  onChange={handleName}/>
                <TextField id="outlined-basic" label="Password" variant="outlined"  helperText= {err}  type={"password"} onChange={handlePass}/>
                

                {/* </Stack> */}
                    <p>Forgot your password?</p>
                 <Button type="submit" variant="outlined">Submit</Button>

                </form>
          </div>
        </div>
        <div className="login-right"></div>
      </div>
    </div>
  );
};

export default Login;
