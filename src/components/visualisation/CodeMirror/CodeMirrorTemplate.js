import { html } from "lit-element";

export function template(data) {
    return html`
        <p class="language">${data.label}</p>
        <div class="code-wrapper">
            <slot> </slot>
            <button id="copyButton">Copy</button>
        </div>
        <span id="copy-success">Code copied! :)</span>
    `
}