import "./Landing.css"
import logo from "./assets/catlogo.jpg"
import herocat from "./assets/herocat.png"

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
            </div>
            <div className="justimage">
                <img src={herocat}></img>
            </div>
        </section>

        </>
    )
}

export default Landing;