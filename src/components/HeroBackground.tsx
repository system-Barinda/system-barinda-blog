import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface HeroBackgroundProps {
  cardRef: React.RefObject<HTMLDivElement | null>
}

export default function HeroBackground({ cardRef }: HeroBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width =
      canvas.parentElement?.clientWidth || window.innerWidth)
    let height = (canvas.height =
      canvas.parentElement?.clientHeight || window.innerHeight)

    // Modern neon glowing palette
    const colors = [
      '#00FF66', // Glowing Green
      '#00E5FF', // Cyan
      '#FFD700', // Gold
      '#FF007F', // Neon Pink
      '#38EF7D', // Emerald
      '#FF6600', // Vivid Orange
    ]

    interface Dot {
      x: number
      y: number
      baseX: number
      baseY: number
      size: number
      color: string
      alpha: number
      isName: boolean
    }

    let dots: Dot[] = []

    const initCanvas = () => {
      dots = []

      // 1. Subtle background grid
      const gridSpacing = 32
      for (let y = gridSpacing; y < height; y += gridSpacing) {
        for (let x = gridSpacing; x < width; x += gridSpacing) {
          dots.push({
            x,
            y,
            baseX: x,
            baseY: y,
            size: 2,
            color: '#ffffff',
            alpha: 0.12,
            isName: false,
          })
        }
      }

      // 2. Determine target position from Card element bounding box
      let targetCenterX = width / 2
      let targetCenterY = 110
      let cardWidth = Math.min(width * 0.9, 850)

      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        const parentRect = canvas.getBoundingClientRect()
        targetCenterX = rect.left - parentRect.left + rect.width / 2
        targetCenterY = rect.top - parentRect.top + rect.height / 2
        cardWidth = rect.width
      }

      // 3. Off-screen canvas text sampling
      const textCanvas = document.createElement('canvas')
      textCanvas.width = width
      textCanvas.height = height
      const textCtx = textCanvas.getContext('2d')

      if (textCtx) {
        // Precise responsive font sizing to fit inside the card container with margin
        const fontSize = Math.min(Math.max(cardWidth * 0.038, 50), 60)
        textCtx.font = `900 ${fontSize}px "Courier New", monospace, sans-serif`
        textCtx.fillStyle = '#ffffff'
        textCtx.textAlign = 'center'
        textCtx.textBaseline = 'middle'

        textCtx.fillText('SYSTEM SYLVERE BARINDA', targetCenterX, targetCenterY)

        const imgData = textCtx.getImageData(0, 0, width, height).data

        // Density sampling step
        const sampleStep = 4

        for (let y = 0; y < height; y += sampleStep) {
          for (let x = 0; x < width; x += sampleStep) {
            const index = (Math.floor(y) * width + Math.floor(x)) * 4
            if (imgData[index + 3] > 170) {
              const color = colors[Math.floor(Math.random() * colors.length)]
              dots.push({
                x,
                y,
                baseX: x,
                baseY: y,
                size: 2.2,
                color,
                alpha: 1,
                isName: true,
              })
            }
          }
        }
      }

      // 4. Smooth GSAP pulsing animation for name particles
      dots.forEach((dot) => {
        if (dot.isName) {
          gsap.to(dot, {
            size: 3.2,
            alpha: 0.85,
            duration: 0.8 + Math.random() * 1.2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.easeInOut',
            delay: Math.random() * 1,
          })
        }
      })
    }

    const handleResize = () => {
      width = canvas.width =
        canvas.parentElement?.clientWidth || window.innerWidth
      height = canvas.height =
        canvas.parentElement?.clientHeight || window.innerHeight
      initCanvas()
    }

    window.addEventListener('resize', handleResize)
    // Slight delay ensures the DOM container dimensions are painted before canvas samples
    const timeoutId = setTimeout(initCanvas, 50)

    // 5. Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height)

      dots.forEach((dot) => {
        ctx.save()
        ctx.globalAlpha = dot.alpha
        ctx.fillStyle = dot.color

        if (dot.isName) {
          ctx.shadowBlur = 5
          ctx.shadowColor = dot.color
        }

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timeoutId)
      cancelAnimationFrame(animationFrameId)
    }
  }, [cardRef])

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
  )
}
