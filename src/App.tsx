import './App.css';
import { useEffect, useState } from "react";

function Countdown() {
  const deadline = new Date("2025-06-30T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState(deadline - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(deadline - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (timeLeft <= 0) return <p className="countdown-text">Scaduto!</p>;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <p className="countdown-text">
      Scadenza tra: {days}g {hours}h {minutes}m {seconds}s
    </p>
  );
}

function App() {
  return (
    <div className="container">
      <div className="logo">la scuoletta</div>

      <h1>CALL PER 3 RESIDENZE</h1>
      <div className="date">19 SETTEMBRE – 3 OTTOBRE 2025</div>
      <div className="location">📍 SAN LIBERATORE, FRAZ. COLLESTATTE (TR)</div>
      


      <nav className="page-nav">
  <a href="#destinatari">I DESTINATARI</a> -
  <a href="#attivita">ATTIVITÀ</a> -
  <a href="#candidatura">CANDIDATURA</a> -
  <a href="#contesto">CONTESTO</a> -
  <a href="#obiettivi">OBBIETTIVI</a> -
  <a href="#scenari">SCENARI DI PROGETTO</a> -
  <a href="#promotori">PROMOTORI</a>
</nav>


      <div id="destinatari" className="section">
        <h2>I DESTINATARI</h2>
        <p>
        Il bando è rivolto a persone impegnate sui temi della progettazione, dello sviluppo locale, delle periferie urbane, della creatività, dell’innovazione e del territorio, che intendono contribuire a un percorso interdisciplinare e aperto di rigenerazione, funzionale allo sviluppo futuro del sito.

        </p>
        <p>
        Possono presentare la candidatura professionisti di ogni età, operanti sia sul territorio nazionale sia all’estero, individualmente o anche in rappresentanza di gruppi di professionisti (associazioni, centri di ricerca, start-up, studi di architettura e/o urbanistica, etc.).
        </p>
        <p>
        A titolo di esempio si individuano come possibili figure: artisti, architetti, antropologi, urbanisti, paesaggisti, esperti e consulenti ambientali, designer, fotografi, economisti, educatori, esperti di co-design, esperti di comunicazione e narrazione, esperti di open-data, esperti di progettazione europea, etnografi, facilitatori, imprenditori e innovatori sociali, progettisti culturali, semiologi, sociologici, storici, esperti in progettazione partecipata, amministratori e operatori della pubblica amministrazione e altri profili che integrino diverse dimensioni professionali e disciplinari.
        </p>
        <p>
        La modalità residenziale ha la finalitá di massimizzare la conoscenza del contesto e degli attori coinvolti, e favorire un metodo di lavoro collaborativo e orizzontale; la presenza di mentor qualificati, in parte espressione dei promotori, intende garantire l’accrescimento delle competenze dei partecipanti e presidiare la qualità e le ricadute dei materiali sviluppo.

        </p>
      </div>
      <div className="highlight">
        <h3>3 candidati massimi</h3>
        <p>Dal 19 settembre al 3 ottobre a San Liberatore, fraz. Collesatte (TR)</p>
        <p>
          Alloggio garantito + compenso di <strong>1600€</strong> lordi
        </p>
      </div>


      <section id="attivita" className="activities">
        <h2>ATTIVITÀ</h2>
        <p className="subtitle">
          Le attività della residenza saranno sviluppate secondo 3 fasi:
        </p>

        <div className="activity-grid">
          <div className="activity-card">
            <div className="number">1.</div>
            <p>Una fase di ricerca, ascolto e osservazione</p>
            <p>Passeggiate e sopralluoghi nel territorio</p>
            <p>Tavoli di confronto con la comunità e le realtà locali</p>
          </div>

          <div className="activity-card">
            <div className="number">2.</div>
            <p>Una fase di co-progettazione</p>
            <p>Workshop con mentor e ospiti</p>
            <p>Individuazione dei canali di implementazione</p>
          </div>

          <div className="activity-card">
            <div className="number">3.</div>
            <p>
              Una fase di elaborazione e presentazione <br />
              (possibile che si prolunghi oltre le date della residenza)
            </p>
            <p>Sviluppo delle proposte creative</p>
            <p>Presentazione sul territorio degli output</p>
          </div>
        </div>
      </section>

      <section id="candidatura"className="submission">
        <p>
        I candidati possono presentare la propria candidatura, a titolo personale o di rappresentanza di gruppo, unicamente attraverso e-mail all’indirizzo         </p>
        <p className="email">scuoletta.sanlib@gmail.com</p>
        <h3 className="deadline">SCADENZA 30 GIUGNO 2025</h3>
        <p>Le dimensioni della e-mail non potranno superare i 10 MB.</p>
        <p>
          <em>La candidatura deve essere composta da:</em><br />
          – una <strong>manifestazione di interesse</strong> (di massimo 4.000 caratteri, spazi inclusi) verso lo scenario di sviluppo del progetto, in forma testuale, che chiarisca le ragioni del proprio interesse e il contributo che si intende portare;<br />
          – un proprio <strong>curriculum vitae e/o portfolio</strong> dei propri lavori;
        </p>
        <p>
          Le richieste di chiarimento possono essere inviate a scuoletta.sanlib@gmail.com.
        </p>
      </section>
      <section id="contesto" className="section contesto">
  <h2> CONTESTO</h2>
  <p>
  San Liberatore, frazione di Collestatte con meno di 100 abitanti, è uno dei “luoghi del silenzio” per la sua posizione che lo vede ai margini del Parco fluviale del Nera, lontano dai rumori della città.
  </p>
  <p>
  Risalendo la strada Romita, a est di Terni, il paese risulta essere uno snodo per direzioni di interesse turistico: dalla piazza principale si può salire verso il Parco Batteria, raggiungere la Cascata delle Marmore in meno di due ore, attraverso sentieri all'interno del Parco fluviale del Nera, o scendere verso Collestatte e la Valnerina. Da qui passano percorsi di mountain bike e downhill molto conosciuti e frequentati durante l’anno.
  </p>
  <p>
    A San Liberatore c’è un piccolo edificio abbandonato che ha avuto per 30 la funzione di scuola e poi di circolo del paese. Venne costruito durante la seconda guerra mondiale a supporto dei militari che presidiavano la contraerea al Parco Batteria per poi divenire la scuola elementare fino agli anni ’70.
  </p>
  <p>
  L’edificio, senza fondazioni ma poggiato su un pianale di marna molto dura, è abbandonato da decine di anni ed evidenzia oggi alcuni danni alla struttura.
  </p>
  <p>
  Poco distante vi è la Chiesa di Santa Croce, risalente ai primi del XVI secolo e costruita su un precedente monastero, che contiene alcuni affreschi cinquecenteschi ed una cappella con una scritta in volgare datata 24 Luglio 1512. Questa chiesa fino agli anni ‘90 è stata meta di un importante pellegrinaggio religioso che partiva dalla città di Terni. Nella piazza antistante, gli abitanti del paese hanno sempre organizzato feste e momenti di aggregazione. Attualmente la chiesa, gestita dall’arcidiocesi di Spoleto-Norcia, è inattiva.
  </p>
  <p>
  Vorremmo che San Liberatore divenga un caso studio, un’esperienza che dialoga con i progetti esistenti e che prova a immaginare un futuro in cui le aree interne tornino ad avere una centralità nella cultura e nell’economia dei territori.
  </p>

  <div className="photo-grid">
    <img src="/1.JPG" alt="San Liberatore 1" />
    <img src="/2.jpg" alt="San Liberatore 2" />
  </div>
</section>

<section id="obiettivi" className="section obiettivi">
  <h2>OBBIETTIVI DEL BANDO</h2>
  <p>
  Il presente bando è una chiamata verso artistə, progettistə e narratori che si sentono portatori potenziali di rigenerazione e che intendono partecipare a un piccolo gruppo di lavoro interdisciplinare, che definisca e promuova una visione di sviluppo per uno spazio ibrido dedicato alle associazioni, alla promozione del territorio e ad attività culturali, artistiche e ludiche.	

  </p>
  <p>
  Le figure saranno chiamate a partecipare a un percorso residenziale che si terrà dal 19 settembre al 3 ottobre a San Liberatore, fraz. Collestatte, durante il quale i partecipanti potranno essere ospitati all’interno delle case degli abitanti e/o delle strutture ricettive locali. Il percorso sarà caratterizzato da contaminazione creativa, grazie all’affiancamento dei promotori, degli stakeholder e di mentor di rilievo.

  </p>
  <p>
  Questo bando ha l’obiettivo di selezionare persone e non è fatto per selezionare progetti. Non è pensato per raccogliere idee esecutive per la riqualificazione della ex-scuola, ma per creare un gruppo di professionisti in grado di supportare la co-progettazione di un futuro per questo luogo e generare cambiamento.
  </p>
  <p>
  Per ottenere questo, abbiamo bisogno di competenze w creativitàma, ma anche di capacità di racconto e condivisione: persone che abbiano un approccio alla complessità capace di tradursi in visione di progetto e in strumenti di sensibilizzazione, con uno sguardo al mondo e alle specificità locali e che abbiano voglia di mettersi in gioco.

  </p>
  <p>
  In questo bando e in questo percorso si vogliono mettere a frutto lo studio di casi di rigenerazione in Italia e all’estero, e più in generale capitalizzare l’esperienza fatta in questo tipo di interventi di promozione del cambiamento. Per tutte queste ragioni, intendiamo raccogliere manifestazioni di interesse e relative motivazioni da parte dei candidati.

  </p>
  <p>
  Per sua stessa natura, è un bando che segna dei confini ma lascia grande apertura all’iniziativa dei candidati - e si riserva, a seconda delle candidature pervenute, di costruire il gruppo di lavoro in modo flessibile, per renderlo il più efficace possibile.

  </p>
</section>

<section id="scenari" className="section scenari">
  <h2>SCENARI DI PROGETTO</h2>
  <p>
  L’area di progetto è costituita da un fabbricato di circa 200 mq (La Scuoletta) e un terreno scosceso costituito in parte da bosco di querce e in parte da terreno seminativo-forestale, attualmente adibito a deposito di materiali da parte dei vicini.

  </p>
  <p>
  L’intento del progetto è quello di rigenerare l‘ambito della scuoletta di San Liberatore, riportandolo alla sua vocazione educativa e culturale, curando le relazioni e gli spazi circostanti e offrendo uno spazio dinamico e creativo alla comunità. Lo sviluppo del progetto dovrà quindi ruotare intorno alla crescita spirituale della persona, prevedendo attività dedicate all’arte, allo scambio culturale, alla meditazione, alla cura dell’ambiente, alla promozione enogastronomica e turistica del territorio e al confronto interdisciplinare.

  </p>
  <p>
  L’intenzione è quella di realizzare un centro culturale dedicato alle più diverse attività laboratoriali, educative, artistiche e formative oltre potenzialmente ad alcuni servizi collaterali come una ciclofficina e un piccolo bistrot.

  </p>
  <p>
  La Scuoletta di S.Liberatore, inoltre, ha il potenziale per divenire un punto di riferimento turistico facendo da connessione tra la città di Terni e la Valnerina, entrambe a 15 minuti di macchina.

  </p>
  <p>
  Anche il Parco Batteria, per la sua posizione in cima al monte di San Liberatore e la sua storia di abbandono e degrado, diventa un possibile ambito di progettazione generativa: dalle giornate di pulizia e sistemazione collettiva o i pranzi sociali con gli abitanti, fino a grandi eventi legati alla musica e al rispetto della natura, nei mesi primaverili ed estivi.

  </p>

  <div className="project-image">
    <img src="/3.PNG" alt="Scenari di Progetto" />
  </div>
</section>

<section className="section promotori">
  <h2>I PROMOTORI</h2>

  <div id="promotori" className="promotori-grid">
    <div>
      <h4>I PROPRIETARI</h4>
      <p>
      Il progetto è promosso dalle famiglie Rapaccini e Rossi. Le due famiglie si sono unite nella società Raro Srl, proprietaria dell’edificato e del terreno retrostante, con l’obiettivo di fare investimenti comuni per valorizzare il territorio, rinnovando l'impegno di entrambe nei confronti della comunità locale e partecipando attivamente alle attività di progettazione, creazione e condivisione culturale e artistica. 

      </p>
      <p>
      La famiglia Rapaccini è arrivata a San Liberatore agli inizi del 1960: Giorgio, conosciuto e stimato medico ternano, tra i primi oculisti antroposofi in Italia, insieme alla moglie Edda e al primo figlio Andrea, ai quali si sono poi aggiunte le sorelle Bianca Maria e Maria Beatrice. Giorgio Rapaccini si è dedicato fin da giovane alla pratica della pittura, approfondendo gli studi sul colore, tenendo corsi di espressione pittorica per bambini e adulti e producendo centinaia di opere fortemente collegate all’antroposofia. La famiglia, anche attraverso il lavoro e l’esperienza del medico, artista e nonno Giorgio, le cui opere non sono oggi accessibili al pubblico, intende far conoscere e promuovere l’importante tradizione pittorica e scultorea del territorio.

      </p>
      <p>
        
La famiglia Rossi ha un forte legame con San Liberatore. Il padre di Roberto Rossi, Alfio, è nato qui e sua madre, Silvana, a Narni. Nel 1958, Alfio e Silvana si sposarono nonostante la sfida di trovarsi in continenti diversi: Alfio lavorava nelle miniere d'oro in Sudafrica e Silvana poté raggiungerlo solo dopo due anni di matrimonio. La vita in Sudafrica era dura per Alfio, che lavorò sotto terra fino a risparmiare abbastanza per acquistare un minimarket. Insieme a Silvana, trasformarono il negozio in una catena: un'attività che Roberto, la moglie Isme, la sorella Rosita e il cognato Umberto gestirono collettivamente fino alla decisione di venderla nel 1998. Pur vivendo in Sudafrica, i Rossi hanno mantenuto stretti legami con i parenti e i vicini della loro infanzia, tenendo al villaggio tanto quanto alla loro casa in Sudafrica e tornando tutte le estati a San Liberatore.

      </p>
    </div>

    <div>
      <h4>C.U.R.A. CENTRO UMBRO RESIDENZE ARTISTICHE</h4>
      <p>
      Dal 2018 la Regione Umbria riconosce C.U.R.A. come Centro di Residenza Artistica nella cornice del bando per Centri di Residenza in materia di spettacolo dal vivo. C.U.R.A. racchiude nel suo nome il nodo cardine del progetto: la volontà di istituire delle nuove pratiche per curare e favorire la crescita di identità creative e di nuove progettualità con strumenti innovativi che rispondano alle esigenze degli artisti, dei mediatori culturali e della società contemporanea con cui il tutto si confronta. Obiettivo è infatti mettere a sistema e capitalizzare tutto il patrimonio costruito negli anni e moltiplicarlo per un superamento delle posizioni individuali verso un orizzonte comune. Il progetto si articola in 5 residenze multidisciplinari, percorsi di incubazione ma anche accompagnamento drammaturgico delle nuove idee e creazioni con particolare interesse per progetti che promuovano intersezioni con le nuove tecnologie. Parallelamente vengono sviluppati e promossi workshop e bandi pubblici per nuove produzioni, azioni di scouting, processi creativi nello spazio pubblico e interventi site specifIc, accompagnati da pratiche di mediazione con il pubblico grazie alla creazione di spazi di incontro e approfondimento legati ai linguaggi contemporanei delle arti performative.

      </p>
      <p>
       
      </p>
    </div>

    <div>
      <h4>DEMETRA</h4>
      <p>
        Demetra è un’associazione di promozione sociale fondata a Terni nel 2004 che opera negli ambiti dell’aggregazione intergenerazionale, dei processi partecipativi, dell’inclusione sociale, della rigenerazione urbana e delle arti contemporanee e performative. E’ composta da giovani creativi e professionisti che grazie alla propria formazione ed all’attività dell’associazione hanno acquisito competenze nell’ambito della progettazione sociale e culturale, nell’ideazione, organizzazione e gestione integrata di eventi. Nel 2005 l’associazione ha riqualificato una vecchia scuola di campagna, che è ormai prossima alla città, per fondarvi il “Centro di Palmetta”, luogo multifunzionale, spazio culturale e residenza artistica conosciuta internazionalmente.  La nascita del Centro è stato per l’associazione il punto di inizio di una grande quantità di progetti ed eventi che si sono moltiplicati nel corso degli anni. Obiettivo dell’associazione è una progettazione culturale e artistica che si sviluppa in stretta connessione con il tessuto urbano attraverso la costruzione di relazioni trasversali e ampie con Istituzioni, altre associazioni e imprese, con un’attenzione particolare per le fasce giovanili di pubblico. Demetra lavora quotidianamente per la promozione, la diffusione e la valorizzazione del volontariato tra i giovani affinché, attraverso l’investimento personale di tempo, energie e creatività, si possa contribuire alla costruzione di nuove prassi per migliorare il luogo che abitiamo. Un’attenzione e una cura vengono destinate affinché le attività di Demetra, pur nella loro natura nomade ed esploratrice, non siano eventi isolati ma si radichino nei luoghi attraversati grazie al coinvolgimento dei cittadini e alla valorizzazione delle loro competenze e storie. Il metodo orizzontale di organizzazione del lavoro associativo, l’attenzione ai processi interni e un approccio creativo alla soluzione dei problemi, il lavoro di rete, la progettazione sociale, l’analisi dei bisogni e la cura dei processi di partecipazione, sono la formula di lavoro in tutti i progetti dell’associazione.

      </p>
      <p>
   
      </p>
    </div>
  </div>
  <footer className="final-footer">
  <div className="footer-left">
    <h3>Contatti</h3>
    <p>
      Instagram:{" "}
      <a
        href="https://www.instagram.com/scuoletta_sanlib?igsh=MWlzdmQ3NG50MnNzdw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
      >
        @scuoletta_sanlib
      </a>
    </p>
    <p>
      Email:{" "}
      <a href="mailto:scuoletta.sanlib@gmail.com">
        scuoletta.sanlib@gmail.com
      </a>
    </p>
  </div>
  <div className="footer-right">
    <img src="/4.png" alt="Scuoletta Logo" />
  </div>
</footer>

</section>

<div className="countdown-fixed">
  <div className="countdown">
    <Countdown />
  </div>
</div>


    </div>
  );
}

export default App;
