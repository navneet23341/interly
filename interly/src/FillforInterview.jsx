import { useState } from "react";
import "./FillforInterview.css"
import formfill from "./assets/infoFilling.mp4"
import { Navigate, useNavigate, useParams } from "react-router-dom";
function FillforInterview(){
    const [role , setrole] = useState();
    const [difficulty , setdifficulty] = useState();
    const [duration , setduration]= useState();
    const [Company ,setcompany] = useState();
    const [resume , setresume] = useState();
    const navigate = useNavigate();
    const {loginname} = useParams();
    
    async function handlesubmit(event){
        event.preventDefault();
        
        const response = await fetch("http://localhost:3000/interview",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                role,
                difficulty,
                duration,
                Company,
            })
        })

        const data = await response.json();


        navigate(`/${loginname}/dashboard/interview/${data.interviewid}`);
        
    }

    return(
        <div className="fillbox">
            <div className="wrapthem">
                <video autoPlay loop muted className="videobox"><source src={formfill} type="video/mp4"/></video>
                <form className="fillform" onSubmit={handlesubmit}>
                    <div className="formitem">
                        <label className="formlabel">Role</label>
                        <select value={role} onChange={(e)=>setrole(e.target.value)}>
                            <option>select role</option>
                            <option value="Frontend Engineer">Frontend Engineer</option>
                            <option value="Backend Engineer">Backend Engineer</option>
                            <option value="Data Analyst">Data Analyst</option>
                            <option value="Data Engineer">Data Engineer</option>
                            <option value="AI Engineer">AI Engineer</option>
                            <option value="ML Engineer">ML Engineer</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    {role === "other" && <input type="text" placeholder="please specify" onChange={(e)=>setrole(e.target.value)}></input>}

                    <div className="formitem">
                        <label className="formlabel">Difficulty</label>
                        <select value={difficulty} onChange={(e)=>setdifficulty(e.target.value)}>
                            <option>select difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>

                    <div className="formitem">
                        <label className="formlabel">Duration</label>
                        <select value={duration} onChange={(e)=>setduration(e.target.value)}>
                            <option>select duration</option>
                            <option value="5 min">5 min</option>
                            <option value="10 min">10 min</option>
                        </select>
                    </div>
                    
                    <div className="formitem">
                        <label className="formlabel">Company Focus</label>
                        <select value={Company} onChange={(e)=>setcompany(e.target.value)}>
                            <option>select Company</option>
                            <option value="FAANG / Big Tech">FAANG / Big Tech</option>
                            <option value="Product-Based Company">Product-Based Company</option>
                            <option value="Startup">Startup</option>
                            <option value="Mid-size Tech Company">Mid-size Tech Company</option>
                            <option value="Service-Based Company">Service-Based Company</option>
                            <option value="FinTech">FinTech</option>
                            <option value="AI Startup">AI Startup</option>
                            <option value="Open Source / Remote Company">Open Source / Remote Company</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    {Company === "other" && <input type="text" placeholder="please specify" onChange={(e)=>setcompany(e.target.value)}></input>}
                    
                    <div className="formitem">
                        <label className="formlabel"> Upload Resume</label>
                        <input type="file" onChange={(e)=>setresume(e.target.files[0])}></input>
                    </div>

                    <button type="submit" id="infosubmit">Start</button>

                </form>
            </div>
        </div>
    )
}

export default FillforInterview;