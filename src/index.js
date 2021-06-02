import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { store } from "./store";

import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme.js";

import App from "./App";

import './main.css'

// test snackbars

//import {addSnackbar} from './state/snackbar'
//window.snack = (text, color, time) => store.dispatch(addSnackbar(text, color, time ))

//----------------------------------------------------
// test fullScreenCircuralProgress

//import {circuralProgress} from './state/fullScreenCircuralProgress'
//window.addCircural = () => store.dispatch(circuralProgress.add())
//window.removeCircural = () => store.dispatch(circuralProgress.remove())

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
