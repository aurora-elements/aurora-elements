import { html, LitElement } from "lit";
import { customElement, property, queryAll } from "lit/decorators.js";
import { debugMode } from "../../p2f.kiosk.templates.app";
import { aeEvent } from "../../../../../functionalities/directives/event.directive";
import { styles } from "./p2f.kiosk.categories.styles";
import { categoriesTemplate } from "./p2f.kiosk.categories.template";

@customElement('ae-p2f-kiosk-categories')
export class P2fKioskCategories extends LitElement {

/* Properties */
    @property({type: Number})
    selectedCategory: number;
  
    @property({type: String})
    selectedCategoryName: string;

    @property({type: String})
    category: string = "all";

    @property({attribute: false})
    data: any;

    @property({attribute: 'category-level'})
    categoryLevel: string;

/* Queries */
    @queryAll('div')
    categoryDivs:any; 

/* Methods */
    categoryHandler(e:Event, id:number, name:string) {
        e.preventDefault();
        aeEvent(this, '*', 'p2f-kiosk-grid', 'push', {
            id: id,
            name: name
        }, debugMode);
    }

    rootCategoryHandler(e:Event, id:number, name:string) {
        e.preventDefault();
        aeEvent(this, '*', 'p2f-kiosk-contentview', 'show', {
            id: id,
            name: name
        }, debugMode);
    }

/* Init */   
    firstUpdated() {
        document.addEventListener('ae-*:p2f-kiosk-contentview|show', (e:CustomEvent) => {
            this.selectedCategory = e.detail.id;
        });
        document.addEventListener('ae-*:p2f-kiosk-grid|push', (e:CustomEvent) => {
            this.selectedCategory = e.detail.id;
        });
        document.addEventListener('ae-*:p2f-kiosk-grid|change', (e:CustomEvent) => {
            this.selectedCategory = e.detail.id;
        });
    }

/* CSS */    
    static get styles() { return [styles]; }

/* Template */
    render() { return html`${categoriesTemplate(this)}`; }
}

/* Declaration */
declare global {
    interface HTMLElementTagNameMap {
        'ae-p2f-kiosk-categories': P2fKioskCategories;
    }
}