import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './Main.jsx';
import ProjectDetail from './Components/Projects/ProjectDetail.jsx';

export default function App() {

  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
    </div> 
  );
}
