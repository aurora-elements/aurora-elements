import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

const styles = css`
    :host {
        background-color: var(--ae-p2f-kiosk-header--bg, #fff);
        width:100%;
        display:block;
        box-sizing: border-box;
    }
    .container {
        margin:0 auto;
        max-width: var(--ae-p2f-kiosk-container--width, 1400px);
        display:grid;
        grid-template-columns: auto 1fr 200px;
        grid-gap: calc(var(--ae-p2f-kiosk--padding-horizontal, 2.084vw) / 2);
        height:100%;
        box-sizing: border-box;
    }
    img {
        max-height: 65px;
        height: 100%;
        align-self: center;
        justify-self: start;
    }
    .link-favorites {
        transition: color 300ms linear 0s;
        align-self: center;
        justify-self: end; 
        color: var(--ae-p2f-kiosk-header-link--color,#9facb6);       
    }
    .link-favorites:hover {
        color: var(--ae-p2f-kiosk-header-link--color-hover, var(--ae-p2f-kiosk--accent-color-dark, #9ac31c));
    }
    .link-favorites span {
        display: block;
        float: left;
        padding-right: 5px;
        text-transform: uppercase;
        font-weight: 700;
        font-size: .8rem;
        line-height: 190%;
        padding-top:2px;
    }
    .link-favorites svg {
        width:20px;
        height:20px;
        padding-top:2px;
    }
    ::slotted(*) {
        align-self: center;
    }
    slot[name=header-extended-content] {
        overflow: hidden;
        display: grid;
        align-content: center;
    }
`;

@customElement('ae-p2f-kiosk-header')
export class P2fKioskHeader extends LitElement {

    @property({type: String, attribute:'url'})
    urlBase: string = "";
  
    @property({type: String, attribute: 'key'})
    spaceKey: string = "";

    static get styles() {
        return [styles];
    }
    render() {
        return html`
            <div 
                class="container" 
                part="container">
                <img src="${this.urlBase}/api/scope/${this.spaceKey}/asset/1194/thumbnail?height=130" />

                <slot name="header-extended-content"></slot>

                <a 
                    href="#" 
                    class="link-favorites" 
                    part="ae-header-link-favorites">
                    <span>Meine Favoriten</span>
                    <slot name="header-icon-favorites">
                        <svg 
                            style="width:24px;height:24px" 
                            viewBox="0 0 24 24">
                            <path 
                                fill="currentColor" 
                                d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                        </svg>
                    </slot>
                </a>
            </div>            
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-p2f-kiosk-header': P2fKioskHeader;
    }
}