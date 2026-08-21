import './styles/main.css'
import { inject } from "@vercel/analytics"
import { initClock } from './clock.js'
import { initCursor } from './cursor.js'
import { initSmoothScroll } from './smoothScroll.js'
import { initEmailLink } from './email.js'
import { initStack } from './stack.js'
import { initClipboard } from './clipboard.js'

inject()
initSmoothScroll()
initClock()
initCursor()
initEmailLink()
initStack()
initClipboard()

document.getElementById('copyright').innerHTML = "© " + new Date().getFullYear() + " wirenux"