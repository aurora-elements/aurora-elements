import { html } from "lit";

export function template(data) {
    return html`
        ${data.href? 
            html`
            <a 
                part="${data.partLinkSelector? 
                    data.partLinkSelector : 'card-link'}" 
                href="${data.href}" 
                target="${data.target}"></a>` 
                : ''
        }
        <figure 
            part="${data.partFigureSelector?
                data.partFigureSelector: 'card-figure'}"
            .hidden=${!data.image}>
            <ae-loader 
                part="${data.partLoadingSvgSelector?
                    data.partLoadingSvgSelector: 'card-loading-svg'}">
            </ae-loader>
            <slot name="image">
                <img 
                    part="${data.partImgSelector?
                        data.partImgSelector: 'card-img'}" 
                    loading="lazy" 
                    src="${data.image}" />
            </slot>
        </figure>
        <header 
            part="${data.partHeaderSelector?
                data.partHeaderSelector: 'card-header'}" 
            .hidden=${!data.label}>
            <h3 
                part="${data.partLabelSelector?
                    data.partLabelSelector: 'card-label'}">
                ${data.label}
            </h3>
        </header>
    `;
}