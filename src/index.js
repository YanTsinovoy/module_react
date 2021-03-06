import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import "./style/index.scss";

ReactDOM.render(
	<BrowserRouter>
		<Router />
	</BrowserRouter>,
	document.getElementById("root")
);
