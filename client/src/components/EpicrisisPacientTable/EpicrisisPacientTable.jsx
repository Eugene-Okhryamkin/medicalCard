import React, { Component } from "react";
import propTypes from "prop-types";
import "./EpicrisisPacientTable.sass";

class EpicrisisPacientTable extends Component {

    setUser = user => {
        this.props.selectedUser(user); 
    }

    renderPacients = () => {
        const { pacients } = this.props;
        let template = null;

        if (pacients.length) {
            template = pacients.map(item => {
                return (
                    <tr key={item.idpacient} >
                        <td><input type="radio" name="selected" onChange={() => this.setUser(item.Passport) } /></td>
                        <td>{item.OMC}</td>
                        <td>{item.Surname}</td>
                        <td>{item.Name}</td>
                        <td>{item.MiddleName}</td>
                    </tr>
                )
            })

            return template;
        }

        return template;
    }


    render() {
        // const { pacients } = this.props;
        return (
            <div className="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>Выбор</th>
                            <th>OMC</th>
                            <th>Фамилия</th>
                            <th>Имя</th>
                            <th>Отчество</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderPacients() }
                    </tbody>
                </table>
            </div>
        )
    }
}

EpicrisisPacientTable.propTypes = {
    pacients: propTypes.array,
    selectedUser: propTypes.func
}

export default EpicrisisPacientTable;