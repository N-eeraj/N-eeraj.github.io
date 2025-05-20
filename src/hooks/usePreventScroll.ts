import { useEffect } from "react"

function preventDefault(event: Event) {
  event.preventDefault()
}

function preventDefaultKey(event: KeyboardEvent) {
  if (event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "Space") {
    event.preventDefault()
  }
}

export default function usePreventScroll() {
  useEffect(() => {
    window.addEventListener("wheel", preventDefault, { passive: false })
    window.addEventListener("touchmove", preventDefault, { passive: false })
    window.addEventListener("keydown", preventDefaultKey, { passive: false })
  
    return () => {
      window.removeEventListener("wheel", preventDefault)
      window.removeEventListener("touchmove", preventDefault)
      window.removeEventListener("keydown", preventDefaultKey)
    }
  }, [])
}
