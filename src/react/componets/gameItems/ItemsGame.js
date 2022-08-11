import React from "react";
import { useDispatch } from "react-redux";
import { updateField } from "../../../redux/slice/gameSlice/GameReducer";
import { updateField4x4 } from "../../../redux/slice/game4x4Slice/Game4x4Reducer";
import { updateField5x5 } from "../../../redux/slice/game5x5Slice/Game5x5Reducer";
import Vector from "../../../images/Vector.png";
import Circle from "../../../images/Circle.png";

function ItemsGame({boolean, index, element, stateWiner, path}){
    const dispatch = useDispatch();
    return (
        <>
            {
                boolean === "notWiner"  
                    ?   (
                            element === "" ? <div onClick={()=>{dispatch(path === "3x3" ? updateField(index) : path === "4x4" ? updateField4x4(index) : updateField5x5(index))}}></div> : <div onClick={()=>{dispatch(path === "3x3" ? updateField(index) : path === "4x4" ? updateField4x4(index) : updateField5x5(index))}}><img src={element === "x" ? Vector : Circle}/></div>
                        )
                    :   (
                            element === "" ? <div onClick={()=>{dispatch(path === "3x3" ? updateField(index) : path === "4x4" ? updateField4x4(index) : updateField5x5(index))}}></div> : <div onClick={()=>{dispatch(path === "3x3" ? updateField(index) : path === "4x4" ? updateField4x4(index) : updateField5x5(index))}} id={path === "3x3" ? index === stateWiner[0] || index === stateWiner[1] || index === stateWiner[2] ? "winerBlock" : "" : index === stateWiner[0] || index === stateWiner[1] || index === stateWiner[2] || index === stateWiner[3] ? "winerBlock" : ""}><img src={element === "x" ? Vector : Circle}/></div>
                        )
            }
        </>
    )
}

export default ItemsGame;