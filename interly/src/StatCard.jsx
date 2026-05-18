import PropTypes from "prop-types";
import "./StatCard.css";

function StatCard(props){
    
    return(
        <div className="Card">
            <h1 className="statnumber">{props.number}</h1>    
            <h1 className="statname">{props.name}</h1>
        </div>
    )
}

StatCard.propTypes = {
    number: PropTypes.string,
    name: PropTypes.string
}



export default StatCard;