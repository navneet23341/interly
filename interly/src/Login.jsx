import { useState } from "react";
import loginboximage from "./assets/loginboximage.jpg"
import "./Login.css"

function Login(){

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

        const response = await fetch("")
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