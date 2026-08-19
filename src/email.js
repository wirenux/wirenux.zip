export function initEmailLink() {
  const link = document.querySelector('[data-email-link]')
  if (!link) return

  const user = 'contact'
  const domain = 'wirenux.com'
  link.href = `mailto:${user}@${domain}`
}