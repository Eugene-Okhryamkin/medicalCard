import React, { Component } from "react";
import Search from "../../components/Search/Search.jsx";
import DocumentForGetExemptionTable from "../../containers/DocumentsForGetExemptionTable/DocumentsForGetExemptionTable.jsx";
import DocumentEdit from "../DocumentEdit/DocumentEdit.jsx";
import { connect } from "react-redux"; 
import propTypes from "prop-types";
import { selectUser } from "../../actions/selectToManageUser";
import "./DocumentsForGetExemption.sass";
import { getDocuments } from "../../actions/getDocumentForGetExemptionAction.js";

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
        const { selectUser, closeEditPage } = this.props;

        return (
            <section id="DocumentForGetExemption">
                <Search />
                <div className="table-wrap">
                    <DocumentForGetExemptionTable />
                    { selectUser != null ? <DocumentEdit close={() => closeEditPage(null) }/> : null }
                    { editIsOpen ? <DocumentEdit close={ () => this.setState({ editIsOpen: false }) } /> : null }
                </div>
                
                <div className="add-btn-wrap">
                    <button className="add-btn" onClick={() => this.setState({ editIsOpen: true })}>добавить</button>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    selectUser: state.selectUser.selectedUser,
    documents: state.getDocuments.documents
})

const mapDispatchToProps = dispatch => ({
    closeEditPage: user => dispatch(selectUser(user)),
    getDocuments: url => dispatch(getDocuments(url))
})

DocumentsForGetExemption.propTypes = {
    selectUser: propTypes.object,
    closeEditPage: propTypes.func,
    getDocuments: propTypes.func,
    documents: propTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsForGetExemption);