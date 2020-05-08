import React, { Component } from "react";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { deleteDiagnosis } from "../../../actions/deleteDiagnosis";
import { selectUser } from "../../../actions/selectToManageUser";
import "./DiagnosisTableBody.sass";

class DiagnosisTableBody extends Component {

    onHandleManage = item => {
        const { selectUser } = this.props;
        selectUser(item);
    }

    onHandleDelete = idDiagnosis => {
        const { deleteDiagnosis } = this.props;
        deleteDiagnosis({ idDiagnosis });
    }

    renderData = () => {
        const { diagnosis, userRole } = this.props;
        let template = null;

        if(diagnosis.length) {
            template = diagnosis.map(item => {
                if(item.Diagnosis != null) {
                    return (
                        <tr key={item.Diagnosis.idDiagnosis}>
                            {
                                userRole == "Admin" ?
                                <td>
                                    <table className="manage-table">
                                        <tbody>

                                            <tr className="manage-table-row">
                                                <td className="manageButton"><FontAwesomeIcon icon={faEdit} onClick={() => this.onHandleManage(item)} /></td>
                                                <td className="manageButton"><FontAwesomeIcon icon={faTrashAlt} onClick={() => this.onHandleDelete(item.Diagnosis.idDiagnosis)} /></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </td> : null
                            }
                            <td>{ item.Diagnosis.Date }</td>
                            <td>{ item.Diagnosis.codeOfSic }</td>
                            <td>{ item.Surname } { item.Name } { item.MiddleName }</td>
                            <td>{ item.Diagnosis.User.Surname } { item.Diagnosis.User.Name } { item.Diagnosis.User.MiddleName }</td>
                        </tr>
                    )
                }
            })

            return template;
        }
    }

    render() {
        return (
            <tbody>
                { this.renderData() }
            </tbody>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    selectUser: user => dispatch(selectUser(user)),
    deleteDiagnosis: id => dispatch(deleteDiagnosis(id))
})

DiagnosisTableBody.propTypes = {
    diagnosis: propTypes.array,
    userRole: propTypes.string,
    selectUser: propTypes.func,
    deleteDiagnosis: propTypes.func
}

export default connect(null, mapDispatchToProps)(DiagnosisTableBody);