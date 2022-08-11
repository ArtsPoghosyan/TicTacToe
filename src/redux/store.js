import { createStore, combineReducers, applyMiddleware } from "redux";
import { game4x4, initalGame4x4 } from "./slice/game4x4Slice/Game4x4Reducer";
import { game5x5, initalGame5x5 } from "./slice/game5x5Slice/Game5x5Reducer";
import { game, initalGame } from "./slice/gameSlice/GameReducer";

const store = createStore(combineReducers({
    game,
    game4x4,
    game5x5,
}), {
    game: initalGame,
    game4x4: initalGame4x4,
    game5x5: initalGame5x5,
});

export default store;