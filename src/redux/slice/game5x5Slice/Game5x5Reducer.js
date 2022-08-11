export function game5x5(state={}, action){
    if(action.type === "updateField5x5"){
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
                field: ["","","","","","","","","","","","","","","","","","","","","","","","",""],
                player: state.winer,
                winer: null,
            }
        }
    }else if(action.type === "setWiner5x5"){
        return{
            ...state,
            winer: action.payload.winer,
            stateWiner: action.payload.stateWiner
        }
    }else if(action.type === "refeshGame5x5"){
        return {
            field: ["","","","","","","","","","","","","","","","","","","","","","","","",""],
            player: !state.player,
            winer: null,
        }
    }
    return state;
}

export const initalGame5x5 = {
    field: ["","","","","","","","","","","","","","","","","","","","","","","","",""],
    player: true,
    winer: null,
};

export function updateField5x5(i){
    return {
        type: "updateField5x5",
        payload: {
            index: i,
        }
    }
}

export function setWiner5x5(winer){
    return {
        type: "setWiner5x5",
        payload: {
            winer: winer.winer,
            stateWiner: winer.stateWiner,
        }
    }
}

export function refeshGame5x5(){
    return{
        type: "refeshGame5x5",
        payload: {}
    }
}