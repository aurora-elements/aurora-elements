import { html } from "lit";

export function template() {
    return html`
        <slot name="ae-scroll-top--icon">
            <svg 
                part="ae-scroll-top--icon" 
                viewBox="0 0 24 24">
                <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
            </svg>
        </slot>
    `;
}
