import { html, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { aeEvent } from "../../../../../functionalities/directives/event.directive";
import { debugMode } from "../../p2f.kiosk.templates.app";
import { styles } from './p2f.kiosk.overview.styles';
import { overviewTemplate } from "./p2f.kiosk.overview.template";

@customElement('ae-p2f-kiosk-overview')
export class P2fKioskOverview extends LitElement {

/* Properties */
    @property({attribute: false})
    data: any;

    @property({attribute: false})
    parentCategoriesQuery:string;

/* Queries */    
    @query('ae-p2f-kiosk-categories')
    categoryTree: any;

/* Methods */
    rootCategoryHandler(e:Event, id:number, name:string) {
        e.preventDefault();
        aeEvent(this, '*', 'p2f-kiosk-contentview', 'show', {
            id: id,
            name: name
        }, debugMode);
    }

/* Init */
    firstUpdated() {
        let obj = {
            url: this.data.url,
            key: this.data.key,
            size: this.data.size,
            categoryItems: this.data.categoryItems
        };
        this.categoryTree.data = obj;

        this.parentCategoriesQuery = `at '${this.data.key}' select item from 'p2fDocumentItem' where %7Bproperty 'featured' eq 'true'%7D`
    }

/* CSS */
    static get styles() { return [styles]; }

/* Template */
    render() { return html`${overviewTemplate(this)}`; }
}

/* Declaration */
declare global {
    interface HTMLElementTagNameMap {
        'ae-p2f-kiosk-overview': P2fKioskOverview;
    }
}