import { html } from "lit-element";

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
            <svg
                version="1.1"
                id="L4"
                x="0px"
                y="0px"
                part="${data.partLoadingSvgSelector?
                    data.partLoadingSvgSelector: 'card-loading-svg'}"
                viewBox="0 0 100 100"
                enable-background="new 0 0 0 0"
                xml:space="preserve">
                <circle stroke="none" cx="30" cy="50" r="6">
                    <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.1"/>
                </circle>
                <circle stroke="none" cx="50" cy="50" r="6">
                    <animate
                            attributeName="opacity"
                            dur="1s"
                            values="0;1;0"
                            repeatCount="indefinite"
                            begin="0.2"/>
                </circle>
                <circle stroke="none" cx="70" cy="50" r="6">
                    <animate
                            attributeName="opacity"
                            dur="1s"
                            values="0;1;0"
                            repeatCount="indefinite"
                            begin="0.3"/>
                </circle>
            </svg>
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