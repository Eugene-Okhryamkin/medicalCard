import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { downloadAction } from "../../../actions/downloadAction";
import { connect } from "react-redux";
import propTypes from "prop-types";
import "./EpicrisisInfoBody.sass";

class EpicrisisInfoBody extends Component {
    download = id => {
        const { download } = this.props;
        download({ id });
    }

    renderEpicrisis = () => {
        const { epicrisis } = this.props;
        let template = null;

        if(epicrisis) {
            template = epicrisis.map(item => {
                if(item.Epicrisis != null) {
                    return (
                        <tr key={item.Epicrisis.idEpicrisis}>
                            <td className="manageButton"><FontAwesomeIcon icon={ faDownload } onClick={() => this.download(item.Epicrisis.idEpicrisis)} /></td>
                            <td>{ item.Epicrisis.Date }</td>
                            <td>{ item.Surname }</td>
                            <td>{ item.Name }</td>
                            <td>{ item.MiddleName }</td>
                            <td>{ item.Epicrisis.User.Surname } { item.Epicrisis.User.Name } { item.Epicrisis.User.MiddleName } </td>
                        </tr>
                    )
                }
            });
        } 

        return template;
    }
    
    render() {
        return (
            <tbody>
                { this.renderEpicrisis() }
            </tbody>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    download: url => dispatch(downloadAction(url))
})

EpicrisisInfoBody.propTypes = {
    epicrisis: propTypes.array,
    download: propTypes.func
}

export default connect(null, mapDispatchToProps)(EpicrisisInfoBody);