import PropTypes from "prop-types";
import "./RoleCard.css";

function RoleCard(props){

    return(<div className="role">
        <h1>{props.role}</h1>
    </div>)
}

export default RoleCard;