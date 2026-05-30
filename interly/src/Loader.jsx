import {CircularProgress} from "react-loader-spinner"
import PropTypes from "prop-types"
function Loader(props){

    return(
        <CircularProgress
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="circular-progress-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
        strokeWidth={2}
        animationDuration={1}
        />
    );
}

export default Loader