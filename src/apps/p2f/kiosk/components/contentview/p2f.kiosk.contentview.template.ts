import { html } from "lit";
import "../categories/p2f.kiosk.categories";
import "../filterbar/p2f.kiosk.filterbar";
import "../breadcrumb/p2f.kiosk.breadcrumb";
import "../../../../../modules/p2f/grid/p2f.grid.module";

export function contentviewTemplate(t:any) {
    let selectItem =                `at '${t.data.key}' select item from 'p2fDocumentItem' `;
    let filterByCategory =          `%7Bproperty 'category' eq '${t.categoryId}'%7D`;
    let filterBySearchString =      `and %7Bproperty 'name' contains '${t.searchString}'%7D`;   

    let spoqlQuery = `
        ${selectItem}
        ${t.categoryId ? ' where ' : ''} 
        ${t.categoryId ? filterByCategory : ''}
        ${t.searchString ? filterBySearchString : ''} 
    `;

    return html`
        <header part="overview-header">
            <div class="container" part="container">
                <ae-p2f-kiosk-breadcrumb
                    category-selected="${t.categoryName}"
                    part="breadcrumb"
                    exportparts="
                    breadcrumb-list, 
                    breadcrumb-list-item, 
                    breadcrumb-link-overview, 
                    breadcrumb-link-category, 
                    breadcrumb-list-item-overview-icon, 
                    breadcrumb-list-item-divider-icon">
                </ae-p2f-kiosk-breadcrumb>
                <ae-p2f-kiosk-categories
                    part="categories" 
                    exportparts="category-item">
                </ae-p2f-kiosk-categories>
            </div>
        </header>
        <div 
            class="container grid" 
            part="container">
            ${t.numberOfDocumentsInCategory == 0 || 
            t.numberOfDocumentsInCategory == undefined ? 
                html`` : 
                html`
                    <ae-p2f-kiosk-filterbar
                        exportparts="
                        filterbar-search-box,
                        filterbar-search-icon,
                        filterbar-search-input,
                        filterbar-search-reset-icon">                        
                    </ae-p2f-kiosk-filterbar>`
            }
            <ae-p2f-grid
                modus-viewer
                exportparts="document"
                spoql-query="${spoqlQuery}"
                size="${t.data.size}"
                url-base="${t.data.url}">
            </ae-p2f-grid>
        </div>
    `;      
}