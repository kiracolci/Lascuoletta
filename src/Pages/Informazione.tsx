// src/pages/Info.tsx
import { useNavigate } from 'react-router-dom';
import '../info.css';

export default function InfoPage() {
  const navigate = useNavigate();

  return (
    <div className="info-container">
<img src="/circolo.png" alt="Decor Left" className="bg-left" />
<img src="/circolo.png" alt="Decor Right" className="bg-right" />

      <div className="top-bar">
        <p onClick={() => navigate('/')}>           ←Torna alla home
        </p>
      </div>

      <section className="section">
        <h1>La nostra idea</h1>
        <div className="idea-content">
  
          <div className="text-column">
            <p>
            San Liberatore, frazione di Collestatte con meno di 100 abitanti, è uno dei “luoghi del silenzio” per la sua posizione che lo vede ai margini del Parco fluviale del Nera, lontano dai rumori della città.
            </p>
            <p>
            Risalendo la strada Romita, a est di Terni, il paese risulta essere uno snodo per direzioni di interesse turistico: dalla piazza principale si può salire verso il Parco Batteria, raggiungere la Cascata delle Marmore in meno di due ore, attraverso sentieri all'interno del Parco fluviale del Nera, o scendere verso Collestatte e la Valnerina. Da qui passano percorsi di mountain bike e downhill molto conosciuti e frequentati durante l’anno.
            </p>
            <p>
            A San Liberatore c’è un piccolo edificio abbandonato che ha avuto per 30 la funzione di scuola e poi di circolo del paese. Venne costruito durante la seconda guerra mondiale a supporto dei militari che presidiavano la contraerea al Parco Batteria per poi divenire la scuola elementare fino agli anni ‘70.
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
          </div>
          <div className="image-column">
            <img src="/1.JPG" alt="San Liberatore 1" />
            <img src="/2.jpg" alt="San Liberatore 2" />
            <img src="/3.PNG" alt="San Liberatore 3" />
          </div>
        </div>
      </section>

      <section className="section">
        <h1>Il progetto</h1>
        <div className="project-content">
          <div className="text-column">
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
          </div>
          <div className="image-right">
            <img src="/pp.png" alt="Persone progetto" />
          </div>
        </div>
      </section>

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
    </div>
  );
}
