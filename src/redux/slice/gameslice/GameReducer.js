export function game(state={}, action){
    if(action.type === "updateField"){
        if(state.winer === null){
            if(state.field[action.payload.index] !== ""){
                alert("that place is busy");
                return state;
            }else{
                let field = state.field;
                field[action.payload.index] = state.player ? "x" : "o";
                return{
                    field: field,
                    player: !state.player,
                    winer: null,
                }
            }
        }else{
            return {
                field: ["","","","","","","","",""],
                player: state.winer,
                winer: null,
            }
        }
    }else if(action.type === "setWiner"){
        return{
            ...state,
            winer: action.payload.winer,
            stateWiner: action.payload.stateWiner
        }
    }else if(action.type === "refeshGame"){
        return {
            field: ["","","","","","","","",""],
            player: !state.player,
            winer: null,
        }
    }
    return state;
}

export const initalGame = {
    field: ["","","","","","","","",""],
    player: true,
    winer: null,
};

export function updateField(i){
    return {
        type: "updateField",
        payload: {
            index: i,
        }
    }
}

export function setWiner(winer){
    return {
        type: "setWiner",
        payload: {
            winer: winer.winer,
            stateWiner: winer.stateWiner,
        }
    }
}


export function refeshGame(){
    return{
        type: "refeshGame",
        payload: {}
    }
}
