
import "../../../../modules/p2f/grid/p2f.grid.module";import "../../../../elements/loader.element";
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

const styles = css`
    :host {
        width:100%;
        margin:0 auto;
        visibility: hidden;
        position: absolute;
        display: none;
    }
    .grid-container {
        grid-template-columns: repeat(auto-fill,minmax(400px,1fr));
        grid-gap: calc(var(--ae-p2f-kiosk--padding-horizontal, 2.084vw) / 2);
        grid-template-rows: max-content;       
        display: grid;
        padding: var(--ae-p2f-kiosk--padding-horizontal, 2.084vw);
    }
`;

@customElement('ae-p2f-kiosk-contentview')
export class P2fKioskContentview extends LitElement {

    @property({attribute: false})
    data: any;

    static get styles() {
        return [styles];
    }


    render() {
        return html`
        <header>
            <h1>
              name der kategorie
            </h1>
          </header>
          <ae-p2f-grid
            modus-viewer
            space-key=${this.data.key}
            size="${this.data.size}"
            url-base="${this.data.url}">
          </ae-p2f-grid>
            `    
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-p2f-kiosk-contentview': P2fKioskContentview;
    }
}