export function game4x4(state={}, action){
    if(action.type === "updateField4x4"){
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
                field: ["","","","","","","","","","","","","","","",""],
                player: state.winer,
                winer: null,
            }
        }
    }else if(action.type === "setWiner4x4"){
        return{
            ...state,
            winer: action.payload.winer,
            stateWiner: action.payload.stateWiner
        }
    }else if(action.type === "refeshGame4x4"){
        return {
            field: ["","","","","","","","","","","","","","","",""],
            player: !state.player,
            winer: null,
        }
    }
    return state;
}

export const initalGame4x4 = {
    field: ["","","","","","","","","","","","","","","",""],
    player: true,
    winer: null,
};

export function updateField4x4(i){
    return {
        type: "updateField4x4",
        payload: {
            index: i,
        }
    }
}

export function setWiner4x4(winer){
    return {
        type: "setWiner4x4",
        payload: {
            winer: winer.winer,
            stateWiner: winer.stateWiner,
        }
    }
}

export function refeshGame4x4(){
    return{
        type: "refeshGame4x4",
        payload: {}
    }
}