import "../../../../elements/loader.element";
import { css, html, LitElement } from "lit";
import { customElement, property, queryAll } from "lit/decorators.js";
import { errorHandler } from "../../../../functionalities/directives/error.handler.directive";
import { until } from "lit/directives/until";
import { P2fCategory } from "../../../../functionalities/interfaces/p2f/p2f.category.interface";
import { debugMode } from "../p2f.kiosk.app";
import { aeEvent } from "../../../../functionalities/directives/event.directive";


const styles = css`
    :host {
        width:100%;
        float:left;
        background:transparent;
        overflow: hidden;
    }
    div {
        padding: 14px 20px;
        background: white;
        margin: 15px 10px 5px 0;
        float: left;
        cursor: pointer;
        user-select: none;
        font-weight: 700;
        text-transform: uppercase;
        font-size: .8rem;
        color: #9facb6;
        box-shadow: 0px 20px 30px -20px rgba(0, 0, 0, 0.3);
    }
    .category-hidden {
        display:none;
    }
    .category-visible {
        display: block;
    }
    .active {
        color: #fff!important;
        cursor:default;
        pointer-events: none;
        background-color:#2d2e87;
    }
`;

@customElement('ae-p2f-kiosk-categories')
export class P2fKioskCategories extends LitElement {

    @property({type: Number})
    selectedCategory: number;
  
    @property({type: String})
    selectedCategoryName: string;

    @property({type: String})
    category: string = "all";

    @queryAll('div')
    categoryDivs:any; 

    @property({attribute: false})
    data: any;

    // Problem bei jedem klick wir neu gerendert, daher funktioniert kinder anzeigen nicht
   /* selectCategory(e:Event) {
        let parent:number|string =      (e.target as Element).getAttribute('parent');
        let category:number|string =    (e.target as Element).id;
        let name:string =               (e.target as Element).textContent.trim();

        this.categoryItems.forEach((categoryItem:any) => {
            let parentId = categoryItem.getAttribute('parent');
            console.log('Elternkategorie: ', parentId)
            console.log('ausgewählte Kategorie: ', category)
            if( category == parentId ) {
                categoryItem.classList.remove('category-hidden');
                categoryItem.classList.add('category-visible');
            }
        })


        this.selectedCategory = parseInt(category);
        this.selectedCategoryName = name;

        
        aeEvent(this, 'p2f-kiosk-categories', 'ae-p2f-kiosk', 'select', {
            category:   category,
            name:       name,
            parent:     parent
        }, true);
    } */

    static get styles() {
        return [styles];
    }

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
    render() {

        return html`
            ${until(
                this.data.categoryItems
                .then(
                    (categories: any) => html`
                        ${categories.filter(category => category.meta.parent == this.selectedCategory).map(
                            (category: P2fCategory) => html`
                            <div
                                id="${category.id}"
                                @click=${(e:Event) => this.categoryHandler(e, category.id, category.name)}
                                parent="${category.meta.parent != undefined ? category.meta.parent : ''}">
                                ${category.name != undefined
                                    ? category.name
                                    : category.id
                                }                                                   
                            </div>
                            `
                        )}
                    `
                ).catch((e: Event) => errorHandler(this, e, "p2f.kiosk.categories request", debugMode)),
                
                html``
            )}
        `;
    }

    categoryHandler(e:Event, id:number, name:string) {
        e.preventDefault();
        aeEvent(this, '*', 'p2f-kiosk-grid', 'push', {
            id: id,
            name: name
        }, debugMode);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-p2f-kiosk-categories': P2fKioskCategories;
    }
}