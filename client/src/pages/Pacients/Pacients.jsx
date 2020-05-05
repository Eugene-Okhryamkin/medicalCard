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
        const { getUsers, selectUser, addUser } = this.props;
        prevProps.selectUser != selectUser ? getUsers("/api/users/get") : selectUser
        prevProps.addUser != addUser ? getUsers("/api/users/get") : getUsers
    }


    render() {
        const { editIsOpen } = this.state;
        const { search, selectUser, closeEditPage, error, role } = this.props;
        let { users, isFetching } = this.props;

        if(error.length) {
            return <Alert alertMessage={ error } success={ false } />
        } else {
            return (
                <section id="pacients">
                    <Search />
                    <div className="table-wrap">
                        <table className="pacients-table-content">
                           <TableHead role={ role } />
                           <TableBody search={ search } users={ users } isFetching={ isFetching } />
                        </table>
                        { selectUser != null ? <Edit close={() => closeEditPage(null) }/> : null }
                        { editIsOpen ? <Edit close={ () => this.setState({ editIsOpen: false }) } /> : null }
                    </div>
                    <div id="add-btn-wrap"> 
                        <button id="add-btn" onClick={() => this.setState({ editIsOpen: true })}>добавить</button>
                    </div>
                </section>
            )
        }
    }
}

const mapStateToProps = state => ({
    search: state.search.search,
    addUser: state.addUser.user,
    users: state.getUsers.users,
    isFetching: state.getUsers.isFetching,
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
    addUser: propTypes.object,
    isFetching: propTypes.bool,
    closeEditPage: propTypes.func,
    selectUser: propTypes.object,
    error: propTypes.string,
    role: propTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Pacients);