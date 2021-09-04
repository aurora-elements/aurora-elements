import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

const styles = css`
    :host {
        background-color: #fff;
        width:100%;
        padding:4.315vh 2.084vw;
        display:block;
        box-sizing: border-box;
    }
    .container {
        margin:0 auto;
        max-width: var(--ae-p2f-kiosk-container--width, 1400px);
        display:grid;
        grid-template-columns: auto 1fr 200px;
        grid-gap: 2.084vw;
    }
    img {
        max-height: 80px;
        height: 100%;
        align-self: center;
        justify-self: start;
    }
    .link-favorites {
        align-self: center;
        justify-self: end;
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
            <div class="container" part="container">
                <img src="${this.urlBase}/api/scope/${this.spaceKey}/asset/1194/thumbnail?height=100" />
                <slot name="header-extended-content"></slot>
                <a href="#" class="link-favorites">
                    <span>Meine Favoriten</span>
                    <slot name="header-icon-favorites">

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