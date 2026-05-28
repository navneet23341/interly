import { useState } from "react";
import loginboximage from "./assets/loginboximage.jpg"
import "./Login.css"
import { useNavigate } from "react-router-dom";

function Login(){

    const navigate = useNavigate();
    const [loginname , setloginname] = useState("");
    const [password , setpassword] = useState("");

    const handlenamechange =(event)=>{
        setloginname(event.target.value);
     }
    const handlepasswordchange= (event)=>{
        setpassword(event.target.value)
    }

    const handlesubmit= async (event)=>{
        event.preventDefault();

        const response = await fetch("http://localhost:3000/login" , {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                loginname,
                password
            }),
        });//info goes to backend

        const data = await response.json(); //info comes from backend 

        if(data.success){
            navigate(`/${loginname}/dashboard`);
        }
    }
    
    return(<div className="loginbox">
         <div className="boxlogin">   
            <div className="imagebox">
                <img src={loginboximage} className="loginimage"></img>
            </div>
            <div className="infobox">
                <form onSubmit={handlesubmit}>
                    <input type="text" placeholder="User Name" value={loginname} onChange={handlenamechange}></input>
                    <input type="password" placeholder="password" value={password} onChange={handlepasswordchange}></input>

                    <button type="submit">log in</button>
                </form>
            </div>
        </div>
    </div>)
}

export default Login;