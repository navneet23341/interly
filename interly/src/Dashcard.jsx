import "./Dashcard.css"
import PropTypes from "prop-types"

function Dashcard(props){
    return(
        <div className="dashcard" style={{backgroundColor:props.color}}>
            <h1 className="metric">{props.metric}</h1>
            <h4 className="about">{props.about}</h4>
        </div>
    )
}

export default Dashcard