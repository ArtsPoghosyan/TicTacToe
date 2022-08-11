import React from "react";
import { Provider } from "react-redux";
import Main from "./componets/Main";
import Main4x4 from "./componets/game4x4/Main4x4";
import Main5x5 from "./componets/game5x5/Main5x5";
import store from "../redux/store";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App(){
    return(
        <Router>
            <div className="mainDiv">
                <Routes>
                    <Route path="/" element={<Provider store={store}><Main /></Provider> } />
                    <Route path="/3x3" element={<Provider store={store}><Main /></Provider> } />
                    <Route path="/4x4" element={<Provider store={store}><Main4x4 /></Provider> } />
                    <Route path="/5x5" element={<Provider store={store}><Main5x5 /></Provider> } />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;