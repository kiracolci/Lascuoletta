import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import HomePage from './App.tsx';
import BandoPage from './Pages/Bando.tsx';
import InfoPage from './Pages/Informazione.tsx'; // <-- Import your new info page


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bando" element={<BandoPage />} />
        <Route path="/Informazione" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
