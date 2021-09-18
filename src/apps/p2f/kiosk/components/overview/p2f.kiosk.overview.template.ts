import { html } from "lit";
import { until } from "lit/directives/until";
import { errorHandler } from "../../../../../functionalities/directives/error.handler.directive";
import { spoUriConverter } from "../../../../../functionalities/directives/spo/spo.uri.converter.directive";
import "../../../../../modules/p2f/grid/p2f.grid.module";
import { debugMode } from "../../p2f.kiosk.templates.app";
import { P2fCategory } from "../../../../../functionalities/interfaces/p2f/p2f.category.interface";


export function overviewTemplate(t:any) {
    return html`
        <div class="grid-container" part="p2f-kiosk-overview-grid-container">
            ${until(
                t.data.categoryItems
                .then(
                    (categories: any) => html`
                        ${categories.filter(category => category.meta.parent == undefined).map(
                            (category: P2fCategory) => html`

                            <div 
                                id="${category.id}"
                                part="p2f-kiosk-overview-category-item"                                 
                                @click=${(e:Event) => t.rootCategoryHandler(e, category.id, category.name)}>

                                <img 
                                    part="p2f-kiosk-overview-category-img"  
                                    src="${category.asset ? 
                                        spoUriConverter(t.data.url + '/api', category.asset.thumbnailUri) + '?Width=500' 
                                        : ''
                                    }" />
                                
                                <span part="p2f-kiosk-overview-category-name">
                                    ${category.name ? category.name : category.id}
                                </span> 

                            </div>

                            `
                        )}
                    `
                ).catch((e: Event) => errorHandler(t, e, "ae-p2f-kiosk-overview", debugMode)),
                
                html``
            )}
        </div>
        <div 
            part="p2f-kiosk-overview-feature-documents-headline-box"  
            class="grid-container" 
            style="padding-top: 0;padding-bottom:0">
            <h2 part="p2f-kiosk-overview-feature-documents-headline">
                Die aktuellen Highlights
            </h2>
        </div>
        <div 
            class="grid-container" 
            part="p2f-kiosk-overview-grid-container" 
            style="grid-template-columns: unset;padding-top: 0;">
            <ae-p2f-grid
                modus-viewer
                exportparts="document"
                part="p2f-kiosk-overview-grid" 
                spoql-query="at '${t.data.key}' select item from 'p2fDocumentItem' where %7Bproperty 'featured' eq 'true'%7D"
                space-key=${t.data.key}
                size="${t.data.size}"
                url-base="${t.data.url}">
            </ae-p2f-grid>
        </div>
    `;
}
