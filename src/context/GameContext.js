import { createContext, useContext, useReducer } from "react";
import { gameDataReducer } from "../reducers/gameDataReducer";

export const initialState = {
	playerOneSide: "",
	playerOneScore: 0,
	playerTwoScore: 0,
	winner: null,
};

export const GameContext = createContext();

export function GameDataProvider({ children }) {
	const [state, dispatch] = useReducer(gameDataReducer, initialState);

	return <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>;
}

export const useGameData = () => {
	return useContext(GameContext);
};
