import {AppRegistry} from "react-native";
import React from "react";
import App from "./components/app";
import {name as appName} from "./app.json";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from "./data/reducer";
import ReduxThunk from "redux-thunk";
import Logger from "redux-logger";

const store = createStore(reducers, applyMiddleware(Logger, ReduxThunk));

class Root extends React.Component {
    render() {
        return <Provider store={store}>
            <App/>
        </Provider>;
    }
}

AppRegistry.registerComponent(appName, () => Root);
