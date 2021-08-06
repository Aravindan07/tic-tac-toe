import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useGameData } from "../../context/GameContext";
import "../HomePage/styles.css";
import "./ChooseSide.css";

function ChooseSide() {
	const [chosenSide, setChosenSide] = useState("");
	const { dispatch } = useGameData();

	const history = useHistory();

	const onClickHandler = (e) => {
		setChosenSide(e.target.value === "cross" ? "X" : "O");
	};

	const continueButtonClickHandler = () => {
		if (chosenSide === "") {
			return null;
		}
		history.push("/play-game");
		dispatch({ type: "SET_SIDE", payload: { chosenSide } });
	};

	return (
		<div className="homepage-wrap">
			<h2>Pick Your Side</h2>
			<div className="side-icons-div">
				<label
					htmlFor="cross"
					className={chosenSide === "X" ? "radio-label-checked" : "radio-label"}
				>
					<div className="side-icons-box">
						<h1 className="cross">X</h1>
						<input
							type="radio"
							name="choose"
							id="cross"
							value="cross"
							className="radio-input"
							onClick={onClickHandler}
						/>
					</div>
				</label>
				<label
					htmlFor="circle"
					className={chosenSide === "O" ? "radio-label-checked" : "radio-label"}
				>
					<div className="side-icons-box">
						<h1 className="circle">O</h1>
						<input
							type="radio"
							name="choose"
							id="circle"
							value="circle"
							className="radio-input"
							onClick={onClickHandler}
						/>
					</div>
				</label>
			</div>
			<button className="continue-button" onClick={continueButtonClickHandler}>
				Continue
			</button>
		</div>
	);
}

export default ChooseSide;
