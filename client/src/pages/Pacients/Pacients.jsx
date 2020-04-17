import React, { Component } from "react";
import Search from "../../components/Search/Search.jsx";
import { connect } from "react-redux";
import { getUsers } from "../../actions/getUsersActions";
import { selectUser } from "../../actions/selectToManageUser"
import { TableHead } from "../../components/PacientsTable/TableHead/TableHead.jsx";
import TableBody from "../../components/PacientsTable/TableBody/TableBody.jsx";
import Edit from "../Edit/Edit.jsx"
import propTypes from "prop-types";
import "./Pacients.sass";


class Pacients extends Component {

    componentDidMount() {
        const { getUsers } = this.props;
        getUsers("/api/users/get");
    }
    
    componentDidUpdate(prevProps) {
        const { getUsers, selectUser } = this.props;
        prevProps.selectUser != selectUser ? getUsers("/api/users/get") : selectUser
    }


    render() {
        const { search, selectUser, closeEditPage } = this.props;
        let { users } = this.props;
        
        return (
            <div id="pacients">
                <Search />
                <div id="pacients-table">
                    <table>
                       <TableHead />
                       <TableBody search={ search } users={ users }/>
                    </table>
                    { selectUser != null ? <Edit close={() => closeEditPage(null) }/> : null }
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    search: state.search.search,
    users: state.getUsers.users,
    selectUser: state.selectUser.selectedUser
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
    selectUser: propTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Pacients);