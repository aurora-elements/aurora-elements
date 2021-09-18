import { html, LitElement } from 'lit';
import { customElement, property } from "lit/decorators.js";
import { aeEvent } from '../../../../../functionalities/directives/event.directive';
import { debugMode } from '../../p2f.kiosk.templates.app';
import { styles } from './p2f.kiosk.breadcrumb.styles';
import { breadcrumbTemplate } from './p2f.kiosk.breadcrumb.template';

@customElement('ae-p2f-kiosk-breadcrumb')
export class P2fKioskBreadcrumb extends LitElement {

/* Properties */
    @property({attribute: 'category-selected'})
    selectedCategoryName: string;

    @property({attribute:false})
    categories: any = [];

/* Methods */
    showOverview() {
        aeEvent(this, '*', 'p2f-kiosk-overview', 'show', {}, debugMode);
        this.categories.length = 0;
    }

    itemClickHandler(e:Event, catId:number, name:string) {
        e.preventDefault();

         this.categories.map((category:any) => {
             if(category.id != catId) {
                 this.categories.pop();
             }
         });

         aeEvent(this, '*', 'p2f-kiosk-grid', 'change', {
            id: catId,
            name: name
        }, debugMode);

        this.requestUpdate();    
    }

/* Init */
    firstUpdated() {
       document.addEventListener('ae-*:p2f-kiosk-contentview|show', (e:CustomEvent) => {
            this.categories = [];
            this.categories.push({id: e.detail.id, name: e.detail.name});
        });
        document.addEventListener('ae-*:p2f-kiosk-grid|push', (e:CustomEvent) => {
            this.categories.push({id: e.detail.id, name: e.detail.name});
        });
    }

/* CSS */
    static get styles() { return [styles] }

/* Template */
    render() { return html`${breadcrumbTemplate(this)}` }
}

/* Declaration */
declare global {
    interface HTMLElementTagNameMap {
        'ae-p2f-kiosk-breadcrumb': P2fKioskBreadcrumb;
    }
  }