import './styles/main.css'
import { initClock } from './clock.js'
import { initCursor } from './cursor.js'
import { initSmoothScroll } from './smoothScroll.js'
import { initEmailLink } from './email.js'
import { initStack } from './stack.js'

initSmoothScroll()
initClock()
initCursor()
initEmailLink()
initStack()

document.getElementById('copyright').innerHTML = "© " + new Date().getFullYear() + " wirenux"