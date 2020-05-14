import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "./../../actions/logoutAction";
import propTypes from "prop-types";
import "./Sidebar.sass";


class Sidebar extends Component {

    logout = e => {
        e.preventDefault();
        localStorage.removeItem("authData");
        this.props.logoutUser();
    }

    renderMenu = () => {
        const { user } = this.props;
        
        if(user != null) {
            switch(user.role) {
                case "Admin":
                    return (
                        <>
                            <li><NavLink to={"/"} className="ListItem" >Главная страница</NavLink></li>
                            <li><NavLink to={"/pacients"} className="ListItem" >Пациенты</NavLink></li>
                            <li><NavLink to={"/epicrisis"} className="ListItem" >Эпикризы</NavLink></li>
                            <li><NavLink to={"/exemption"} className="ListItem">Льготы</NavLink></li>
                            <li><NavLink to={"/diagnosis"} className="ListItem">Диагнозы</NavLink></li>
                            <li><NavLink to={"/xray"} className="ListItem">Рентгены</NavLink></li>
                            <li><NavLink to={"/fluorography"} className="ListItem">Флюорография</NavLink></li>
                            <li><NavLink to={"/blood"} className="ListItem">Анализы крови</NavLink></li>
                            <li><NavLink to={"/urine"} className="ListItem" >Анализы мочи</NavLink></li>
                            <li><NavLink to={"/stool"} className="ListItem" >Анализы кала</NavLink></li>
                        </>
                    );

                case "Doctor": 
                    return (
                        <>
                            <li><NavLink to={"/"} className="ListItem" >Главная страница</NavLink></li>
                            <li><NavLink to={"/pacients"} className="ListItem" >Пациенты</NavLink></li>
                            <li><NavLink to={"/epicrisis"} className="ListItem" >Эпикризы</NavLink></li>
                            <li><NavLink to={"/exemption"} className="ListItem">Льготы</NavLink></li>
                            <li><NavLink to={"/diagnosis"} className="ListItem">Диагнозы</NavLink></li>
                            <li><NavLink to={"/xray"} className="ListItem">Рентгены</NavLink></li>
                            <li><NavLink to={"/fluorography"} className="ListItem">Флюорография</NavLink></li>
                            <li><NavLink to={"/blood"} className="ListItem">Анализы крови</NavLink></li>
                            <li><NavLink to={"/urine"} className="ListItem" >Анализы мочи</NavLink></li>
                            <li><NavLink to={"/stool"} className="ListItem" >Анализы кала</NavLink></li>
                        </>
                    );

                case "technikalDoctor": 
                    return (
                        <>
                            <li><NavLink to={"/"} className="ListItem" >Главная страница</NavLink></li>
                            <li><NavLink to={"/pacients"} className="ListItem" >Пациенты</NavLink></li>
                            <li><NavLink to={"/epicrisis"} className="ListItem" >Эпикризы</NavLink></li>
                            <li><NavLink to={"/exemption"} className="ListItem">Льготы</NavLink></li>
                            <li><NavLink to={"/diagnosis"} className="ListItem">Диагнозы</NavLink></li>
                            <li><NavLink to={"/xray"} className="ListItem">Рентгены</NavLink></li>
                            <li><NavLink to={"/fluorography"} className="ListItem">Флюорография</NavLink></li>
                            <li><NavLink to={"/blood"} className="ListItem">Анализы крови</NavLink></li>
                            <li><NavLink to={"/urine"} className="ListItem" >Анализы мочи</NavLink></li>
                            <li><NavLink to={"/stool"} className="ListItem" >Анализы кала</NavLink></li>
                        </>
                    ); 

                case "Pacient":
                    return(
                        <li><NavLink to={"/"} className="ListItem" >Главная страница</NavLink></li>
                    );
                
                default: 
                    return null;
            }
        } else {
            return null
        }
                
    }

    render() {
        const { menuState } = this.props;

        return (
            <aside className={!menuState.isHidden ? "sidebar_active" : "sidebar"} >
                <a href="#" id="menu-btn"></a>
                <nav id="menu-list">
                    <ul>
                        {this.renderMenu()}
                        <li><a href="#" onClick={this.logout} className="ListItem" >Выход</a></li>
                    </ul>
                </nav>
            </aside>
        )
    }
}


const mapStateToProps = state => ({
    menuState: state.toggleMenu,
    user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logout())
});

Sidebar.propTypes = {
    menuState: propTypes.object.isRequired,
    logoutUser: propTypes.func.isRequired,
    user: propTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);