import { html } from "lit-element";

export function template(data) {
    return html`
        <p class="language">${data.label}</p>
        <div class="code-wrapper"><slot @slotchange="${data.onSlotchange}"></slot><button class="copy-button">Copy</button></div>
        <span class="copy-success">Code was copied!</span>
    `
}