export function initClock() {
  const el = document.querySelector('[data-clock]')
  if (!el) return

  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Paris',
    hour: '2-digit',
    minute: '2-digit',
  })

  function update() {
    const now = new Date()
    const offset = -now.getTimezoneOffset() / 60
    const gmt = `GMT: ${offset >= 0 ? '+' : ''}${offset}`
    el.textContent = `${formatter.format(now)} (${gmt} / Europe, Paris)`
  }

  update()
  setInterval(update, 30000)
}