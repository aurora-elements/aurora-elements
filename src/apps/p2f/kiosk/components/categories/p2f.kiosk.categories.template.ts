import { html } from "lit";
import { until } from "lit/directives/until";
import { errorHandler } from "../../../../../functionalities/directives/error.handler.directive";
import { spoUriConverter } from "../../../../../functionalities/directives/spo/spo.uri.converter.directive";
import { P2fCategory } from "../../../../../functionalities/interfaces/p2f/p2f.category.interface";
import { debugMode } from "../../p2f.kiosk.templates.app";

export function categoriesTemplate(t:any) {
    return html`
        ${t.categoryLevel != undefined && t.categoryLevel === 'root' ? 
            html`
                ${until(
                    t.data.categoryItems
                    .then(
                        (categories: any) => html`
                            ${categories.filter(category => category.meta.parent == undefined).map(
                                (category: P2fCategory) => html`
                                <div
                                    id="${category.id}"
                                    part="p2f-kiosk-categories-category-item"
                                    @click=${(e:Event) => t.rootCategoryHandler(e, category.id, category.name)}>
                                    <img 
                                        part="p2f-kiosk-categories-category-img"  
                                        src="${category.asset ? 
                                            spoUriConverter(t.data.url + '/api', category.asset.thumbnailUri) + '?Width=500' 
                                            : ''
                                        }" />
                                    <span part="p2f-kiosk-categories-category-name">
                                        ${category.name ? category.name : category.id}
                                    </span>                                 
                                </div>
                                `
                            )}
                        `
                    ).catch((e: Event) => errorHandler(t, e, "p2f.kiosk.categories request", debugMode)),
                    
                    html``
                )}      
            ` : 
            html`
                ${until(
                    t.data.categoryItems
                    .then(
                        (categories: any) => html`
                            ${categories.filter(category => category.meta.parent == t.selectedCategory).map(
                                (category: P2fCategory) => html`
                                <div
                                    id="${category.id}"
                                    part="p2f-kiosk-categories-category-item"
                                    @click=${(e:Event) => t.categoryHandler(e, category.id, category.name)}
                                    parent="${category.meta.parent ? category.meta.parent : ''}">
                                    <img 
                                        part="p2f-kiosk-categories-category-img"  
                                        src="${category.asset ? 
                                            spoUriConverter(t.data.url + '/api', category.asset.thumbnailUri) + '?Width=500' 
                                            : ''
                                        }" />
                                    <span part="p2f-kiosk-categories-category-name">
                                        ${category.name ? category.name : category.id}
                                    </span>                                 
                                </div>
                                `
                            )}
                        `
                    ).catch((e: Event) => errorHandler(t, e, "p2f.kiosk.categories request", debugMode)),
                    
                    html``
                )}  
            `
        }
    `;
}