import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";
import NormalRoute from "./routes/NormalRoute";
import {Layout} from "./components/common/Layout";
import {RacingPage} from "./components/RacingPage/RacingPage";

function App() {
    return (
        <Router>
            <Switch>
                <NormalRoute path="/" layout={Layout} component={RacingPage}/>
            </Switch>
        </Router>
    );
}

export default App;
