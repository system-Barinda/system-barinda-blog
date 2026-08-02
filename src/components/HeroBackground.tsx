import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width =
      canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height =
      canvas.parentElement?.clientHeight || window.innerHeight);

    const colors = [
      "#00FF66", // Glowing Green
      "#00E5FF", // Cyan
      "#FFD700", // Bright Yellow
      "#FF007F", // Neon Pink
      "#FFFFFF", // Pure White
      "#FF6600", // Vivid Orange
    ];

    interface Dot {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      color: string;
      alpha: number;
      isName: boolean;
    }

    let dots: Dot[] = [];

    const initCanvas = () => {
      dots = [];

      // 1. Draw static background dot grid
      const gridSpacing = 28;
      for (let y = gridSpacing; y < height; y += gridSpacing) {
        for (let x = gridSpacing; x < width; x += gridSpacing) {
          dots.push({
            x,
            y,
            baseX: x,
            baseY: y,
            size: 2,
            color: "#ffffff",
            alpha: 0.18,
            isName: false,
          });
        }
      }

      // 2. Sample pixel positions for the name
      const textCanvas = document.createElement("canvas");
      textCanvas.width = width;
      textCanvas.height = height;
      const textCtx = textCanvas.getContext("2d");

      if (textCtx) {
        // High resolution sizing relative to viewport width
        const fontSize = Math.min(Math.max(width * 0.045, 24), 54);
        textCtx.font = `900 ${fontSize}px sans-serif`;
        textCtx.fillStyle = "#ffffff";
        textCtx.textAlign = "center";
        textCtx.textBaseline = "middle";

        // Position name near the top clear area (12% of hero height)
        const nameY = height * 0.12;
        textCtx.fillText("SYSTEM SYLVERE BARINDA", width / 2, nameY);

        const imgData = textCtx.getImageData(0, 0, width, height).data;

        // Fine pixel sampling for sharp letter outlines
        const sampleStep = width < 768 ? 6 : 8;

        for (let y = 0; y < height; y += sampleStep) {
          for (let x = 0; x < width; x += sampleStep) {
            const index = (Math.floor(y) * width + Math.floor(x)) * 4;
            if (imgData[index + 3] > 128) {
              const color = colors[Math.floor(Math.random() * colors.length)];
              dots.push({
                x,
                y,
                baseX: x,
                baseY: y,
                size: 2.8,
                color,
                alpha: 0.95,
                isName: true,
              });
            }
          }
        }
      }

      // 3. Apply GSAP animations to name particles
      dots.forEach((dot) => {
        if (dot.isName) {
          gsap.to(dot, {
            size: 4,
            alpha: 1,
            duration: 1 + Math.random() * 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.easeInOut",
            delay: Math.random() * 1.5,
          });

          gsap.to(dot, {
            y: dot.baseY + (Math.random() * 4 - 2),
            x: dot.baseX + (Math.random() * 2 - 1),
            duration: 2 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.easeInOut",
          });
        } else {
          // Subtle pulse for standard background grid
          gsap.to(dot, {
            alpha: 0.08 + Math.random() * 0.2,
            duration: 3 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.easeInOut",
            delay: Math.random() * 3,
          });
        }
      });
    };

    const handleResize = () => {
      width = canvas.width =
        canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height =
        canvas.parentElement?.clientHeight || window.innerHeight;
      initCanvas();
    };

    window.addEventListener("resize", handleResize);
    initCanvas();

    // 4. Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      dots.forEach((dot) => {
        ctx.save();
        ctx.globalAlpha = dot.alpha;
        ctx.fillStyle = dot.color;

        if (dot.isName) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = dot.color;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Soft background ambient blurs */}
      <div className="absolute left-1/3 top-5 h-72 w-72 rounded-full bg-blue-400/20 blur-[120px]" />
      <div className="absolute right-1/4 top-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-[120px]" />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 block h-full w-full"
      />
    </div>
  );
}
