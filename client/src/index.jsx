import React from "react";
import ReactDOM from 'react-dom';
import App from "./containers/App.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
//import { createBrowserHistory } from "history";

//const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={ store }>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById("root")
)