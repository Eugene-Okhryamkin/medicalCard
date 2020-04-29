import React, { Component } from "react";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./Article.sass";


class Article extends Component {

    state = {
        isOpen: false
    }

    onHandleOpen = e => {
        e.preventDefault();
        const { isOpen } = this.state;

        if(isOpen) {
            this.setState({ isOpen: false })
        } else {
            this.setState({ isOpen: true })
        }
    }

    render() {
        const { name } = this.props;
        const { isOpen } = this.state;

        console.log(this.state);
        return (
            <div className="Article" onClick={ this.onHandleOpen }>
                <div className="Article-container">
                    <div className="ArticleName">
                        <p> { name } </p>
                    </div>
                    <div className="ArticleState" style={isOpen ? { transform: "rotateX(180deg)" } : { transform: "rotateX(0deg)" }  } >
                        <FontAwesomeIcon icon={ faAngleDown } />
                    </div>
                </div>
                <div className="Article-content-wrap" style={isOpen ? { display: "flex" } : { display: "none" } } >
                    <div className="Article-content" >
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

Article.propTypes = {
    name: propTypes.string.isRequired,
    children: propTypes.object.isRequired
}

export default Article;