import gsap from 'gsap'

const TEXT_SELECTOR = 'p, h1, h2, h3, span:not(.hero-icon)'
const CLICKABLE_SELECTOR = 'a, button, [role="button"], input, textarea, select'

export function initCursor() {
  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  if (!supportsHover) return

  const cursor = document.createElement('div')
  cursor.classList.add('custom-cursor')
  document.body.appendChild(cursor)

  const pos = { x: window.innerWidth / 2 - 12, y: window.innerHeight / 2 - 12 }

  window.addEventListener(
    'mousemove',
    (e) => {
      pos.x = e.clientX
      pos.y = e.clientY

      const target = e.target.closest(`${TEXT_SELECTOR}, ${CLICKABLE_SELECTOR}`)
      cursor.classList.remove('is-text', 'is-clickable')
      if (target?.matches(CLICKABLE_SELECTOR)) {
        cursor.classList.add('is-clickable')
      } else if (target?.matches(TEXT_SELECTOR)) {
        cursor.classList.add('is-text')
      }
    },
    { passive: true }
  )

  gsap.ticker.add(() => {
    gsap.set(cursor, { x: pos.x, y: pos.y })
  })

  window.addEventListener('mousedown', () => cursor.classList.add('is-clicking'))
  window.addEventListener('mouseup', () => cursor.classList.remove('is-clicking'))
}