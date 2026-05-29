import "./Dash.css"
import Dashcard from "./Dashcard.jsx"
import PropTypes from "prop-types"
import greet from "./assets/greet.png"
import {Link} from "react-router-dom"
import { useOutletContext } from "react-router-dom"

function Dash(){
    const {loginname} = useOutletContext();

    return (<div className="dashthings">
            <section className="greetuser">
                <div className="motivate">
                    <h1 className="username">hi..! {loginname}</h1>
                    <h3 className="quote">Ready for your next interview?</h3>
                </div>
                <img src={greet} className="greetimage"></img>
            </section>
            <h2 className="titles">Overview</h2>
            <div className="alldashcard">
                <Link to="interview" className="moveto"><Dashcard metric="+" about="start interview" color="#7B61FF"/></Link>
                <Dashcard metric="0" about="latest score" color="#00B894"/>
                <Dashcard metric="0" about="streak" color="#FF9F43"/>
                <Dashcard metric="0" about="interviews done" color="#FF5C8A"/>
            </div>
            <h2 className="titles">Past Analysis</h2>
            <section className="pastana">interview 1</section>
        </div>
    );
}

export default Dash