import "./Landing.css"
import logo from "./assets/catlogo.jpg"
import herocat from "./assets/herocat.png"
import bolb from "./assets/bolb.webm"
import StatCard from "./StatCard"
//import bolb from "./assets/bolb.mp4"

function Landing(){
    
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
                <button className="startbutton">Get Started</button>
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

        </>
    )
}

export default Landing;