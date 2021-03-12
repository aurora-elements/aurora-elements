import { html } from "lit-element";

export function template(data) {
    return html`
        <p class="language">${data.label}</p>
        <div class="code-wrapper">
            <pre><code id="code"><slot> </slot></code></pre>
            <button id="copyButton">Copy</button>
        </div>
        <span id="copy-success">Code copied! :)</span>
    `
}