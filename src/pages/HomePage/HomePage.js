import { useHistory } from "react-router-dom";
import Settings from "../../components/SettingsComponent/Settings";
import "./styles.css";

function HomePage() {
	const history = useHistory();
	const onFriendButtonClickHandler = () => {
		history.push("/choose-side");
	};

	return (
		<div className="homepage-wrap">
			<div className="side-icons-div">
				<div className="side-icons-box">
					<h1 className="cross">X</h1>
				</div>
				<div className="side-icons-box">
					<h1 className="circle">O</h1>
				</div>
			</div>
			<h2 className="heading">Choose your play mode</h2>
			<button className="button ai-button" disabled>
				With AI
			</button>
			<button className="button friend-button" onClick={onFriendButtonClickHandler}>
				With a friend
			</button>
			<Settings />
		</div>
	);
}

export default HomePage;
