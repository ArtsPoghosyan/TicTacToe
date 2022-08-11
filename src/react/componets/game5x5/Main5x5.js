import React, {useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import { setWiner5x5, updateField5x5, refeshGame5x5 } from "../../../redux/slice/game5x5Slice/Game5x5Reducer";
import ItemsGame from "../gameItems/ItemsGame";
import NavBar from "../navigation/navBar";
import "../../../scss/five.scss";

export default function Main4x4(){
    const game = useSelector((state)=>{
        return state.game5x5;
    });
    const dispatch = useDispatch();

    useEffect(()=>{ 
        if(game.winer === null){
            setTimeout(()=>{
                const rules =[
                    [0, 1, 2, 3],
                    [4, 3, 2, 1],
                    [5, 6, 7, 8],
                    [9, 8, 7, 6],
                    [10, 11, 12, 13],
                    [14, 13, 12, 11],
                    [15, 16, 17, 18],
                    [19, 18, 17, 16],
                    [20, 21, 22, 23],
                    [24, 23, 22, 21],
                    [0, 5, 10, 15],
                    [20, 15, 10, 5],
                    [1, 6, 11, 16],
                    [21, 16, 11, 6],
                    [2, 7, 12, 17],
                    [22, 17, 12, 7],
                    [3, 8, 13, 18],
                    [23, 18, 13, 8],
                    [4, 9, 14, 19],
                    [24, 19, 14, 9],
                    [0, 6, 12, 18],
                    [24, 18, 12, 6],
                    [4, 8, 12, 16],
                    [20, 16, 12, 8],
                    [3, 7, 11, 15],
                    [9, 13, 17, 21],
                    [5, 11, 17, 23],
                    [1, 7, 13, 19]
                ];
                rules.forEach((evt, i)=>{
                    if(game.field[evt[0]] === "x" && game.field[evt[1]] === "x" && game.field[evt[2]] === "x" && game.field[evt[3]] === "x"){
                        alert("X Winer");
                        dispatch(setWiner5x5({winer: true, stateWiner: evt}));
                    }else if(game.field[evt[0]] === "o" && game.field[evt[1]] === "o" && game.field[evt[2]] === "o" && game.field[evt[3]] === "o"){
                        alert("O Winer");
                        dispatch(setWiner5x5({winer: false, stateWiner: evt}));
                    }else if(i === rules.length - 1){
                        let x = game.field.join("");
                        if(x.length === 25){
                            alert("dead heat");
                            dispatch(setWiner5x5({winer: "dead heat", stateWiner: null}));
                        }
                    }
                })
            }, 100);
        }
    }, [game]);

    return (
        <>
            <div className="textBlock">
            <div className="playerBlock">{game.winer !== null ? game.winer === true ? "WINER - X" : game.winer === false ? "WINER - O" : "DEAD HEAT" : game.player === true ? "PLAYER - X" : "PLAYER - O"} {game.winer !== null ? <div onClick={()=>{dispatch(updateField5x5(0))}}><i className="fas fa-redo" ></i></div> : <div onClick={()=>{dispatch(refeshGame5x5())}}><i className="fas fa-undo" ></i></div>}</div>
                <div className="text">Interactive<br/> Tic Tac Toe</div>
                <div className="text2">3 Prototype versions included</div>
                <NavBar path={"5x5"}/>
            </div>
            <div className="gameBlock">
                <div className="game5x5">
                    {
                        game.winer === null
                            ?   game.field.map((evt, i)=>{
                                    return <ItemsGame boolean={"notWiner"} index={i} element={evt} key={i} path={"5x5"}/>
                                })
                            :   game.winer === "dead heat" 
                                    ?   game.field.map((evt, i)=>{
                                            return <ItemsGame boolean={"notWiner"} index={i} element={evt} key={i} path={"5x5"}/>
                                        })
                                    :   game.field.map((evt, i)=>{
                                            return <ItemsGame boolean={"Winer"} index={i} element={evt} stateWiner={game.stateWiner} key={i} path={"5x5"}/>
                                        })
                    }
                   
                </div>
            </div> 
        </>
    )
}