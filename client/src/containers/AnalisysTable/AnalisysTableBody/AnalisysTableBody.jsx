import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { selectUser } from "../../../actions/selectToManageUser";
import { getAnalisys } from "../../../actions/getAnalisysAction";
import propTypes from "prop-types";
import "./AnalisysTableBody.sass";

class AnalisysTableBody extends Component {

    onHandleManage = item => {
        const { selectUser } = this.props;
        selectUser(item); 
    }

    onHandleDelete = id => {
        const { deleteData } = this.props;
        deleteData(id);
    }

    componentDidUpdate(prevProps) {
        const { getAnalisys, selectedUser, addAnalisys, deleteAnalisys } = this.props;
        const { url } = this.props;
        prevProps.selectedUser != selectedUser ? getAnalisys(url) : selectedUser
        prevProps.addAnalisys != addAnalisys ? getAnalisys(url) : addAnalisys
        prevProps.deleteAnalisys != deleteAnalisys ? getAnalisys(url) : deleteAnalisys
    }

    renderTable = () => {
        const { data, userRole } = this.props;
        let template = null;
        if (data) {
            template = data.map(item => {
                return (
                    <tr key={item.analisy.id}>
                        {
                            userRole == "Admin" ?
                                <td>
                                    <table className="manage-table">
                                        <tbody>

                                            <tr className="manage-table-row">
                                                <td className="manageButton"><FontAwesomeIcon icon={faEdit} onClick={() => this.onHandleManage(item)} /></td>
                                                <td className="manageButton"><FontAwesomeIcon icon={faTrashAlt} onClick={() => this.onHandleDelete(item.analisy.id)} /></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </td> : null
                        }
                        <td>{item.analisy.Date}</td>
                        <td>{item.analisy.Code}</td>
                        <td>{item.Surname} {item.Name} {item.MiddleName}</td>
                        <td>{item.analisy.User.Surname} {item.analisy.User.Name} {item.analisy.User.MiddleName}</td>
                    </tr>
                )
            })

            return template;
        }

        return template;
    }

    render() {
        return (
            <tbody>
                {this.renderTable()}
            </tbody>
        )
    }
}

const mapStateToProps = state => ({
    selectedUser: state.selectUser.selectedUser,
    addAnalisys: state.addAnalisys.analisys,
    deleteAnalisys: state.deleteAnalisys.message
})

const mapDispatchToProps = dispatch => ({
    selectUser: user => dispatch(selectUser(user)),
    getAnalisys: url => dispatch(getAnalisys(url)),
})


AnalisysTableBody.propTypes = {
    data: propTypes.array,
    userRole: propTypes.string,
    selectUser: propTypes.func,
    deleteData: propTypes.func,
    selectedUser: propTypes.object,
    addAnalisys: propTypes.object,
    deleteAnalisys: propTypes.string,
    getAnalisys: propTypes.func,
    url: propTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(AnalisysTableBody);