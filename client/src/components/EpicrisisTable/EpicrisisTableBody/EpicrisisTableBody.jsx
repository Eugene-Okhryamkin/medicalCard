import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import propTypes from "prop-types";
import "./EpicrisisTableBody.sass";

class EpicrisisTableBody extends Component {

    renderPacients = () => {
        const { epicrisisData } = this.props;
        let template = null;

        if(epicrisisData) {

            template = epicrisisData.map((item) => (
                <tr key={item.Epicrisis.idEpicrisis}>
                    <td className="manageButton"><FontAwesomeIcon icon={ faDownload } /></td>
                    <td>{item.Epicrisis.Date}</td>
                    <td>{item.Surname}</td>
                    <td>{item.Name}</td>
                    <td>{item.MiddleName}</td>
                    <td>{item.Epicrisis.User.Surname} {item.Epicrisis.User.Name} {item.Epicrisis.User.MiddleName}</td>
                </tr>
            ));

            return template;
        }

        return template;
    }

    render() {
        return (
            <tbody>
                {this.renderPacients()}
            </tbody>
        )
    }
}

EpicrisisTableBody.propTypes = {
    epicrisisData: propTypes.array
}

export default EpicrisisTableBody;