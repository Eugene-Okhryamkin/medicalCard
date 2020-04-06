import React from "react";
import propTypes from "prop-types";
import "./Alert.sass";

const Alert = props => (
    <div className="alert">
        <p id="alert-message">{props.alertMessage}</p>
    </div>
);
    
Alert.propTypes = {
    alertMessage: propTypes.string.isRequired
};

export default Alert;