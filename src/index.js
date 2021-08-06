import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GameDataProvider } from "./context/GameContext";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<GameDataProvider>
				<App />
			</GameDataProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
