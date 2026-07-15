import { useEffect, useRef } from 'react'

// IntersectionObserver-driven reveal. Adds .in when the element enters view.
// Honors prefers-reduced-motion (elements start visible, no transition).
export function useReveal(options = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('in')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: options.threshold ?? 0.18, rootMargin: options.rootMargin ?? '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [options.threshold, options.rootMargin])
  return ref
}

// Lightweight parallax: translateY proportional to scroll position past the element.
export function useParallax(strength = 0.12) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const center = rect.top + rect.height / 2 - window.innerHeight / 2
        el.style.setProperty('--py', `${(-center * strength).toFixed(1)}px`)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [strength])
  return ref
}
