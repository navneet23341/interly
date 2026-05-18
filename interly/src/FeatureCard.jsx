import PropTypes from "prop-types";
import "./FeatureCard.css"

function FeatureCard(props){

    return(<div className="featureCard">
        <h1 className="feature">{props.feature}</h1>
        <h1 className="description">{props.desc}</h1>
    </div>)
}

FeatureCard.propTypes= {
    feature : PropTypes.string,
    desc: PropTypes.string
}

export default FeatureCard;