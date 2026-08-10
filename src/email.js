export function initEmailLink() {
  const link = document.querySelector('[data-email-link]')
  if (!link) return

  const user = 'louis'
  const domain = 'lesniak.fr'
  link.href = `mailto:${user}@${domain}`
}