import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { downloadAction } from "../../../actions/downloadAction";
import { deleteEpicrisis } from "../../../actions/deleteEpicrisisAction";
import propTypes from "prop-types";
import "./EpicrisisTableBody.sass";

class EpicrisisTableBody extends Component {

    download = id => {
        const { download } = this.props;
        download({ id });
    }

    delete = id => {
        const { deleteEpicrisis } = this.props;
        deleteEpicrisis({ id })
    }

    renderPacients = () => {
        let { epicrisisData, role } = this.props;
        const { search } = this.props;
        let template = null;


        if (epicrisisData) {

            if (search.length) {
                epicrisisData = epicrisisData.filter(item => item.Surname.toLowerCase().includes(search.toLowerCase()))
            }
            template = epicrisisData.map((item) => {
                if (item.Epicrisis != null) {
                    return (
                        <tr key={item.Epicrisis.idEpicrisis}>
                            <td className="manageButton"><FontAwesomeIcon icon={faDownload} onClick={() => this.download(item.Epicrisis.idEpicrisis)} /></td>
                            { role == "Admin" ? <td className="manageButton"><FontAwesomeIcon icon={faTrashAlt} onClick={() => this.delete(item.Epicrisis.idEpicrisis) } /></td> : null }
                            <td>{item.Epicrisis.Date}</td>
                            <td>{item.Surname}</td>
                            <td>{item.Name}</td>
                            <td>{item.MiddleName}</td>
                            <td>{item.Epicrisis.User.Surname} {item.Epicrisis.User.Name} {item.Epicrisis.User.MiddleName}</td>
                        </tr>
                    )
                }

            });

            return template;
        }


    }

    render() {
        return (
            <tbody>
                {this.renderPacients()}
            </tbody>
        )
    }
}

const mapStateToProps = state => ({
    search: state.search.search,
    role: state.auth.user.role
})

const mapDispatchToProps = dispatch => ({
    download: id => dispatch(downloadAction(id)),
    deleteEpicrisis: id => dispatch(deleteEpicrisis(id))
})

EpicrisisTableBody.propTypes = {
    epicrisisData: propTypes.array,
    download: propTypes.func,
    search: propTypes.string,
    role: propTypes.string,
    deleteEpicrisis: propTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(EpicrisisTableBody);