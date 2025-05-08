"use client"

import {
  useRef,
  useEffect,
} from "react"

import MatrixRainAnimation from "./MatrixRainAnimation"

function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const matrixRainAnimation = new MatrixRainAnimation(canvasRef.current)
      return matrixRainAnimation.animateCanvas()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full bg-black z-10" />
  )
}

export default MatrixBackground
