import './styles/main.css'
import { initClock } from './clock.js'

initClock()

document.getElementById('copyright').innerHTML = "© " + new Date().getFullYear() + " wirenux"