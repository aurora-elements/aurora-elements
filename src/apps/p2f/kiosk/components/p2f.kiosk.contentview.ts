
import "./p2f.kiosk.categories";import "./p2f.kiosk.filterbar";
import "./p2f.kiosk.breadcrumb";
import "../../../../modules/p2f/grid/p2f.grid.module";
import "../../../../elements/loader.element";
import { css, html, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";

const styles = css`
    :host {
        width:100%;
        margin:0 auto;
        visibility: hidden;
        position: absolute;
        display: none;
    }
    .grid {
        padding-bottom: var(--ae-p2f-kiosk--padding-horizontal, 2.084vw);
    }
    ae-p2f-kiosk-filterbar, ae-p2f-grid {
        float:left; 
        width:100%;
        margin-top:10px;
    }
    ae-p2f-kiosk-filterbar {display: none;}
`;

@customElement('ae-p2f-kiosk-contentview')
export class P2fKioskContentview extends LitElement {

    @property({attribute: false})
    data: any;

    @property({type: String, attribute: false})
    categoryName: string;

    @query('ae-p2f-kiosk-categories')
    categoryTree: any;

    @query('ae-p2f-kiosk-breadcrumb')
    breadcrumb: any;

    static get styles() {
        return [styles];
    }

    firstUpdated() {
        let obj = {
            url: this.data.url,
            key: this.data.key,
            size: this.data.size,
            categoryItems: this.data.categoryItems
        };
        this.categoryTree.data = obj;
        this.breadcrumb.data = obj;

        document.addEventListener('ae-*:p2f-kiosk-contentview|show', (e:CustomEvent) => {
            this.categoryName = e.detail.name;
        });

    }


    render() {
        return html`
        <header>
            <div class="container" part="container">
                <ae-p2f-kiosk-breadcrumb category-selected="${this.categoryName}"></ae-p2f-kiosk-breadcrumb>
                <ae-p2f-kiosk-categories></ae-p2f-kiosk-categories>
            </div>
        </header>
        <div class="container grid" part="container">
            <ae-p2f-kiosk-filterbar></ae-p2f-kiosk-filterbar>
            <ae-p2f-grid
                modus-viewer
                space-key=${this.data.key}
                size="${this.data.size}"
                url-base="${this.data.url}">
            </ae-p2f-grid>
        </div>
            `    
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-p2f-kiosk-contentview': P2fKioskContentview;
    }
}