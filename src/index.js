require('file-loader?name=[name].[ext]!./index.html');
import React from "react";
import { ReactDOM } from "react";

import { App } from "./App";

const appElement = document.getElementById("app");

ReactDOM.render(<App />, appElement);
