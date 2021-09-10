
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
    }
    ae-p2f-grid {
        margin-top:20px;
    }
    ae-p2f-kiosk-filterbar {
        margin-top:15px;
    }
`;

@customElement('ae-p2f-kiosk-contentview')
export class P2fKioskContentview extends LitElement {

    @property({attribute: false})
    data: any;

    @property({type: String, attribute: false})
    categoryName: string;

    @property({type: Number, attribute: false})
    categoryId: number;

    @property()
    searchString: string;

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

    }


    render() {
        /*  let filterByStatusOrCategory =  `${this.status === 'all' && this.category === 'all' ? '' : 'where'}`;
          let filterByStatus =            `${this.status != 'all' ? "%7Bitems publishedstate eq '" + this.status + "'%7D" : ""}`;
          let filterByStatusAndCategory = `${this.status != 'all' && this.category != 'all' ? 'and' : ''}`;
          let filterByCategory =          `${this.category != 'all' ? " %7Bproperty 'category' eq '" + this.category + "'%7D" : ""}`; 
          let orderBy =                   `orderby %7Bcreated ${this.sorting}%7D`;  
          */ 
         
              /*   ${filterByStatusOrCategory} 
            ${filterByStatus} 
            ${filterByStatusAndCategory}
            ${filterByCategory}
            ${orderBy}*/

        let selectItem =                `at '${this.data.key}' select item from 'p2fDocumentItem' `;
        let filterByCategory =          `%7Bproperty 'category' eq '${this.categoryId}'%7D`;
        let filterBySearchString =      `and %7Bproperty 'name' contains '${this.searchString}'%7D`;   

        let spoqlQuery = `
            ${selectItem}
            ${this.categoryId != undefined ? ' where ' : ''} 
            ${filterByCategory}
            ${this.searchString != undefined ? filterBySearchString : ''} 
        `;

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
                    spoql-query="${spoqlQuery}"
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