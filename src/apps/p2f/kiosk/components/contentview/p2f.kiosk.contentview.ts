import { html, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { styles } from "./p2f.kiosk.contentview.styles";
import { contentviewTemplate } from "./p2f.kiosk.contentview.template";

@customElement('ae-p2f-kiosk-contentview')
export class P2fKioskContentview extends LitElement {

/* Properties */    
    @property({attribute: false})
    data: any;

    @property({type: String, attribute: false})
    categoryName: string;

    @property({type: Number, attribute: false})
    categoryId: number;

    @property()
    searchString: string;

    @property({type: Number})
    numberOfDocumentsInCategory: number;

/* Queries */    
    @query('ae-p2f-kiosk-categories')
    categoryTree: any;

    @query('ae-p2f-kiosk-breadcrumb')
    breadcrumb: any;

    @query('ae-p2f-kiosk-filterbar')
    filterbar: HTMLElement;

/* Init */
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
            this.categoryId = e.detail.id;
        });

        document.addEventListener('ae-*:p2f-kiosk-grid|push', (e:CustomEvent) => {
            this.categoryName = e.detail.name;
            this.categoryId = e.detail.id;
        });

        document.addEventListener('ae-*:p2f-kiosk-grid|change', (e:CustomEvent) => {
            this.categoryName = e.detail.name;
            this.categoryId = e.detail.id;
        });

        document.addEventListener('ae-p2f-grid:*|number-of-documents', (e:CustomEvent) => {
            this.numberOfDocumentsInCategory = e.detail.numberOfDocuments;
        })

    }

/* CSS */
    static get styles() { return [styles]; }    
/* Template */
    render() { return html`${contentviewTemplate(this)}` }
}

/* Declaration */
declare global {
    interface HTMLElementTagNameMap {
        'ae-p2f-kiosk-contentview': P2fKioskContentview;
    }
}