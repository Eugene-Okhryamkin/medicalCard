import React, { Component } from "react";
import AnalisysTable from "../../containers/AnalisysTable/AnalisysTable.jsx";
import EditAnalisys from "../EditAnalisys/EditAnalisys.jsx";
import Search from "../../components/Search/Search.jsx";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { addAnalisys } from "../../actions/addAnalisysAction";
import { getAnalisys } from "../../actions/getAnalisysAction";
import { updateAnalisys } from "../../actions/updateAnalisysAction";
import { deleteAnalisys } from "../../actions/deleteAnalisysAction";
import { selectUser } from "../../actions/selectToManageUser.js";
import Alert from "../../components/Alert/Alert.jsx";
import "./XRay.sass";

class XRay extends Component {

    state = {
        editIsOpen: false
    }

    updateData = data => {
        const { updateAnalisys } = this.props;
        updateAnalisys("/api/xray/update", data);
    }
    
    sendData = data => {
        const { addAnalisys } = this.props;
        addAnalisys("/api/xray/add", data);
    }

    deleteData = id => {
        const { deleteAnalisys } = this.props;
        deleteAnalisys("/api/xray/delete", { id });
    }

    componentDidMount() {
        const { getAnalisys } = this.props;
        getAnalisys("/api/xray/get");
    }

    componentDidUpdate(prevProps) {
        const { getAnalisys, selectedUser, addAnalisys } = this.props;
        prevProps.selectedUser != selectedUser ? getAnalisys("/api/xray/get") : selectedUser
        prevProps.addAnalisys != addAnalisys ? getAnalisys("/api/xray/get") : addAnalisys
    }

    render() {
        const { analisys, selectedUser, selectUser, error, role } = this.props;
        const { editIsOpen } = this.state;
        
        if(error.length) {
            return <Alert alertMessage={ error } success={ false } />
        } else {
            return (
                <section className="analisys">
                    <Search />
                    <div className="table-wrap">
                        <AnalisysTable data={analisys} deleteData={data => this.deleteData(data)} url="/api/xray/get" />
                        { selectedUser != null ? <EditAnalisys update={ data => this.updateData(data) } close={() => selectUser(null) }/> : null }
                        { editIsOpen ? <EditAnalisys send={ data => this.sendData(data) } close={ () => this.setState({ editIsOpen: false }) } /> : null }
                    </div>
                    {
                        role != "MiddleMed" ? 
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
    analisys: state.getAnalisys.analisys,
    addAnalisys: state.addAnalisys.analisys,
    selectedUser: state.selectUser.selectedUser,
    error: state.getUsers.error,
    role: state.auth.user.role
});

const mapDispatchToProps = dispatch => ({
    getAnalisys: url => dispatch(getAnalisys(url)),
    selectUser: user => dispatch(selectUser(user)),
    addAnalisys: (url, data) => dispatch(addAnalisys(url, data)),
    updateAnalisys: (url, data) => dispatch(updateAnalisys(url, data)),
    deleteAnalisys: (url, id) => dispatch(deleteAnalisys(url, id)),
});

XRay.propTypes = {
    analisys: propTypes.array,
    getAnalisys: propTypes.func,
    selectedUser: propTypes.object,
    selectUser: propTypes.func,
    addAnalisys: propTypes.func,
    updateAnalisys: propTypes.func,
    deleteAnalisys: propTypes.func,
    addAnalis: propTypes.array,
    error: propTypes.string,
    role: propTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(XRay);