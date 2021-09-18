import { html } from "lit";

export function breadcrumbTemplate(t:any) {
    return html`
        <ul part="breadcrumb-list">
            <li part="breadcrumb-list-item">
                <a 
                    href="#"
                    part="breadcrumb-link-overview" 
                    @click=${t.showOverview}>
                    <svg
                        part="breadcrumb-list-item-overview-icon" 
                        viewBox="0 0 24 24">
                        <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"></path>
                    </svg>
                </a>
            </li>
            ${t.categories.map((category:any) => html`
                <li part="breadcrumb-list-item">
                    <svg 
                        part="breadcrumb-list-item-divider-icon"
                        viewBox="0 0 24 24">
                        <path 
                            fill="currentColor" 
                            d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                </li>
                <li part="breadcrumb-list-item">
                    <a 
                        href="#" 
                        part="breadcrumb-link-category"
                        category-id="${category.id}" 
                        @click="${(e:Event) => t.itemClickHandler(e, category.id, category.name)}">
                        ${category.name}
                    </a>
                </li>                              
            `)}
        </ul>   
    `;
}