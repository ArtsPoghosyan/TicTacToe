import React, {useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import { setWiner, updateField, refeshGame } from "../../redux/slice/gameSlice/GameReducer";
import ItemsGame from "./gameItems/ItemsGame";
import NavBar from "./navigation/navBar";
import "../../scss/style.scss";

function Main(){   
    const game = useSelector((state)=>{
        return state.game;
    });
    const dispatch = useDispatch();

    useEffect(()=>{ 
        if(game.winer === null){
            setTimeout(()=>{
                const rules =[
                    [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6]
                ];
                rules.forEach((evt, i)=>{
                    if(game.field[evt[0]] === "x" && game.field[evt[1]] === "x" && game.field[evt[2]] === "x"){
                        alert("X Winer");
                        dispatch(setWiner({winer: true, stateWiner: evt}));
                    }else if(game.field[evt[0]] === "o" && game.field[evt[1]] === "o" && game.field[evt[2]] === "o"){
                        alert("O Winer");
                        dispatch(setWiner({winer: false, stateWiner: evt}));
                    }else if(i === rules.length - 1){
                        let x = game.field.join("");
                        if(x.length === 9){
                            alert("dead heat");
                            dispatch(setWiner({winer: "dead heat", stateWiner: null}));
                        }
                    }
                })

            }, 100);
        }
    }, [game]);

    return (
        <>
            <div className="textBlock">
            <div className="playerBlock">{game.winer !== null ? game.winer === true ? "WINER - X" : game.winer === false ? "WINER - O" : "DEAD HEAT" : game.player === true ? "PLAYER - X" : "PLAYER - O"} {game.winer !== null ? <div onClick={()=>{dispatch(updateField(0))}}><i className="fas fa-redo" ></i></div> : <div onClick={()=>{dispatch(refeshGame())}}><i className="fas fa-undo" ></i></div>}</div>
                <div className="text">Interactive<br/> Tic Tac Toe</div>
                <div className="text2">3 Prototype versions included</div>
                <NavBar path={"3x3"}/>
            </div>
            <div className="gameBlock">
                <div className="game">
                    {
                        game.winer === null
                            ?   game.field.map((evt, i)=>{
                                    return <ItemsGame boolean={"notWiner"} index={i} element={evt} key={i} path={"3x3"} />
                                })
                            : game.winer === "dead heat" 
                                ?   game.field.map((evt, i)=>{
                                        return <ItemsGame boolean={"notWiner"} index={i} element={evt} key={i} path={"3x3"} />
                                    })
                                :   game.field.map((evt, i)=>{
                                        return <ItemsGame boolean={"Winer"} index={i} element={evt} stateWiner={game.stateWiner} key={i} path={"3x3"} />
                                    })
                    }
                   
                </div>
            </div>     
        </>
    )
}

export default Main;