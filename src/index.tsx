import * as React from "react";
import { render } from "react-dom";

import Index from "./pages";

const root = document.createElement('div')
document.body.appendChild(root)

render(
    <Index />,
    root
);
