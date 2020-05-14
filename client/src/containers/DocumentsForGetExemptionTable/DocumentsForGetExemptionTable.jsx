import React, { Component } from "react";
import { DocumentsForGetExemptionTableHeader } from "./DocumentsForGetExemptionTableHeader/DocumentsForGetExemptionTableHeader.jsx";
import DocumentsForGetExemptionTableBody from "./DocumentsForGetExemptionTableBody/DocumentsForGetExemptionTableBody.jsx";
import { connect } from "react-redux";
import { getDocuments } from "../../actions/getDocumentForGetExemptionAction";
import { Preloader } from "../../components/Preloader/Preloader.jsx";
import propTypes from "prop-types";
import "./DocumentsForGetExemptionTable.sass";

class DocumentsForGetExemptionTable extends Component {


    componentDidMount() {
        const { getDocuments } = this.props;
        getDocuments("/api/exemptions/get");
    }

    componentDidUpdate(prevProps) {
        const { getDocuments, addDocument, deleteDocument, selectUser } = this.props;
        prevProps.addDocument != addDocument ? getDocuments("/api/exemptions/get") : addDocument;
        prevProps.deleteDocument != deleteDocument ? getDocuments("/api/exemptions/get") : deleteDocument,
        prevProps.selectUser != selectUser ? getDocuments("/api/exemptions/get") : selectUser
    }

    render() {
        const { documents, userRole, isFetching } = this.props;
        if(isFetching) {
            return <Preloader />
        } else {
            return (
                <table>
                    <DocumentsForGetExemptionTableHeader userRole={ userRole } />
                    <DocumentsForGetExemptionTableBody documents={ documents } userRole={ userRole } />
                </table>
            )
        }

        
    }
}

const mapStateToProps = state => ({
    documents: state.getDocuments.documents,
    userRole: state.auth.user.role,
    addDocument: state.addDocument.document,
    deleteDocument: state.deleteDocument.document,
    selectUser: state.selectUser.selectedUser,
    isFetching: state.getDocuments.isFetching
})

const mapDispatchToProps = dispatch => ({
    getDocuments: url => dispatch(getDocuments(url))
})

DocumentsForGetExemptionTable.propTypes = {
    documents: propTypes.array,
    getDocuments: propTypes.func,
    userRole: propTypes.string,
    addDocument: propTypes.object,
    deleteDocument: propTypes.string,
    selectUser: propTypes.object,
    isFetching: propTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsForGetExemptionTable);