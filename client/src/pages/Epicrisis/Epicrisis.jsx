import React, { Component } from "react";
import "./Epicrisis.sass";
import Upload from "../Upload/Upload.jsx";
import EpicrisisTable from "../../components/EpicrisisTable/EpicrisisTable.jsx";

class Epicrisis extends Component {

    state = {
        uploadWindowIsOpen: false 
    }

    render() {
        const { uploadWindowIsOpen } = this.state;

        return (
            <section id="Epicrisis">
                { uploadWindowIsOpen ? <Upload close={() => this.setState({ uploadWindowIsOpen: false })} /> : null }
                {/* Поиск */}
                <EpicrisisTable />
                <div id="upload-btn">
                    <button onClick={() => this.setState({ uploadWindowIsOpen: true })}>Загрузить</button>
                </div>
            </section>
        )
    }
}

export default Epicrisis;