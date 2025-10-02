import "../Eventi.css";

export default function EventiPage() {
  return (
    <div className="eventi-container">
      <h1 className="eventi-title">Eventi alla Scuoletta</h1>

      {/* 26 Settembre */}
      <div className="evento">
        <h2 className="evento-data">26 Settembre 2025</h2>
        <h3 className="evento-sottotitolo">
          La scuola degli animali: immaginare il futuro insieme
        </h3>
        <p>
          Un’attività pensata per bambine e bambini dai 3 ai 6 anni, che unisce
          gioco, merenda condivisa e creatività. Attraverso una fiaba che
          trasforma la Scuoletta in una “scuola degli animali”, i piccoli
          partecipanti vengono invitati a chiudere gli occhi, immaginare il
          proprio futuro e raccontarlo ad alta voce o con un disegno.
        </p>
        <p>
          Tra storie di mucche, volpi e marmotte che diventano autobus, fornai o
          artisti, i bambini scopriranno che anche i luoghi hanno bisogno di
          desideri e sogni per rinascere. Con fogli, pennarelli e tanta fantasia,
          immagineremo insieme cosa potrà diventare la Scuoletta, in un clima di
          condivisione, ascolto e gioco, per concludere con una merenda
          collettiva all’aperto.
        </p>
      </div>

      {/* 27 Settembre */}
      <div className="evento">
        <h2 className="evento-data">27 Settembre 2025</h2>
        <p>
          Nei primi giorni di residenza abbiamo avviato un percorso di ascolto e
          confronto con gli abitanti e gli stakeholder del territorio. Abbiamo
          raccolto memorie, desideri e visioni per il futuro della Scuoletta e
          di San Liberatore, guidati dalle parole del poeta ternano Pietro
          Lanfiuti Baldi: <i>“Quanno non ero voce, ma sussurru”.</i>
        </p>
        <p>
          Questa frase, esposta su un banner nella chiesa del paese e diffusa su
          cartoline consegnate ai cittadini, ha invitato tutte e tutti a lasciare
          un ricordo legato alla comunità e un desiderio per la rinascita
          dell&apos;ex scuola.
        </p>
        <p>
          Il 27 settembre abbiamo aperto per la prima volta le porte della
          Scuoletta con un incontro pubblico, rivolto a tutta la cittadinanza,
          alle associazioni e alle realtà locali. È stato un momento speciale per
          condividere i primi esiti del percorso, continuare a raccogliere idee e
          immaginare insieme il futuro di questo luogo. La giornata si è conclusa
          con un momento conviviale, segno del legame che si sta ricostruendo tra
          la Scuoletta e la sua comunità.
        </p>
      </div>
    </div>
  );
}
