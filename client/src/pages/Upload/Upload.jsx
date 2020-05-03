import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { uploadEpicrisis } from "../../actions/uploadEpicrisisAction";
//import Alert  from "../../components/Alert/Alert.jsx";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import EpicrisisPacientTable from "../../components/EpicrisisPacientTable/EpicrisisPacientTable.jsx";
import { connect } from "react-redux";
import { getUsers } from "../../actions/getUsersActions";
import propTypes from "prop-types";
import "./Upload.sass";

class Upload extends Component {

    state = {
        fileName: "",
        file: null,
        user: ""
    }

    handleUnmount = e => {
        e.preventDefault();
        this.props.close();
    }

    setFile = (e) => {
        this.setState({
            fileName: e.target.files[0].name,
            file: e.target.files[0]
        })
    }

    setUser = user => {
        this.setState({ user })
    }

    onSubmit = e => {
        e.preventDefault();
        const { file, user } = this.state;
        const { upload } = this.props;

        let formData = new FormData();
        formData.append("epicrisis", file);
        formData.append("userData", user);

        upload(formData);
    }

    validate = () => {
        const { user, fileName } = this.state;
        if(user && fileName) {
            return true;
        }

        return false
    }

    componentDidMount() {
        const { getUsers } = this.props;
        getUsers("/api/users/get");
    }

    render() {
        const { fileName } = this.state;
        const { users } = this.props;
        
        return (
            <div id="upload">
                <div id="upload-main">
                    <EpicrisisPacientTable pacients={ users } selectedUser={(user) => this.setUser(user)} />
                    <div id="upload-form">
                        <form onSubmit={this.onSubmit} encType="multipart/form-data" >
                            <label
                                id="uploadInputLabel"
                                htmlFor="uploadInput"
                            >
                                {fileName.length ? fileName : "Выбрать файл"}
                            </label>

                            <input id="uploadInput" ref={fileInput => this.fileInput = fileInput}  onChange={this.setFile} type="file" name="epicrisis" />
                            <button id="submit" disabled={!this.validate()} >отправить</button>
                        </form>
                        
                    </div>

                </div>
                <div id="close" >
                    <FontAwesomeIcon onClick={this.handleUnmount} icon={faTimesCircle} />
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    users: state.getUsers.users
})

const mapDispatchToProps = dispatch => ({
    getUsers: url => dispatch(getUsers(url)),
    upload: file => dispatch(uploadEpicrisis(file))
})

Upload.propTypes = {
    close: propTypes.func.isRequired,
    users: propTypes.array.isRequired,
    getUsers: propTypes.func.isRequired,
    upload: propTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);