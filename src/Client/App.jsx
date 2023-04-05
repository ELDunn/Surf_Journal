import React from 'react';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Sidebar from "./components/Sidebar.jsx";
import Page1 from "./pages/Page1.jsx";
import Page2 from "./pages/Page2.jsx";
import Page3 from "./pages/Page3.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import './styles.css';


//create log gets info from api and saves it to database
//surf log gets all from database and displays
//stats takes info from database to display calculations


function App(props) {

    return (
        <div className='router'>
             <BrowserRouter>
             <Sidebar/>
                <Routes>
                    <Route exact path = "/" element = {<Dashboard/>}/>
                    <Route exact path = "/Page1" element={<Page1/>}/>
                    <Route exact path = "/Page2" element = {<Page2/>}/>
                    <Route exact path = "/Page3" element = {<Page3/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;