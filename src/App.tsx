// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Bando from './Pages/Bando';
import Informazione from './Pages/Informazione';
import ResidenzaPage from './Pages/ResidenzaPage';
import ResidenzaSA from './Pages/ResidenzaSA';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bando" element={<Bando />} />
        <Route path="/informazione" element={<Informazione />} />
        <Route path="/la-residenza" element={<ResidenzaPage />} />
        <Route path="/ResidenzaSA" element={<ResidenzaSA />} />
        </Routes>
    </Router>
  );
}
