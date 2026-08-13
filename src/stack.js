import { stack } from "./data/stack.js";

export function initStack() {
    const container = document.querySelector('.stack-grid')
    if (!container) {
        return
    }

    container.innerHTML = stack
        .map(
            (column) => `
                <div class="stack-column">
                    ${column
                        .map(
                            (item) => `
                                <div class="stack-item">
                                    <svg class="stack-icon" viewBox="0 0 24 24" style="fill:#${item.colorOverride ?? item.icon.hex}">
                                        <path d="${item.icon.path}"></path>
                                    </svg>
                                    <span>${item.name}</span>
                                </div>
                            `
                        ).join('')}
                </div>
            `
        ).join('')
}