import "../../../../elements/loader.element";
import { css, html, LitElement } from "lit";
import { customElement, property, queryAll } from "lit/decorators.js";
import { errorHandler } from "../../../../functionalities/directives/error.handler.directive";
import { until } from "lit/directives/until";
import { P2fCategory } from "../../../../functionalities/interfaces/p2f/p2f.category.interface";
import publicApi from "../../../../functionalities/directives/spo/spo.api.fetch.public.directive";
import { aeEvent } from "../../../../functionalities/directives/event.directive";


const styles = css`
    :host {
        width:100%;
        float:left;
        background:transparent;
        height:40px;
        overflow: hidden;
    }
    div {
        padding:10px 20px;
        background:white;
        margin-right:10px;
        float:left;
        cursor:pointer;
        user-select: none;
    }
    .category-hidden {
        display:none;
    }
    .category-visible {
        display: block;
    }
    .category-active {
        color: red!important;
        cursor:default;
        pointer-events: none;
        background-color:#f8f8f8;
    }
`;

@customElement('ae-p2f-kiosk-categories')
export class P2fKioskCategories extends LitElement {

    @property({type: String, attribute:'url'})
    urlBase: string = '';
  
    @property({type: String, attribute: 'key'})
    spaceKey: string = "thenewp2f";

    @property({type: Number})
    selectedCategory: number;
  
    @property({type: String})
    selectedCategoryName: string;

    @property({type: String})
    category: string = "all";

    @queryAll('div')
    categoryItems:any;

    // Problem bei jedem klick wir neu gerendert, daher funktioniert kinder anzeigen nicht
    selectCategory(e:Event) {
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
    }

    static get styles() {
        return [styles];
    }
    render() {
        let categoryItems = publicApi.get(`${this.urlBase}/api/scope/${this.spaceKey}/items/p2fDocumentCategory`);
        
        return html`
            ${until(
                categoryItems
                .then(
                    (categories: any) => html`
                        ${categories.filter(category => category.meta.parent == this.selectedCategory).map(
                            (category: P2fCategory, index:number) => html`
                            <div
                                id="${category.id}"
                                parent="${category.meta.parent != undefined ? category.meta.parent : ''}"
                                @click=${this.selectCategory}
                                class="
                                    ${category.meta.parent != this.selectedCategory ? ' category-hidden ' : ' category-visible '} 
                                    ${this.selectedCategory != undefined ? 
                                        (category.id === this.selectedCategory ? ' category-active ' : '') : 
                                        (index == 0 ? ' category-active' : '')
                                    }
                                ">

                                ${category.name != undefined
                                    ? category.name
                                    : category.id
                                }                   
                                
                            </div>
                            `
                        )}
                    `
                ).catch((e: Event) => errorHandler(this, e, "category", true)),
                
                html``
            )}
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-p2f-kiosk-categories': P2fKioskCategories;
    }
}