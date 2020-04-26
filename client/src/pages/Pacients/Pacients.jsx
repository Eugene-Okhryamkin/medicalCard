import React, { Component } from "react";
import Search from "../../components/Search/Search.jsx";
import { connect } from "react-redux";
import { getUsers } from "../../actions/getUsersActions";
import { selectUser } from "../../actions/selectToManageUser"
import { TableHead } from "../../components/PacientsTable/TableHead/TableHead.jsx";
import TableBody from "../../components/PacientsTable/TableBody/TableBody.jsx";
import Edit from "../Edit/Edit.jsx"
import Alert from "../../components/Alert/Alert.jsx"
import propTypes from "prop-types";
import "./Pacients.sass";


class Pacients extends Component {

    state = {
        editIsOpen: false
    }

    componentDidMount() {
        const { getUsers } = this.props;
        getUsers("/api/users/get");
    }
    
    componentDidUpdate(prevProps) {
        const { getUsers, selectUser } = this.props;
        prevProps.selectUser != selectUser ? getUsers("/api/users/get") : selectUser
    }


    render() {
        const { editIsOpen } = this.state;
        const { search, selectUser, closeEditPage, error, role } = this.props;
        let { users } = this.props;
        
        if(error.length) {
            return <Alert alertMessage={ error } success={ false } />
        } else {
            return (
                <div id="pacients">
                    <Search />
                    <div id="pacients-table">
                        <table>
                           <TableHead role={ role } />
                           <TableBody search={ search } users={ users }/>
                        </table>
                        { selectUser != null ? <Edit close={() => closeEditPage(null) }/> : null }
                        { editIsOpen ? <Edit close={ () => this.setState({ editIsOpen: false }) } /> : null }
                    </div>
                    <div id="add-btn-wrap"> 
                        <button id="add-btn" onClick={() => this.setState({ editIsOpen: true })}>добавить</button>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    search: state.search.search,
    users: state.getUsers.users,
    selectUser: state.selectUser.selectedUser,
    error: state.getUsers.error,
    role: state.auth.user.role
})

const mapDispatchToProps = dispatch => ({
    getUsers: url => dispatch(getUsers(url)),
    closeEditPage: user => dispatch(selectUser(user))
})

Pacients.propTypes = {
    search: propTypes.string,
    users: propTypes.array,
    getUsers: propTypes.func,
    closeEditPage: propTypes.func,
    selectUser: propTypes.object,
    error: propTypes.string,
    role: propTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Pacients);