import { html } from "lit";

export function template(data) {
    return html`
        <figure .hidden=${!data.image}>
            <slot name="image">
                <img src="${data.image}" />
            </slot>
        </figure>
        <header .hidden=${!data.label}>
            <h3 part="label">${data.label}</h3>
        </header>
    `;
}