import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";

import './App.css';
import MainView from './Views/MainView';
import OctopusView from './Views/OctopusView';

const App = () =>
  <HashRouter>
    <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/octopus" element={<OctopusView />} />
    </Routes>
  </HashRouter>;

export default App;
