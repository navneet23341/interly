import { useNavigate, useParams } from "react-router-dom";
import "./Dashboard.css";
import FeaHeader from "./FeaHeader.jsx"
import Dash from "./Dash.jsx"
import catlogo from "./assets/catlogo.jpg"
import { useState } from "react";
import Interview from "./Interview.jsx"
import FillforInterview from "./FillforInterview.jsx";
import Performance from "./Performance.jsx"
import { Outlet } from "react-router-dom";

function Dashboard(){
    const {loginname} = useParams();
    const [currentpage , setcurrentpage] = useState("dashboard");
    const navigate = useNavigate();

    // const handleinterview=()=>{
    //     setcurrentpage(c => c="interview");
    // }

    // const handleperformance= ()=>{
    //     setcurrentpage(c=> c="performance");
    // }
    // const handledashboard = ()=>{
    //     setcurrentpage(c => c="dashboard");
    // }

    return(
        <div className="whole">
            <div className="feature">
                <img src={catlogo} className="catlogo"></img>
                <div className="allfeature">
                    <button className="featurebutton" onClick={()=>navigate("")}>dashboard</button>
                    <button className="featurebutton" onClick={()=>navigate("interview")}>interview</button>
                    <button className="featurebutton" onClick={()=>navigate("performance")}>performance</button>
                </div>
                <button className="out">logout</button>
            </div>
            <div className="contnt">
                <FeaHeader name="Dashboard" date={new Date().getDate()}/>
                <Outlet context={{loginname}}/>
            </div>
        </div>
    )
}

export default Dashboard;