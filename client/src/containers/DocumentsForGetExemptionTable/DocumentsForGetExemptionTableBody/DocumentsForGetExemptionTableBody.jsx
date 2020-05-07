import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import "./DocumentsForGetExemptionTableBody.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { selectUser } from "../../../actions/selectToManageUser";
import { deleteDocument } from "../../../actions/deleteDocumentForGetExemptionAction";

class DocumentsForGetExemptionTableBody extends Component {

    state = {}

    onHandleManage = item => {
        const { selectUser } = this.props;
        selectUser(item);
    }

    onHandleDelete = idDocumentForGetExemption => {
        const { deleteDocument } = this.props;
        deleteDocument({ idDocumentForGetExemption });
    }

    renderDocuments = () => {
        let { documents } = this.props;
        const { search, userRole } = this.props;
        let template = null;

        if (documents) {
            if (search.length) {
                documents = documents.filter(item => item.Surname.toLowerCase().includes(search.toLowerCase()))
            }

            template = documents.map(item => {
                if(item.User != null) {
                    return (
                        <tr key={item.idDocumentForGetExemption}>
                            {
                                userRole == "Admin" ?
                                    <td>
                                        <table className="manage-table">
                                            <tbody>
    
                                                <tr className="manage-table-row">
                                                    <td className="manageButton"><FontAwesomeIcon icon={faEdit} onClick={() => this.onHandleManage(item)} /></td>
                                                    <td className="manageButton"><FontAwesomeIcon icon={faTrashAlt} onClick={() => this.onHandleDelete(item.idDocumentForGetExemption)} /></td>
                                                </tr>
    
                                            </tbody>
                                        </table>
                                    </td> : null
    
                            }
                            <td>{item.Num}</td>
                            <td>{item.Date}</td>
                            <td>{item.PayedBy}</td>
                            <td>{item.User.Surname} {item.User.Name} {item.User.MiddleName}</td>
                        </tr>
                    )
                }
                
            });

            return template
        }
    }

    render() {
        return (
            <tbody>
                {this.renderDocuments()}
            </tbody>
        )
    }
}

const mapStateToProps = state => ({
    search: state.search.search
})

const mapDispatchToProps = dispatch => ({
    selectUser: user => dispatch(selectUser(user)),
    deleteDocument: id => dispatch(deleteDocument(id))
})


DocumentsForGetExemptionTableBody.propTypes = {
    documents: propTypes.array,
    search: propTypes.string,
    userRole: propTypes.string,
    selectUser: propTypes.func,
    deleteDocument: propTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsForGetExemptionTableBody);