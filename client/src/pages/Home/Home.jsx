import React, { Component } from "react";
import { connect } from "react-redux";
import Article from "../../components/Article/Article.jsx";
import MainInfo from "../../components/MainInfo/MainInfo.jsx";
import propTypes from "prop-types";
import "./Home.sass";

class Home extends Component {
    render() {
        const { userInfo } = this.props;

        return (
            <section id="Home">
                <Article name="Основная информация" >
                    <MainInfo userInfo={ userInfo } />
                </Article>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    userInfo: state.auth.user
})

Home.propTypes = {
    userInfo: propTypes.object.isRequired
}

export default connect(mapStateToProps, null)(Home);