import React, {useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import { setWiner4x4, updateField4x4, refeshGame4x4 } from "../../../redux/slice/game4x4Slice/Game4x4Reducer";
import ItemsGame from "../gameItems/ItemsGame";
import NavBar from "../navigation/navBar";
import "../../../scss/four.scss";

export default function Main4x4(){
    const game = useSelector((state)=>{
        return state.game4x4;
    });
    const dispatch = useDispatch();

    useEffect(()=>{ 
        if(game.winer === null){
            setTimeout(()=>{
                const rules =[
                    [0, 1, 2, 3],
                    [4, 5, 6, 7],
                    [8, 9, 10, 11],
                    [12, 13, 14, 15],
                    [0, 4, 8, 12],
                    [1, 5, 9, 13],
                    [2, 6, 10, 14],
                    [3, 7, 11, 15],
                    [0, 5, 10, 15],
                    [3, 6, 9, 12]
                ];
                rules.forEach((evt, i)=>{
                    if(game.field[evt[0]] === "x" && game.field[evt[1]] === "x" && game.field[evt[2]] === "x" && game.field[evt[3]] === "x"){
                        alert("X Winer");
                        dispatch(setWiner4x4({winer: true, stateWiner: evt}));
                    }else if(game.field[evt[0]] === "o" && game.field[evt[1]] === "o" && game.field[evt[2]] === "o" && game.field[evt[3]] === "o"){
                        alert("O Winer");
                        dispatch(setWiner4x4({winer: false, stateWiner: evt}));
                    }else if(i === rules.length - 1){
                        let x = game.field.join("");
                        if(x.length === 16){
                            alert("dead heat");
                            dispatch(setWiner4x4({winer: "dead heat", stateWiner: null}));
                        }
                    }
                })
            }, 100);
        }
    }, [game]);

    return (
        <>
            <div className="textBlock">
            <div className="playerBlock">{game.winer !== null ? game.winer === true ? "WINER - X" : game.winer === false ? "WINER - O" : "DEAD HEAT" : game.player === true ? "PLAYER - X" : "PLAYER - O"} {game.winer !== null ? <div onClick={()=>{dispatch(updateField4x4(0))}}><i className="fas fa-redo" ></i></div> : <div onClick={()=>{dispatch(refeshGame4x4())}}><i className="fas fa-undo" ></i></div>}</div>
                <div className="text">Interactive<br/> Tic Tac Toe</div>
                <div className="text2">3 Prototype versions included</div>
                <NavBar path={"4x4"}/>
            </div>
            <div className="gameBlock">
                <div className="game4x4">
                    {
                        game.winer === null
                            ?   game.field.map((evt, i)=>{
                                    return <ItemsGame boolean={"notWiner"} index={i} element={evt} key={i} path={"4x4"}/>
                                })
                            :   game.winer === "dead heat" 
                                    ?   game.field.map((evt, i)=>{
                                            return <ItemsGame boolean={"notWiner"} index={i} element={evt} key={i} path={"4x4"}/>
                                        })
                                    :   game.field.map((evt, i)=>{
                                            return <ItemsGame boolean={"Winer"} index={i} element={evt} stateWiner={game.stateWiner} key={i} path={"4x4"}/>
                                        })
                    }
                   
                </div>
            </div> 
        </>
    )
}