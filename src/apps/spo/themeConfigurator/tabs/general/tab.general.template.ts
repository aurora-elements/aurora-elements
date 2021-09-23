import { html } from "lit";

export function masterTemplate() {
    return html`
        <p>tab general</p>
        <slot></slot>
    `;
}