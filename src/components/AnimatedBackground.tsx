import { useEffect, useRef } from 'react';

const CHARS = '01{}[]()<>=/\\;:.,!?#$%&*+-|~アイウエオカキクケコサシスセソ'.split('');
const CODE_WORDS = ['var', 'let', 'const', 'async', 'await', 'class', 'void', 'null', 'using', 'return', 'public', 'new', '=>', '!=', '==', '&&', '||', '++'];

// Aurora palette — rgb triplets for head / near / tail glyphs
const PALETTES = [
  { head: [200, 255, 243], near: [62, 230, 196], tail: [25, 170, 145] },  // mint
  { head: [214, 220, 255], near: [139, 156, 255], tail: [80, 95, 210] },  // periwinkle
  { head: [232, 218, 255], near: [177, 140, 255], tail: [120, 80, 210] }, // violet
];

const FONT_SIZE = 14;
const COLS_DENSITY = 0.4;
const FRAME_MS = 1000 / 30; // cap at 30fps — plenty for a background effect

interface Column {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  // fillStyle per glyph index, computed once per column cycle (not per frame)
  styles: string[];
}

const pick = <T,>(arr: readonly T[]) => arr[Math.floor(Math.random() * arr.length)];
const randChar = () => (Math.random() < 0.1 ? pick(CODE_WORDS) : pick(CHARS));
const rgba = ([r, g, b]: number[], a: number) => `rgba(${r},${g},${b},${a.toFixed(3)})`;

const buildStyles = (length: number) => {
  const palette = pick(PALETTES);
  const opacity = 0.08 + Math.random() * 0.14;
  const bright = Math.random() < 0.3;
  return Array.from({ length }, (_, i) => {
    if (i === 0 && bright) return rgba(palette.head, opacity * 3.5);
    if (i < 3) return rgba(palette.near, opacity * (2.2 - i * 0.4));
    return rgba(palette.tail, opacity * (1 - i / length) * 1.1);
  });
};

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let cols: Column[] = [];
    let animId = 0;
    let lastFrame = 0;

    const resetColumn = (col: Column) => {
      col.y = -FONT_SIZE * (2 + Math.random() * 10);
      col.speed = 0.7 + Math.random() * 2;
      for (let i = 0; i < col.chars.length; i++) col.chars[i] = randChar();
      col.styles = buildStyles(col.chars.length);
    };

    const initCols = () => {
      const maxCols = Math.floor(canvas.width / FONT_SIZE);
      const count = Math.floor(maxCols * COLS_DENSITY);
      const positions = Array.from({ length: maxCols }, (_, i) => i)
        .sort(() => Math.random() - 0.5)
        .slice(0, count);

      cols = positions.map(pos => {
        const length = 8 + Math.floor(Math.random() * 18);
        return {
          x: pos * FONT_SIZE,
          y: Math.random() * canvas.height,
          speed: 0.7 + Math.random() * 2,
          chars: Array.from({ length }, randChar),
          styles: buildStyles(length),
        };
      });
    };

    const drawFrame = () => {
      ctx.fillStyle = 'rgba(6, 9, 16, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const col of cols) {
        const { chars, styles } = col;
        for (let i = 0; i < chars.length; i++) {
          const charY = col.y - i * FONT_SIZE;
          if (charY < -FONT_SIZE || charY > canvas.height + FONT_SIZE) continue;
          ctx.fillStyle = styles[i];
          ctx.fillText(chars[i], col.x, charY);
        }

        col.y += col.speed;
        if (Math.random() < 0.06) chars[Math.floor(Math.random() * chars.length)] = randChar();
        if (col.y - chars.length * FONT_SIZE > canvas.height) resetColumn(col);
      }
    };

    const loop = (now: number) => {
      animId = requestAnimationFrame(loop);
      if (now - lastFrame < FRAME_MS) return;
      lastFrame = now;
      drawFrame();
    };

    const start = () => {
      cancelAnimationFrame(animId);
      if (reducedMotion) {
        // Render a single static frame instead of animating
        for (let i = 0; i < 40; i++) drawFrame();
      } else {
        animId = requestAnimationFrame(loop);
      }
    };

    const resize = (force = false) => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (!force && width === canvas.width && height === canvas.height) return;
      canvas.width = width;
      canvas.height = height;
      // Resizing resets the context state, so the font is set here once
      ctx.font = `${FONT_SIZE}px 'JetBrains Mono', monospace`;
      initCols();
      start();
    };

    let resizeTimer = 0;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => resize(), 100);
    };
    // Observe the canvas itself: fires on any viewport size change, including
    // maximize/snap on window managers that don't emit a window resize event.
    const observer = new ResizeObserver(onResize);

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(animId);
      else start();
    };

    // Always initialise on mount: the canvas may already have the right size
    // (e.g. StrictMode remount in dev), but this closure has no columns yet.
    resize(true);
    observer.observe(canvas);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(resizeTimer);
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <>
      {/* Explicit w/h so the canvas always stretches to the viewport, even before its bitmap is resized */}
      <canvas ref={canvasRef} aria-hidden="true" className="fixed inset-0 w-full h-full pointer-events-none z-0" />
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 aurora-glow" />
    </>
  );
};

export default AnimatedBackground;
