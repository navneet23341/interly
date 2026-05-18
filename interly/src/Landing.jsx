import "./Landing.css"
import logo from "./assets/catlogo.jpg"
import herocat from "./assets/herocat.png"
import bolb from "./assets/bolb.webm"
import StatCard from "./StatCard"
import FeatureCard from "./FeatureCard"
//import bolb from "./assets/bolb.mp4"
import arrow from "./assets/arrow.png"
import RoleCard from "./RoleCard.jsx"
import { useNavigate } from "react-router-dom"

function Landing(){

    const navigate = useNavigate()

    const handleStart = ()=> {
        navigate("/login")
    }
    
    return(
        <>
        <div className="header">
            <img src= {logo} className="logo"></img>
            <button className="signup">sign up</button>
        </div>

        <section className="heros">
            <div className="getstarted">
                <h1>Interly</h1>
                <p>Ai interview platform</p>
                <button className="startbutton" onClick={handleStart}>Get Started</button>
                <div className="statssection">
                    <StatCard number="500+" name="Interviews Completed" ></StatCard>
                    <StatCard number = "50+"  name = "Roles Supported"></StatCard>
                    <StatCard number = "24/7" name= "Ai Availabilty"></StatCard>
                </div>
            </div>
            <div className="justimage">
                <video autoPlay loop muted className="bolb"><source src={bolb} type="video/webm" /></video>
                <img src={herocat} className="bolbcat"></img>
            </div>
        </section>

        <section className="featuresection">
            <h1>Why use AI Interview</h1>
            <div className="featurecard">
                <FeatureCard feature= "🧠 AI Interviewer" desc="Practice interviews anytime with AI-generated questions."/>
                <FeatureCard feature = "📊 Instant Feedback" desc="Get evaluation after every session."/>
                <FeatureCard feature = "🎯 Role Based"  desc="Frontend, Backend, AI Engineer and more."/>
                <FeatureCard feature = "📈 Track Progress" desc="See previous interviews and improvement."/>
            </div>
        </section>

        <section className="work">
            <h1>How it works</h1>
            <div className="flow">
                <h1>1 Setup Profile</h1>
                <img src={arrow} className="arrow"/>
                <h1>2 Start Interview</h1>
                <img src={arrow} className="arrow"/>
                <h1>3 Answer Question</h1>
                <img src={arrow} className="arrow"/>
                <h1>4 Get Feedback</h1>
            </div>
        </section>

        <section className="rolesection">
            <h1>Practice for any role</h1>
            <div className="rolec">
                <RoleCard role="Frontend Developer"/>
                <RoleCard role="Backend Developer"/>
                <RoleCard role="Full Stack Engineer"/>
                <RoleCard role="Ai Engineer"/>
                <RoleCard role="Data Engineer"/>
                <RoleCard role="JAVA Developer"/>
            </div>
        </section>

        </>
    )
}

export default Landing;