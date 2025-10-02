// src/Pages/ResidenzaSA.tsx
import { useEffect, useRef } from "react";
import "../Resi.css";

export default function ResidenzaSA() {
  return (
    <div className="collage-page">
      <InfiniteMasonryTight />
    </div>
  );
}

function InfiniteMasonryTight() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: false })!;
    const dpr = Math.min(2, window.devicePixelRatio || 1);

    // 20 images in /public/laresidenza/SA/
    const sources = Array.from({ length: 56 }, (_, i) => `/laresidenza/SA/${i + 1}-min.jpeg`);

    let rafId = 0;
    let disposed = false;

    // Canvas sizing
    const resize = () => {
      canvas.width = Math.round(canvas.clientWidth * dpr);
      canvas.height = Math.round(canvas.clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Preload images
    Promise.all(
      sources.map(
        (src) =>
          new Promise<HTMLImageElement | null>((resolve) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => resolve(null);
            img.src = src;
          })
      )
    ).then((arr) => {
      if (disposed) return;
      const images = arr.filter((x): x is HTMLImageElement => !!x);
      if (!images.length) return;

      // -------- CONFIG (tight, no-overlap, seam-safe) --------
      const COLS = 8;            // more columns = denser, fewer large gaps
      const COL_W = 180;         // column width (keeps photos at nice size)
      const GUTTER = 18;         // fixed gap between neighbors (no touching)
      const PADDING = 24;        // inner margin around the whole tile
      const INNER_H = 1900;      // taller tile => more variety before repeat

      // small per-column horizontal offset (organic feel)
      // bounded so neighbor spacing stays >= GUTTER
      const COL_OFFSET_MAX = Math.floor(GUTTER / 3);  // e.g. 6px if GUTTER=18

      // derived sizes
      const INNER_W = COLS * COL_W + (COLS - 1) * GUTTER;
      const TILE_W = INNER_W + PADDING * 2;
      const TILE_H = INNER_H + PADDING * 2;

      type Sprite = { x: number; y: number; w: number; h: number; img: HTMLImageElement };
      const sprites: Sprite[] = [];

      // base column X positions (strict grid)
      const baseColX: number[] = Array.from(
        { length: COLS },
        (_, c) => PADDING + c * (COL_W + GUTTER)
      );

      // generate small offsets per column, clamped so neighbors never get closer than GUTTER
      const colOffset: number[] = new Array(COLS).fill(0);
      for (let c = 0; c < COLS; c++) {
        const off = (Math.random() * 2 - 1) * COL_OFFSET_MAX; // ±max
        colOffset[c] = Math.round(off);
      }
      // enforce monotonic increasing with >= COL_W + GUTTER minimum spacing
      const colX: number[] = new Array(COLS);
      colX[0] = baseColX[0] + colOffset[0];
      for (let c = 1; c < COLS; c++) {
        const minAllowed = colX[c - 1] + COL_W + GUTTER;
        const raw = baseColX[c] + colOffset[c];
        colX[c] = Math.max(minAllowed, raw);
      }
      // if we expanded total width, re-center inside the padding area so we don't exceed tile
      const usedInnerWidth = (colX[COLS - 1] + COL_W) - colX[0];
      const slack = INNER_W - usedInnerWidth;
      const shift = Math.floor(slack / 2);
      for (let c = 0; c < COLS; c++) colX[c] += shift;

      // column Y cursors
      const colY: number[] = Array.from({ length: COLS }, () => PADDING);
      // tiny stagger to avoid straight band at top
      for (let c = 0; c < COLS; c++) colY[c] += Math.random() * 40;

      const shortestCol = () => {
        let best = 0;
        for (let i = 1; i < COLS; i++) if (colY[i] < colY[best]) best = i;
        return best;
      };

      // Pack sprites (classic masonry; never cross bottom padding)
      let i = 0;
      let guard = 0;
      const MAX_ITEMS = 1500;
      while (guard++ < MAX_ITEMS) {
        const col = shortestCol();
        const img = images[i % images.length];
        const ar = img.naturalHeight / img.naturalWidth || 1;
        const w = COL_W;
        const h = Math.round(w * ar);

        if (colY[col] + h > TILE_H - PADDING) {
          colY[col] = Number.POSITIVE_INFINITY;      // saturate this column
          if (colY.every((yy) => !isFinite(yy))) break; // all done
          i++;
          continue;
        }

        sprites.push({ x: colX[col], y: colY[col], w, h, img });
        colY[col] += h + GUTTER;

        if (colY.every((yy) => yy > TILE_H - PADDING)) break;
        i++;
      }

      // -------- RENDER (infinite tiling) --------
      let ox = 0, oy = 0;              // pan offsets (drag to move)
      let dragging = false;
      let lastX = 0, lastY = 0;

      const mod = (n: number, m: number) => ((n % m) + m) % m;

      const drawTile = (tx: number, ty: number) => {
        // fill tile bg so seams are invisible
        ctx.fillStyle = "#fffef6";
        ctx.fillRect(tx, ty, TILE_W, TILE_H);
        // draw packed photos
        for (const sp of sprites) ctx.drawImage(sp.img, tx + sp.x, ty + sp.y, sp.w, sp.h);
      };

      const loop = () => {
        const vw = canvas.clientWidth, vh = canvas.clientHeight;
        ctx.fillStyle = "#fffef6";
        ctx.fillRect(0, 0, vw, vh);

        const baseX = mod(ox, TILE_W);
        const baseY = mod(oy, TILE_H);
        const startX = -baseX - TILE_W;
        const startY = -baseY - TILE_H;

        // 3x3 tiles around viewport
        for (let ry = 0; ry < 3; ry++) {
          for (let rx = 0; rx < 3; rx++) {
            drawTile(startX + rx * TILE_W, startY + ry * TILE_H);
          }
        }

        rafId = requestAnimationFrame(loop);
      };

      // drag to pan
      const onDown = (e: PointerEvent) => {
        dragging = true;
        lastX = e.clientX; lastY = e.clientY;
        canvas.setPointerCapture(e.pointerId);
      };
      const onMove = (e: PointerEvent) => {
        if (!dragging) return;
        ox -= e.clientX - lastX;
        oy -= e.clientY - lastY;
        lastX = e.clientX; lastY = e.clientY;
      };
      const onUp = (e: PointerEvent) => {
        dragging = false;
        if (canvas.hasPointerCapture(e.pointerId)) canvas.releasePointerCapture(e.pointerId);
      };

      canvas.addEventListener("pointerdown", onDown);
      canvas.addEventListener("pointermove", onMove);
      canvas.addEventListener("pointerup", onUp);
      canvas.addEventListener("pointercancel", onUp);
      canvas.addEventListener("pointerleave", onUp);

      rafId = requestAnimationFrame(loop);

      // cleanup for handlers created inside preload
      return () => {
        canvas.removeEventListener("pointerdown", onDown);
        canvas.removeEventListener("pointermove", onMove);
        canvas.removeEventListener("pointerup", onUp);
        canvas.removeEventListener("pointercancel", onUp);
        canvas.removeEventListener("pointerleave", onUp);
        cancelAnimationFrame(rafId);
      };
    });

    // outer cleanup
    return () => {
      disposed = true;
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} className="collage-canvas" />;
}
