import { LitElement, html, css } from "lit-element";

export class AuroraLink extends LitElement {

    static get properties() {
        return {
            href: {type: String},
            label: {type: String}
        }
    }
    
    constructor() {
        super();
        this.href = '#';
        this.label = 'Link';
    }

    render() {
        return html`
        <a href="${this.href}">${this.label}</a>
        `;
    }
}

customElements.define('aurora-link', AuroraLink);