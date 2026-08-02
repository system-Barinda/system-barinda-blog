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

    // High-contrast vibrant colors that stand out against dark charcoal
    const colors = [
      "#00FF66", // Glowing Green
      "#00E5FF", // Cyan
      "#FFD700", // Yellow
      "#FF007F", // Neon Pink
      "#38EF7D", // Light Emerald
      "#FF6600", // Bright Orange
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

      // 1. Light background ambient dot grid across whole screen
      const gridSpacing = 32;
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

      // 2. Off-screen sampling canvas for crisp text
      const textCanvas = document.createElement("canvas");
      textCanvas.width = width;
      textCanvas.height = height;
      const textCtx = textCanvas.getContext("2d");

      if (textCtx) {
        // Dynamic font sizing tuned for sharp legibility
        const fontSize = Math.min(Math.max(width * 0.132, 70), 68);
        textCtx.font = `900 ${fontSize}px "Courier New", monospace, sans-serif`;
        textCtx.fillStyle = "#ffffff";
        textCtx.textAlign = "center";
        textCtx.textBaseline = "middle";

        // Position Y center inside the header card box (~105px down)
        const nameY = 105;
        textCtx.fillText("SYSTEM SYLVERE BARINDA", width / 2, nameY);

        const imgData = textCtx.getImageData(0, 0, width, height).data;

        // Sampling step size tuned to grid dots (4px for crisp letter matrix)
        const sampleStep = 4;

        for (let y = 0; y < height; y += sampleStep) {
          for (let x = 0; x < width; x += sampleStep) {
            const index = (Math.floor(y) * width + Math.floor(x)) * 4;
            // High alpha threshold ensures clean sharp letter edges without fuzz
            if (imgData[index + 3] > 180) {
              const color = colors[Math.floor(Math.random() * colors.length)];
              dots.push({
                x,
                y,
                baseX: x,
                baseY: y,
                size: 2.5,
                color,
                alpha: 1,
                isName: true,
              });
            }
          }
        }
      }

      // 3. GSAP Animations for glowing name dots
      dots.forEach((dot) => {
        if (dot.isName) {
          gsap.to(dot, {
            size: 3.5,
            alpha: 0.85,
            duration: 0.8 + Math.random() * 1.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.easeInOut",
            delay: Math.random() * 1,
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
          ctx.shadowBlur = 4;
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
        className="absolute inset-0 block h-full w-full z-20"
      />
    </div>
  );
}
