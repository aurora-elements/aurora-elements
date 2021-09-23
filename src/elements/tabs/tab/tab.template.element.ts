import { html } from "lit";

export function masterTemplate() {
    return html`
        <p>Tab</p>
        <slot></slot>
    `;
}