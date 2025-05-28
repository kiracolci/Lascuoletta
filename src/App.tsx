// src/pages/index.tsx
'use client';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './main.css';

export default function HomePage() {
  const [blipLeft, setBlipLeft] = useState(true);
  const [blipRight, setBlipRight] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setBlipLeft((prev) => !prev);
      setBlipRight((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-container">
      <img src="/circolo.png" alt="Decor Left" className="bg-left" />
<img src="/circolo.png" alt="Decor Right" className="bg-right" />

      {/* Top Menu Bar */}
      <div className="top-menu">
        <p onClick={() => navigate('/bando')}>Il bando</p>
        <p></p>
        <p onClick={() => setShowPopup(true)}>Contatti</p>
      </div>

      {/* Centerpiece */}
      <div className="center-piece">
        <div className="logo-orbit-wrapper">
          <img src="/incorso.png" alt="Progetto in corso" className="orbiting" />
          <img src="/logo1.png" alt="Logo La Scuoletta" className="logo-img" />
        </div>
      </div>

{/* VAI AL BANDO button */}
<div className="bando-button" onClick={() => navigate('/bando')}>
 <span>→ VAI AL BANDO ←</span> 
</div>

      {/* Footer */}
      <div className="footer-text">
        <span className={`dot ${blipLeft ? 'active' : ''}`} />
        <p>FASE: BANDO RICERCA CANDIDATI PER SVILUPPO DEL TERRITORIO</p>
        <span className={`dot ${blipRight ? 'active' : ''}`} />
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={() => setShowPopup(false)}>&times;</span>
            <p>
              Instagram: <a href="https://www.instagram.com/scuoletta_sanlib?igsh=MWlzdmQ3NG50MnNzdw%3D%3D" target="_blank" rel="noreferrer">@scuoletta_sanlib</a><br />
              Email: <a href="mailto:scuoletta.sanlib@gmail.com">scuoletta.sanlib@gmail.com</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
