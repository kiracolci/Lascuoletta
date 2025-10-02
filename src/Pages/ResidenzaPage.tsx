import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Drop this file in your src/pages or views folder as ResidenzaPage.tsx
// Images expected at:
//   public/la residenza/image 1.jpg
//   public/la residenza/image 2.jpg
//   public/la residenza/image 3.jpg
// If your files use .png, just change the extension below.

export default function ResidenzaPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.2, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <div className="min-h-screen bg-yellow-100 text-stone-900">
      {/* Sticky hero with fading title */}
      <section ref={heroRef} className="relative h-[70vh] sm:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-300 via-yellow-200 to-yellow-100" />
        <motion.h1
          style={{ opacity: titleOpacity, scale: titleScale }}
          className="sticky top-0 h-[70vh] sm:h-[80vh] flex items-center justify-center text-center px-6 font-bold tracking-tight"
        >
          <span className="text-5xl sm:text-7xl leading-tight drop-shadow-[0_2px_0_rgba(0,0,0,0.04)]">
            La residenza
          </span>
        </motion.h1>
      </section>

      {/* Quote reveal */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <StaggeredQuote text="\u201CQuanno non ero voce, ma sussurru\u201D" />
          <div className="mt-6 h-px bg-yellow-400/70" />
        </div>
      </section>

      {/* Blocks */}
      <ContentBlock
        imageSrc="/la%20residenza/image%201.jpg"
        imageAlt="Inizio della residenza a San Liberatore"
        text={`Dal 19 settembre al 3 ottobre 2025 la nostra Scuoletta ha preso nuova vita grazie alla prima residenza di co-progettazione. Dopo decenni di abbandono, l’ex scuola del paese sta tornando a essere uno spazio di tutti, grazie al percorso avviato con la comunità di San Liberatore.`}
      />

      <ContentBlock
        flip
        imageSrc="/la%20residenza/image%202.jpg"
        imageAlt="Citazione di Pietro Lanfiuti Baldi esposta in paese"
        text={`Ad accompagnare questo percorso ci sono le parole del poeta ternano Pietro Lanfiuti Baldi: “Quanno non ero voce, ma sussurru”. Una frase che abbiamo scelto come filo conduttore e che in questi giorni campeggia sulla chiesa del paese e sulle cartoline distribuite agli abitanti, invitando ognuno a lasciare un ricordo e un desiderio per la Scuoletta.`}
      />

      <ContentBlock
        imageSrc="/la%20residenza/image%203.jpg"
        imageAlt="Momenti di co-progettazione con abitanti e resident artist"
        text={`Federico D’Orazio, progettista culturale, Anna Martinatti, artista e designer, e Chiara Pavolucci, artista visiva, in questi giorni hanno lavorato insieme a noi e agli abitanti per immaginare il futuro del luogo. Attraverso incontri, passeggiate, racconti e raccolta di memorie, desideri e visioni, abbiamo iniziato a costruire una mappa collettiva che intreccia passato e futuro.`}
      />

      <footer className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-sm text-stone-600">
          <p>
            © {new Date().getFullYear()} La Scuoletta – San Liberatore. Progetto di rigenerazione culturale e sociale.
          </p>
        </div>
      </footer>
    </div>
  );
}

function StaggeredQuote({ text }: { text: string }) {
  const letters = Array.from(text);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.035,
      },
    },
  } as const;
  const child = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 420, damping: 28 } },
  } as const;

  return (
    <motion.h2
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center leading-snug"
    >
      {letters.map((ch, i) => (
        <motion.span key={i} variants={child} className="inline-block">
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </motion.h2>
  );
}

function ContentBlock({
  imageSrc,
  imageAlt,
  text,
  flip = false,
}: {
  imageSrc: string;
  imageAlt: string;
  text: string;
  flip?: boolean;
}) {
  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-6 px-5 sm:gap-10 sm:px-6 md:grid-cols-2">
        <motion.div
          className={
            "order-2 md:order-1 " + (flip ? "md:order-2" : "md:order-1")
          }
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-base sm:text-lg leading-relaxed text-stone-800 bg-yellow-50/70 rounded-2xl p-5 md:p-6 shadow-[0_2px_0_rgba(0,0,0,0.04)] border border-yellow-200">
            {text}
          </p>
        </motion.div>

        <motion.figure
          className={
            "order-1 md:order-2 " + (flip ? "md:order-1" : "md:order-2")
          }
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full aspect-[4/3] object-cover rounded-3xl shadow-md border border-yellow-200"
            loading="lazy"
          />
        </motion.figure>
      </div>
    </section>
  );
}
