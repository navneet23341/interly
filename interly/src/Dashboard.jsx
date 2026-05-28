import { useParams } from "react-router-dom";
import "./Dashboard.css";
import FeaHeader from "./FeaHeader.jsx"
import Dash from "./Dash.jsx"
import catlogo from "./assets/catlogo.jpg"
import { useState } from "react";
import Interview from "./Interview.jsx"
import FillforInterview from "./FillforInterview.jsx";
import Performance from "./Performance.jsx"

function Dashboard(){
    const {loginname} = useParams();
    const [currentpage , setcurrentpage] = useState("dashboard");

    const handleinterview=()=>{
        setcurrentpage(c => c="interview");
    }

    const handleperformance= ()=>{
        setcurrentpage(c=> c="performance");
    }
    const handledashboard = ()=>{
        setcurrentpage(c => c="dashboard");
    }

    return(
        <div className="whole">
            <div className="feature">
                <img src={catlogo} className="catlogo"></img>
                <div className="allfeature">
                    <button className="featurebutton" onClick={handledashboard}>dashboard</button>
                    <button className="featurebutton" onClick={handleinterview}>interview</button>
                    <button className="featurebutton" onClick={handleperformance}>performance</button>
                </div>
                <button className="out">logout</button>
            </div>
            <div className="contnt">
                <FeaHeader name="Dashboard" date={new Date().getDate()}/>
                {currentpage ==="dashboard" && <Dash name={loginname}/>}
                {currentpage ==="interview" && <FillforInterview/>}
                {currentpage ==="performance" && <Performance/>}
            </div>
        </div>
    )
}

export default Dashboard;