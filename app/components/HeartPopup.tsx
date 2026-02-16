"use client"

import { useEffect, useState, useRef } from "react"

export default function HeartPopup() {
  const [active, setActive] = useState(false)
  const [animate, setAnimate] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const runAnimation = () => {
      setActive(true)
      setAnimate(false)
  
      // start grow animation
      setTimeout(() => {
        setAnimate(true)
      }, 50)
  
      // hide after 5 seconds
      timeoutRef.current = setTimeout(() => {
        setActive(false)
      }, 5000)
    }
  
    // 🔥 Run immediately on page load
    runAnimation()
  
    // Then repeat every 15 seconds total
    // (5s visible + 10s hidden)
    const interval = setInterval(() => {
      runAnimation()
    }, 15000)
  
    return () => {
      clearInterval(interval)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])
  
  const handleClose = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActive(false)
  }

  return (
    <div
        className={`fixed inset-0 flex items-center justify-center transition-all ${
            active ? "z-[999] opacity-100" : "-z-10 opacity-0 pointer-events-none"
            }`}
            onClick={handleClose}
            >
        <img
            src="/nailong-heart-added-text.gif"
            alt="Heart GIF"
            draggable={false}
            className={`h-auto rounded-xl shadow-lg transition-all duration-[5000ms] ease-out cursor-pointer select-none ${
            animate ? "w-[50%] lg:w-[15%]" : "w-[10%] lg:w-[5%]"
            }`}
        />
    </div>
  )
}
