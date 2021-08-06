import { useState } from "react";
import { calculateWinner } from "../../utils/helper";
import Board from "../../components/Board/Board";
import { useGameData } from "../../context/GameContext";
import Settings from "../../components/SettingsComponent/Settings";
import "./GamePage.css";

function Game() {
	const { state, dispatch } = useGameData();
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [stepNumber, setStepNumber] = useState(0);
	const [xIsNext, setXisNext] = useState(localStorage.getItem("chosen-side") || "");
	const oppositeSymbol = () => {
		if (xIsNext === "X") {
			return "O";
		}
		if (xIsNext === "O") {
			return "X";
		}
	};
	const winner = calculateWinner(history[stepNumber]);
	const xO = xIsNext ? xIsNext : oppositeSymbol();

	const playAgainButtonHandler = () => {
		if (winner) {
			dispatch({ type: "INCREMENT_SCORE", payload: { winner } });
			return setStepNumber(0);
		}
	};

	const handleClick = (i) => {
		const historyPoint = history.slice(0, stepNumber + 1);
		const current = historyPoint[stepNumber];
		const squares = [...current];
		// return if won or occupied
		if (winner || squares[i]) {
			return null;
		}
		// select square
		squares[i] = xO;
		setHistory([...historyPoint, squares]);
		setStepNumber(historyPoint.length);
		setXisNext(oppositeSymbol());
	};

	return (
		<>
			<div className="user-scores">
				<p className="player-name">You</p>
				<p className="players-score-div">
					<span>{state.playerOneScore}</span>-<span>{state.playerTwoScore}</span>
				</p>
				<p className="player-name">John</p>
			</div>
			<div className="board-wrapper">
				<Board squares={history[stepNumber]} onClick={handleClick} />
			</div>
			<div className="info-wrapper">
				<h3>{winner ? `Winner: ${winner}` : `Next Player: ${xO}`}</h3>
				{winner && (
					<div>
						<button onClick={playAgainButtonHandler}>Play Again</button>
					</div>
				)}
			</div>
			<Settings />
		</>
	);
}

export default Game;
