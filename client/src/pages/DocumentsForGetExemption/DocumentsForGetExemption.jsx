import React, { Component } from "react";
import Search from "../../components/Search/Search.jsx";
import DocumentForGetExemptionTable from "../../containers/DocumentsForGetExemptionTable/DocumentsForGetExemptionTable.jsx";
import DocumentEdit from "../DocumentEdit/DocumentEdit.jsx";
import { connect } from "react-redux"; 
import propTypes from "prop-types";
import { selectUser } from "../../actions/selectToManageUser";
import "./DocumentsForGetExemption.sass";
import { getDocuments } from "../../actions/getDocumentForGetExemptionAction.js";
import Alert from "../../components/Alert/Alert.jsx";

class DocumentsForGetExemption extends Component {
    state = {
        editIsOpen: false
    }

    componentDidUpdate(prevProps) {
        const { documents } = this.props;
        prevProps.documents != documents ? getDocuments("/api/exemption/get") : documents
    }

    render() {
        const { editIsOpen } = this.state;
        const { selectUser, closeEditPage, error, role } = this.props;

        if(error.length) {
            return <Alert alertMessage={ error } success={ false } />
        } else {
            return (
                <section id="DocumentForGetExemption">
                    <Search />
                    <div className="table-wrap">
                        <DocumentForGetExemptionTable />
                        { selectUser != null ? <DocumentEdit close={() => closeEditPage(null) }/> : null }
                        { editIsOpen ? <DocumentEdit close={ () => this.setState({ editIsOpen: false }) } /> : null }
                    </div>
                    {
                        role == "Admin" ?
                        <div className="add-btn-wrap">
                            <button className="add-btn" onClick={() => this.setState({ editIsOpen: true })}>добавить</button>
                        </div> : null
                        
                    }
                    
                </section>
            )
        }
        
    }
}

const mapStateToProps = state => ({
    selectUser: state.selectUser.selectedUser,
    documents: state.getDocuments.documents,
    error: state.getUsers.error,
    role: state.auth.user.role
})

const mapDispatchToProps = dispatch => ({
    closeEditPage: user => dispatch(selectUser(user)),
    getDocuments: url => dispatch(getDocuments(url))
})

DocumentsForGetExemption.propTypes = {
    selectUser: propTypes.object,
    closeEditPage: propTypes.func,
    getDocuments: propTypes.func,
    documents: propTypes.array,
    error: propTypes.string,
    role: propTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsForGetExemption);