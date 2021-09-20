import { html } from "lit";
import "../../../../../modules/p2f/grid/p2f.grid.module";
import "../categories/p2f.kiosk.categories";

export function overviewTemplate(t:any) {
    return html`
        <ae-p2f-kiosk-categories
            category-level="root"
            part="categories" 
            exportparts="category-item">
        </ae-p2f-kiosk-categories>
        <section part="p2f-kiosk-module-feature">
            <h2 part="p2f-kiosk-module-feature-headline">
                Die aktuellen Highlights
            </h2>
            <ae-p2f-grid
                modus-viewer
                exportparts="document"
                part="p2f-kiosk-module-feature-grid" 
                spoql-query="${t.parentCategoriesQuery}"
                space-key=${t.data.key}
                size="${t.data.size}"
                url-base="${t.data.url}">
            </ae-p2f-grid>
        </section>
    `;
}

