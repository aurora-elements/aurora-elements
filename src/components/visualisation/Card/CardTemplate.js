import { html, nothing } from "lit-element";
import { until } from 'lit-html/directives/until';
import { repeat } from 'lit-html/directives/repeat.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

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