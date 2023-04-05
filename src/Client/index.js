import React from "react";
import App from "./App.jsx";
import {createRoot} from 'react-dom/client';

// render(
//     <App/>,
//     document.getElementById('app'),
// );

createRoot(document.getElementById('app')).render(<App/>);