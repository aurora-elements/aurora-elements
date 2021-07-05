import { LitElement, css, html } from "lit";
import { customElement, property } from 'lit/decorators.js';

@customElement('ae-loader')
export class AeLoader extends LitElement {
      /* Properties */
    @property({attribute: 'part-loader-svg-selector'})
    partLoaderSvgSelector?: string; 
    
    /* Styles - LitElement */
    static get styles() {
        return css`
            :host {
                contain: content;
                display: block;
            }
            svg {
                width:100px;
                display: block;
            }
            svg circle {
                fill: var(--loader-svg--fill, var(--ae--accentColor, #888888));
            }
        `;
    }

    /* Render template */
    render() {
        return html`
            <svg
                version="1.1"
                x="0px"
                y="0px"
                part="${this.partLoaderSvgSelector?
                    this.partLoaderSvgSelector: 'loader-svg'}"
                viewBox="0 0 100 20"
                enable-background="new 0 0 0 0"
                xml:space="preserve">

                <circle stroke="none" cx="30" cy="10" r="6">
                    <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.1"/>
                </circle>

                <circle stroke="none" cx="50" cy="10" r="6">
                    <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.2"/>
                </circle>

                <circle stroke="none" cx="70" cy="10" r="6">
                    <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.3"/>
                </circle>
            </svg>           
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-loader': AeLoader;
    }
}
