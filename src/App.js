import { Route, Switch } from "react-router-dom";
import { HomePage, ChooseSidePage, GamePage } from "./pages";
import "./index.css";

function App() {
	return (
		<div className="app-wrapper">
			<Switch>
				<Route path="/choose-side" component={ChooseSidePage} />
				<Route path="/play-game" component={GamePage} />
				<Route exact path="/" component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
