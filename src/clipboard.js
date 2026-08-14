export function initClipboard() {
    const copyBtn = document.querySelector('[data-action="copy-text"]')
    const shareBtn = document.querySelector('[data-action="share-link"]')
    const mainText = document.querySelector('[data-main-text]')

    copyBtn?.addEventListener('click', async () => {
        if (!mainText) {
            return
        }

        try {
            await navigator.clipboard.writeText(mainText.innerText.trim())
            copyBtn.setAttribute('data-tooltip', 'Copied !')
            setTimeout(() => copyBtn.setAttribute('data-tooltip', 'Copy main text'), 1500)
        } catch (err) {
            console.error('Copy failed: ', err)
        }
    })

    shareBtn?.addEventListener('click', async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'wirenux',
                    url: window.location.href,
                })
            } else {
                await navigator.clipboard.writeText(window.location.href) // ← fixed
                shareBtn.setAttribute('data-tooltip', 'Link copied!')
                setTimeout(() => shareBtn.setAttribute('data-tooltip', 'Share link'), 1500)
            }
        } catch (err) {
            if (err.name !== 'AbortError') {
                console.error('Share failed:', err)
            }
        }
    })
}