import { useState, useEffect } from 'react'

export function useWindowSize() {
  const isClient = typeof window === 'object'
  let currentDevice = 'web'

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return false
    }

    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (windowSize.width <= 341) {
    currentDevice = 'mobile'
  }

  if (windowSize.width > 341 && windowSize.width <= 1024) {
    currentDevice = 'tablet'
  }

  return currentDevice
}
