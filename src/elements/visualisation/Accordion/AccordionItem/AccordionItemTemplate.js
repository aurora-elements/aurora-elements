import { html } from "lit-element";

export function template(data) {
    return html`
        <header
            id="button-${data.convertLabel(data.label)}"
            tabindex="-1"
            @click=${data.toggle}>
            <h3>${data.label}</h3>
            <svg 
                style="width:24px;height:24px" 
                viewBox="0 0 24 24">
                <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
            </svg>
        </header>
        <div
            id="item-${data.convertLabel(data.label)}"
            class="content ${!data.expanded ? '' : 'open'}">
            <slot></slot>
        </div>
    `
}
