// src/Pages/ResidenzaPage.tsx
import '../Resi.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';


export default function ResidenzaPage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const quoteRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const stage = stageRef.current;
      const title = titleRef.current;
      const quote = quoteRef.current;
      if (!stage || !title || !quote) return;

      const rect = stage.getBoundingClientRect();
      const total = Math.max(rect.height, 1);
      const p = Math.min(Math.max((0 - rect.top) / total, 0), 1);

      // --- Title: fade out faster, so it disappears early ---
      const tOpacity = 1 - Math.min(p / 0.35, 1); // was 0.6
      const tScale = 1 - Math.min(p, 1) * 0.08;
      title.style.opacity = String(tOpacity);
      title.style.transform = `scale(${tScale})`;

      // --- Quote: fade in early, then HOLD fully visible for long time ---
      const qStart = 0.10;   // start appearing sooner
      const qFull  = 0.40;   // reach full opacity early
      const qHoldEnd = 1.8;  // keep fully visible until almost the end (p is clamped at 1)

      let qOpacity: number;
      if (p <= qStart) qOpacity = 0;
      else if (p <= qFull) qOpacity = (p - qStart) / (qFull - qStart);  // 0 → 1
      else if (p < qHoldEnd) qOpacity = 1;                               // HOLD
      else qOpacity = 1 - (p - qHoldEnd) / (1 - qHoldEnd);               // gentle fade (optional)

      const qScale = p <= qFull ? 0.94 + qOpacity * 0.06 : 1.0; // grow in, then stay steady

      quote.style.opacity = String(Math.max(0, Math.min(1, qOpacity)));
      quote.style.transform = `scale(${qScale})`;

      if (qOpacity > 0.01) {
        quote.classList.add('active');
        (quote as HTMLElement).style.visibility = 'visible';
      } else {
        quote.classList.remove('active');
        (quote as HTMLElement).style.visibility = 'hidden';
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const quoteStr = '“Quanno non ero voce, ma sussurru”';
  const letters = useMemo(() => Array.from(quoteStr), [quoteStr]);

  return (
    <div className="resi-root">
      {/* STICKY STAGE: title fades out, quote fades in */}
      <section className="resi-stage" ref={stageRef}>
        <div className="resi-stage-bg" />
        <div className="resi-stage-center">
          <h1 ref={titleRef} className="resi-stage-title">LA RESIDENZA</h1>
          <h2 ref={quoteRef} className="resi-stage-quote" aria-label={quoteStr}>
            {letters.map((ch, i) => (
              <span className="resi-qch" style={{ ['--i' as any]: i }} key={i}>
                {ch === ' ' ? '\u00A0' : ch}
              </span>
            ))}
          </h2>
        </div>
      </section>

      {/* CAROUSEL */}
      <ResiCarousel
        slides={[
          {
            img: '/laresidenza/1.jpg',
            alt: 'Inizio della residenza a San Liberatore',
            text: (
              <>
                Dal 19 settembre al 3 ottobre 2025 la nostra Scuoletta ha preso nuova vita grazie
                alla prima residenza di co-progettazione. Dopo decenni di abbandono, l’ex scuola del
                paese sta tornando a essere uno spazio di tutti, grazie al percorso avviato con la
                comunità di San Liberatore.
              </>
            ),
          },
          {
            img: '/laresidenza/2.png',
            alt: 'Citazione di Pietro Lanfiuti Baldi esposta in paese',
            text: (
              <>
                Ad accompagnare questo percorso ci sono le parole del poeta ternano Pietro Lanfiuti
                Baldi: “Quanno non ero voce, ma sussurru”. Una frase che abbiamo scelto come filo
                conduttore e che in questi giorni campeggia sulla chiesa del paese e sulle cartoline
                distribuite agli abitanti, invitando ognuno a lasciare un ricordo e un desiderio per
                la Scuoletta.
              </>
            ),
          },
          {
            img: '/laresidenza/3.png',
            alt: 'Momenti di co-progettazione con abitanti e resident artist',
            text: (
              <>
                Federico D’Orazio, progettista culturale, Anna Martinatti, artista e designer, e
                Chiara Pavolucci, artista visiva, in questi giorni hanno lavorato insieme a noi e agli
                abitanti per immaginare il futuro del luogo. Attraverso incontri, passeggiate, racconti
                e raccolta di memorie, desideri e visioni, abbiamo iniziato a costruire una mappa
                collettiva che intreccia passato e futuro.
              </>
            ),
          },
        ]}
      />

      {/* LINKS TO SUBPAGES */}
      <section className="resi-links">
        <Link className="resi-link" to="/ResidenzaSA">
          La Galleria della Scuoletta
          <span className="resi-link-arrow">→</span>
        </Link>

        <Link className="resi-link" to="/la-residenza/27">
          Che cosa abbiamo fatto?
          <span className="resi-link-arrow">→</span>
        </Link>
      </section>

      <footer className="resi-footer">
        © {new Date().getFullYear()} La Scuoletta – San Liberatore. Progetto di rigenerazione
        culturale e sociale.
      </footer>
    </div>
  );
}

/* =============================
   Carousel (scroll-snap + arrows)
   ============================= */
type Slide = {
  img: string;
  alt: string;
  text: React.ReactNode;
};

function ResiCarousel({ slides }: { slides: Slide[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  // Keep index in sync with scroll position
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const onScroll = () => {
      const w = rail.getBoundingClientRect().width; // visible width
      const i = Math.round(rail.scrollLeft / w);
      setIndex(Math.max(0, Math.min(slides.length - 1, i)));
    };
    rail.addEventListener('scroll', onScroll, { passive: true });
    return () => rail.removeEventListener('scroll', onScroll);
  }, [slides.length]);

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goTo(index + 1);
      if (e.key === 'ArrowLeft') goTo(index - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const goTo = (i: number) => {
    const rail = railRef.current;
    if (!rail) return;
    const clamped = Math.max(0, Math.min(slides.length - 1, i));
    const w = rail.getBoundingClientRect().width; // visible width
    rail.scrollTo({ left: clamped * w, behavior: 'smooth' });
  };

  return (
    <section className="resi-carousel">
      <div className="resi-carousel-outer">
        {/* gradient edges */}
        <div className="resi-fade left" aria-hidden />
        <div className="resi-fade right" aria-hidden />

        {/* arrows */}
        <button
          className="resi-arrow left"
          aria-label="Slide precedente"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
        >
          ‹
        </button>
        <button
          className="resi-arrow right"
          aria-label="Slide successiva"
          onClick={() => goTo(index + 1)}
          disabled={index === slides.length - 1}
        >
          ›
        </button>

        {/* scroll-snap rail */}
        <div ref={railRef} className="resi-rail" role="region" aria-label="Galleria immagini">
          {slides.map((s, i) => (
            <article className="resi-slide" key={i}>
              <figure className="resi-slide-media">
                <img src={s.img} alt={s.alt} loading="lazy" />
              </figure>
              <div className="resi-slide-text">
                <p>{s.text}</p>
              </div>
            </article>
          ))}
        </div>

        {/* dots */}
        <div className="resi-dots" role="tablist" aria-label="Selettore slide">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`resi-dot ${i === index ? 'active' : ''}`}
              aria-label={`Vai alla slide ${i + 1}`}
              aria-selected={i === index}
              role="tab"
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
