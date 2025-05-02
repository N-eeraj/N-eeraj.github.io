"use client"

import {
  useRef,
  useEffect,
} from "react"

import {
  FONT_SIZE,
  FONT_COLOR,
  BACKGROUND_COLOR,
  MATRIX_CHARACTERS,
  ANIMATION_INTERVAL,
  SPLASH_SCREEN_DURATION,
} from "./constants"

const drops: Array<number> = []

function drawRain(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  // draw translucent background, results in fading of characters
  ctx.fillStyle = BACKGROUND_COLOR
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  for (let column = 0; column < drops.length; column++) {
    // draw random character
    ctx.fillStyle = FONT_COLOR
    const randomCharacter = MATRIX_CHARACTERS[Math.floor(Math.random() * MATRIX_CHARACTERS.length)]
    ctx.fillText(randomCharacter, column * FONT_SIZE, drops[column] * FONT_SIZE)

    // update column-wise drop position
    drops[column]++
    if (drops[column] * FONT_SIZE > canvas.height && Math.random() > 0.95) {
      drops[column] = 0
    }
  }
}

function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const animateCanvas = () => {
    let interval: number, timeOut: number

    if (canvasRef.current) {
      // change from splash-screen to background
      timeOut = window.setTimeout(
        () => canvasRef.current && canvasRef.current.classList.replace("z-10", "-z-10"),
        SPLASH_SCREEN_DURATION
      )

      // configure canvas
      const ctx = canvasRef.current.getContext("2d")
      canvasRef.current.width = canvasRef.current.clientWidth
      canvasRef.current.height = canvasRef.current.clientHeight

      // calculate column count & set drop array
      const columns = Math.floor(canvasRef.current.width / FONT_SIZE)
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.ceil(canvasRef.current.height / FONT_SIZE) + 1
      }

      if (ctx) {
        // looping the animation
        interval = window.setInterval(
          () => canvasRef.current && drawRain(ctx, canvasRef.current),
          ANIMATION_INTERVAL
        )
      }
    }

    return () => {
      clearTimeout(timeOut)
      clearInterval(interval)
    }
  }

  useEffect(animateCanvas, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full bg-black z-10" />
  )
}

export default MatrixBackground
