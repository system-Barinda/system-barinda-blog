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

    // Neon colors that pop sharply against a dark container backdrop
    const colors = [
      "#00FF88", // Bright Neon Green
      "#00E5FF", // Vibrant Cyan
      "#FFDF00", // Yellow
      "#FF2A85", // Neon Pink
      "#38EF7D", // Emerald Tint
      "#FF7700", // Orange Accent
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

      // 1. Ambient Background Grid
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
            alpha: 0.15,
            isName: false,
          });
        }
      }

      // 2. Off-screen Sampling Canvas for Text
      const textCanvas = document.createElement("canvas");
      textCanvas.width = width;
      textCanvas.height = height;
      const textCtx = textCanvas.getContext("2d");

      if (textCtx) {
        // Font scaling specifically designed to fit nicely across screens
        const fontSize = Math.min(Math.max(width * 0.038, 22), 46);
        textCtx.font = `900 ${fontSize}px sans-serif`;
        textCtx.fillStyle = "#ffffff";
        textCtx.textAlign = "center";
        textCtx.textBaseline = "middle";

        // Position text centered inside the top backdrop frame area (at ~90px down)
        const nameY = 95;
        textCtx.fillText("SYSTEM SYLVERE BARINDA", width / 2, nameY);

        const imgData = textCtx.getImageData(0, 0, width, height).data;

        // Tighter step density (5px) for clear letter definition
        const sampleStep = 5;

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
                size: 2.6,
                color,
                alpha: 0.95,
                isName: true,
              });
            }
          }
        }
      }

      // 3. GSAP Animations
      dots.forEach((dot) => {
        if (dot.isName) {
          gsap.to(dot, {
            size: 3.6,
            alpha: 1,
            duration: 1.2 + Math.random() * 1.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.easeInOut",
            delay: Math.random() * 1.5,
          });

          gsap.to(dot, {
            y: dot.baseY + (Math.random() * 3 - 1.5),
            x: dot.baseX + (Math.random() * 2 - 1),
            duration: 2 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.easeInOut",
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
          ctx.shadowBlur = 6;
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
      {/* Background ambient glowing blurs */}
      <div className="absolute left-1/3 top-5 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute right-1/4 top-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-[120px]" />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 block h-full w-full"
      />
    </div>
  );
}
