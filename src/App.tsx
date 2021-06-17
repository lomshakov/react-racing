import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import {Provider} from 'react-redux'
import NormalRoute from "./routes/NormalRoute";
import {Layout} from "./components/common/Layout";
import {RacingPage} from "./components/RacingPage/RacingPage";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <NormalRoute path="/" layout={Layout} component={RacingPage}/>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
