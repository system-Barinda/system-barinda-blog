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

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width =
        canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height =
        canvas.parentElement?.clientHeight || window.innerHeight;
      initGrid();
    };

    window.addEventListener("resize", handleResize);

    // Color palette for dots inspired by your screenshot gradient
    const colors = [
      "#00FF66", // Glowing Green
      "#00E5FF", // Cyan
      "#FFD700", // Bright Yellow
      "#FF007F", // Neon Pink
      "#4285F4", // Electric Blue
      "#FF6600", // Accent Orange
    ];

    interface Dot {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      baseSize: number;
      color: string;
      alpha: number;
      isName: boolean;
    }

    let dots: Dot[] = [];

    const initGrid = () => {
      dots = [];
      const spacing = 32; // Distance between grid dots

      // 1. Off-screen canvas to sample text pixel positions
      const textCanvas = document.createElement("canvas");
      textCanvas.width = width;
      textCanvas.height = height;
      const textCtx = textCanvas.getContext("2d");

      if (textCtx) {
        textCtx.fillStyle = "#ffffff";
        // Dynamic font size responsive to screen width
        const fontSize = Math.min(width * 0.055, 64);
        textCtx.font = `900 ${fontSize}px sans-serif`;
        textCtx.textAlign = "center";
        textCtx.textBaseline = "middle";

        // Draw name in upper center of hero area
        const nameY = height * 0.28;
        textCtx.fillText("SYSTEM SYLVERE BARINDA", width / 2, nameY);

        const imgData = textCtx.getImageData(0, 0, width, height).data;

        // 2. Generate Grid of Dots
        for (let y = spacing; y < height; y += spacing) {
          for (let x = spacing; x < width; x += spacing) {
            // Check if this grid coordinate lands on the rendered text
            const pixelIndex = (Math.floor(y) * width + Math.floor(x)) * 4;
            const isTextPixel = imgData[pixelIndex + 3] > 128; // Alpha threshold

            const color = colors[Math.floor(Math.random() * colors.length)];

            dots.push({
              x,
              y,
              baseX: x,
              baseY: y,
              size: isTextPixel ? 5.5 : 3.5,
              baseSize: isTextPixel ? 5.5 : 3.5,
              color: isTextPixel ? color : "#8ab4f8",
              alpha: isTextPixel ? 0.95 : 0.35,
              isName: isTextPixel,
            });
          }
        }
      }

      // 3. GSAP Animations for Name Dots vs Grid Dots
      dots.forEach((dot) => {
        if (dot.isName) {
          // Floating & scaling pulse for text dots
          gsap.to(dot, {
            size: dot.baseSize + Math.random() * 2.5,
            alpha: 1,
            duration: 1.5 + Math.random() * 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.easeInOut",
            delay: Math.random() * 2,
          });

          // Slight floating movement
          gsap.to(dot, {
            y: dot.baseY + (Math.random() * 6 - 3),
            x: dot.baseX + (Math.random() * 4 - 2),
            duration: 2 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.easeInOut",
          });
        } else {
          // Subtle ambient pulse for outer grid dots
          gsap.to(dot, {
            alpha: 0.15 + Math.random() * 0.3,
            duration: 2 + Math.random() * 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.easeInOut",
            delay: Math.random() * 3,
          });
        }
      });
    };

    initGrid();

    // 4. Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      dots.forEach((dot) => {
        ctx.save();
        ctx.globalAlpha = dot.alpha;
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();

        // Extra glow effect for dots forming the name
        if (dot.isName) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = dot.color;
          ctx.fill();
        }
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
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background ambient glowing blurs */}
      <div className="absolute left-1/4 top-10 h-80 w-80 rounded-full bg-blue-500/20 blur-[130px]" />
      <div className="absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-emerald-400/20 blur-[130px]" />

      {/* GSAP Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block h-full w-full"
      />
    </div>
  );
}
