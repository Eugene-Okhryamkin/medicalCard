import React, { Component } from "react";
import "./Epicrisis.sass";
import Upload from "../Upload/Upload.jsx";
import EpicrisisTable from "../../components/EpicrisisTable/EpicrisisTable.jsx";
import Search from "../../components/Search/Search.jsx";
import propTypes from "prop-types";
import { connect } from "react-redux";
import Alert from "../../components/Alert/Alert.jsx"

class Epicrisis extends Component {

    state = {
        uploadWindowIsOpen: false 
    }

    render() {
        const { uploadWindowIsOpen } = this.state;
        const { error, user } = this.props;
        
        if(error.length) {
            return (
                <Alert alertMessage={ error } success={ false } />
            )
        } else {
            if(user != null) {
                return (
                    <section id="Epicrisis">
                        { uploadWindowIsOpen ? <Upload close={() => this.setState({ uploadWindowIsOpen: false })} /> : null }
                        <Search />
                        <EpicrisisTable />
                        {
                            user.role != ("TechnikalDoctor" && "MiddleMed") ?  
                            <div id="upload-btn">
                                <button onClick={() => this.setState({ uploadWindowIsOpen: true })}>Загрузить</button>
                            </div> : null
                        }
                       
                    </section>
                )
            }
            
        }
    }
}

const mapStateToProps = state => ({
    error: state.getEpicrisis.error,
    user: state.auth.user
})

Epicrisis.propTypes = {
    error: propTypes.string,
    user: propTypes.object
}

export default connect(mapStateToProps, null)(Epicrisis);