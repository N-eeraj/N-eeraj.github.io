import RandomList from "@n-eeraj/random/RandomList"
import RandomNumber from "@n-eeraj/random/RandomNumber"

import {
  FONT_SIZE,
  FONT_COLOR,
  BACKGROUND_COLOR,
  MATRIX_CHARACTERS,
  ANIMATION_INTERVAL,
  SPLASH_SCREEN_DURATION,
} from "./constants"

export default class MatrixRainAnimation {
  private drops: Array<number> = []
  private ctx: CanvasRenderingContext2D | null

  constructor(private canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext("2d")
  }

  private drawNextFrame() {
    // skip drawing if context is not found
    if (!this.ctx) return

    // draw translucent background, results in fading of characters
    this.ctx.fillStyle = BACKGROUND_COLOR
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
  
    for (let column = 0; column < this.drops.length; column++) {
      // draw random character
      this.ctx.fillStyle = FONT_COLOR
      const randomCharacter = RandomList.choice(MATRIX_CHARACTERS)
      this.ctx.fillText(randomCharacter, column * FONT_SIZE, this.drops[column] * FONT_SIZE)
  
      // update column-wise drop position
      this.drops[column]++
      if (this.drops[column] * FONT_SIZE > this.canvas.height && RandomNumber.float() > 0.95) {
        this.drops[column] = 0
      }
    }
  }

  animateCanvas() {
    // change from splash-screen to background
    const timeOut = window.setTimeout(
      () => this.canvas && this.canvas.classList.replace("z-10", "-z-10"),
      SPLASH_SCREEN_DURATION
    )

    this.canvas.width = this.canvas.clientWidth
    this.canvas.height = this.canvas.clientHeight

    // calculate column count & set drop array
    const columns = Math.floor(this.canvas.width / FONT_SIZE)
    for (let i = 0; i < columns; i++) {
      this.drops[i] = Math.ceil(this.canvas.height / FONT_SIZE) + 1
    }

    // looping the animation
    const interval = window.setInterval(
      () => this.canvas && this.drawNextFrame(),
      ANIMATION_INTERVAL
    )

    return () => {
      clearTimeout(timeOut)
      clearInterval(interval)
    }
  }
}
