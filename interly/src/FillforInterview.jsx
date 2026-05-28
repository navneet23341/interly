import { useState } from "react";
import "./FillforInterview.css"
import formfill from "./assets/infoFilling.mp4"

function FillforInterview(){
    const [role , setrole] = useState();

    return(
        <div className="fillbox">
            <video autoPlay loop muted className="videobox"><source src={formfill} type="video/mp4"/></video>
            <form>
                <label className="formlabel">choose role</label>
                <select value={role} onChange={(e)=>setrole(e.target.value)}>
                    <option>select role</option>
                    <option value="Frontend Engineer">Frontend Engineer</option>
                    <option value="Backend Engineer">Backend Engineer</option>
                    <option value="Data Analyst">Data Analyst</option>
                    <option value="Data Engineer">Data Engineer</option>
                    <option value="AI Engineer">AI Engineer</option>
                    <option value="ML Engineer">ML Engineer</option>
                    <option value="other">other</option>
                    {role === "other" && <input type="text" placeholder="please specify"></input>}
                </select>
            </form>
        </div>
    )
}

export default FillforInterview;