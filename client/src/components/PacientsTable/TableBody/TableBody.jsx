import React, { Component } from "react";
import propTypes from "prop-types";
import ArticleTable from "../ArticleTable/ArticleTable.jsx";
import { Preloader } from "../../Preloader/Preloader.jsx";
import "./TableBody.sass";

class TableBody extends Component {

    renderTable = () => {
        const { search } = this.props;
        let { users, isFetching } = this.props;
        let template = null;

        if(isFetching) {
            return (
                <Preloader />
            )
        } else {
            if (users.length) {
                if (search.length) {
                    users = users.filter(item => item.Surname.toLowerCase().includes(search.toLowerCase()))
                }
                template = users.map(item => {
    
                    return (
                        <ArticleTable
                            key={item.idpacient}
                            id={item.idpacient}
                            OMC={item.OMC}
                            CodeOfExemption={item.CodeOfExemption}
                            SNILS={item.SNILS}
                            Surname={item.Surname}
                            Name={item.Name}
                            MiddleName={item.MiddleName}
                            Gender={item.Gender}
                            DateOfBirth={item.DateOfBirth}
                            LiveArea={item.LiveArea}
                            LiveRegion={item.LiveRegion}
                            LiveSettlement={item.LiveSettlement}
                            LiveNeighborhood={item.LiveNeighborhood}
                            LiveHouse={item.LiveHouse}
                            LiveHousing={item.LiveHousing}
                            LiveAppartment={item.LiveAppartment}
                            StayArea={item.StayArea}
                            StayRegion={item.StayRegion}
                            StaySettlement={item.StaySettlement}
                            StayNeighborhood={item.StayNeighborhood}
                            StayHouse={item.StayHouse}
                            StayHousing={item.StayHousing}
                            StayAppartment={item.StayAppartment}
                            HomePhoneNumber={item.HomePhoneNumber}
                            RightToPreferentialService={item.RightToPreferentialService}
                            Disability={item.Disability}
                            PlaceOfWork={item.PlaceOfWork}
                            Proffession={item.Proffession}
                            Position={item.Position}
                            Dependant={item.Dependant}
                            Passport={item.Passport} 
                            Role={item.Role} />
                    )
    
                });
    
                return template;
            }
        }

        
    }

    render() {
        return (
            <tbody>
                {this.renderTable()}
            </tbody>
        )
    }
}

TableBody.propTypes = {
    search: propTypes.string,
    users: propTypes.array,
    isFetching: propTypes.bool
}

export default TableBody;
