import '../Resi.css';
import { useNavigate } from 'react-router-dom';

export default function EventiDoppiaData() {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Torna alla home */}
      <div className="back-to-home" onClick={() => navigate('/')}>
        ←Torna alla home
      </div>

      {/* Logo / Header */}
      <div className="logo">la scuoletta</div>

      {/* Titolo pagina */}
      <h1>Eventi di Settembre 2025</h1>
      <div className="date">26–27 SETTEMBRE 2025</div>
      <div className="location">📍 SAN LIBERATORE, FRAZ. COLLESTATTE (TR)</div>

      {/* Piccola nav interna */}
      <nav className="page-nav">
        <a href="#26settembre">26 settembre</a> - <a href="#27settembre">27 settembre</a>
      </nav>

      {/* --- 26 Settembre --- */}
      <section id="26settembre" className="section">
        <div className="event-card">
          <h2 className="event-date">26 Settembre 2025</h2>
          <h3 className="event-subtitle">La scuola degli animali: immaginare il futuro insieme</h3>

          <p>
            Un’attività pensata per bambine e bambini dai 3 ai 6 anni, che unisce gioco, merenda
            condivisa e creatività. Attraverso una fiaba che trasforma la Scuoletta in una “scuola
            degli animali”, i piccoli partecipanti vengono invitati a chiudere gli occhi,
            immaginare il proprio futuro e raccontarlo ad alta voce o con un disegno.
          </p>
          <p>
            Tra storie di mucche, volpi e marmotte che diventano autobus, fornai o artisti, i
            bambini scopriranno che anche i luoghi hanno bisogno di desideri e sogni per rinascere.
            Con fogli, pennarelli e tanta fantasia, immagineremo insieme cosa potrà diventare la
            Scuoletta, in un clima di condivisione, ascolto e gioco, per concludere con una merenda
            collettiva all’aperto.
          </p>
        </div>
      </section>

      {/* --- 27 Settembre --- */}
      <section id="27settembre" className="section">
        <div className="event-card">
          <h2 className="event-date">27 Settembre 2025</h2>

          <p>
            Nei primi giorni di residenza abbiamo avviato un percorso di ascolto e confronto con gli
            abitanti e gli stakeholder del territorio. Abbiamo raccolto memorie, desideri e visioni
            per il futuro della Scuoletta e di San Liberatore, guidati dalle parole del poeta
            ternano Pietro Lanfiuti Baldi: <i>“Quanno non ero voce, ma sussurru”.</i>
          </p>
          <p>
            Questa frase, esposta su un banner nella chiesa del paese e diffusa su cartoline
            consegnate ai cittadini, ha invitato tutte e tutti a lasciare un ricordo legato alla
            comunità e un desiderio per la rinascita dell’ex scuola.
          </p>
          <p>
            Il 27 settembre abbiamo aperto per la prima volta le porte della Scuoletta con un
            incontro pubblico, rivolto a tutta la cittadinanza, alle associazioni e alle realtà
            locali. È stato un momento speciale per condividere i primi esiti del percorso,
            continuare a raccogliere idee e immaginare insieme il futuro di questo luogo. La
            giornata si è conclusa con un momento conviviale, segno del legame che si sta
            ricostruendo tra la Scuoletta e la sua comunità.
          </p>
        </div>
      </section>

      {/* Footer essenziale (riusa il tuo stile) */}
      <footer className="final-footer">
        <div className="footer-left">
          <h3>Contatti</h3>
          <p>
            Instagram:{' '}
            <a
              href="https://www.instagram.com/scuoletta_sanlib?igsh=MWlzdmQ3NG50MnNzdw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              @scuoletta_sanlib
            </a>
          </p>
          <p>
            Email:{' '}
            <a href="mailto:scuoletta.sanlib@gmail.com">scuoletta.sanlib@gmail.com</a>
          </p>
        </div>
        <div className="footer-right">
          <img src="/4.png" alt="Scuoletta Logo" />
        </div>
      </footer>
    </div>
  );
}
