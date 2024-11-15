import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from '../views/Home';
import Task from '../views/Task';
import QrCode from '../views/QrCode';

 function Router(){

    return (
            <BrowserRouter>
                <Routes>
                <Route path="/" caseSensitive={false} element={<Home />} />
                <Route path="/task" caseSensitive={false} element={<Task />} />
                <Route path="/QrCode" caseSensitive={false} element={<QrCode />} />
                <Route path="/task/:id" caseSensitive={false} element={<Task />} />
                </Routes>
                
            </BrowserRouter>
        
        )

}

export default Router;