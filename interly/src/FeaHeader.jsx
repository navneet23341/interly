import "./FeaHeader.css";
import PropTypes from "prop-types";

function FeaHeader(props){
    
    
    return (
            <div className="featureheader">
                <div className="featurebox">
                    <h3 className="featurename">{props.name}</h3>
                    <h3 className="c1">{props.date}</h3>
                </div>
                <div className="other">
                    <button className="notification">N</button>
                    <button className="logout">L</button>
                </div>
            </div>
    );
}

export default FeaHeader;