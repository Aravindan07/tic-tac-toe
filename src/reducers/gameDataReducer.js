export function gameDataReducer(state, action) {
	switch (action.type) {
		case "SET_SIDE":
			localStorage.setItem("chosen-side", action.payload.chosenSide);

			return {
				...state,
				playerOneSide: action.payload.chosenSide,
			};

		case "INCREMENT_SCORE":
			function addScoreToWinner() {
				if (action.payload.winner === state.playerOneSide) {
					return {
						...state,
						playerOneScore: state.playerOneScore + 1,
						winner: null,
					};
				}
				if (action.payload.winner !== state.playerOneSide) {
					return {
						...state,
						playerTwoScore: state.playerTwoScore + 1,
						winner: null,
					};
				}
			}
			return addScoreToWinner();

		case "ADD_WINNER":
			return {
				...state,
				winner: action.payload.winner,
			};

		default:
			return state;
	}
}
