import { html } from "lit";

export function template(data) {
    return html`
        ${data.isSubheadline?
            html`<h3>${data.headline}</h3>`:
            html`<h2>${data.headline}</h2>`
        }
        <p><slot></slot></p>
    `;
}