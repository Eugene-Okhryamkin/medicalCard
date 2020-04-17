import React, { Component } from "react";
import { connect } from "react-redux";
import { searchPacient } from "../../actions/searchPacientsAction";
import propTypes from "prop-types";
import "./Search.sass";

class Search extends Component {

    find = () => {
        const { searchPacient } = this.props;
        searchPacient(this.searchInput.value);
    }

    render() {
        return (
            <div id="pacients-search">
                <input 
                    id="search"
                    type="text" 
                    placeholder="Поиск" 
                    onChange={this.find}
                    ref={input => this.searchInput = input}/>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    searchPacient: pacient => dispatch(searchPacient(pacient))
})

Search.propTypes = {
    searchPacient: propTypes.func
}

export default connect(null, mapDispatchToProps)(Search);

