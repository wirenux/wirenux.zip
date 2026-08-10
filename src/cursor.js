import gsap from 'gsap'

export function initCursor() {
  const cursor = document.createElement('div')
  cursor.classList.add('custom-cursor')
  document.body.appendChild(cursor)

  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

  window.addEventListener('mousemove', (e) => {
    pos.x = e.clientX
    pos.y = e.clientY
  })

  gsap.ticker.add(() => {
    gsap.set(cursor, { x: pos.x, y: pos.y })
  })

  window.addEventListener('mousedown', () => cursor.classList.add('is-clicking'))
  window.addEventListener('mouseup', () => cursor.classList.remove('is-clicking'))

  const textEls = document.querySelectorAll('p, h1, h2, h3, span, a')
  textEls.forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('is-text'))
    el.addEventListener('mouseleave', () => cursor.classList.remove('is-text'))
  })
}