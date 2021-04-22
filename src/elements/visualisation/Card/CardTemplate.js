import { html } from "lit-element";

export function template(data) {
    return html`
        ${data.href? 
            html`<a part="card-link" href="${data.href}" target="${data.target}"></a>` : 
            ''
        }
        <figure part="card-figure" .hidden=${!data.image}>
            <svg
                version="1.1"
                id="L4"
                x="0px"
                y="0px"
                part="card-loading-svg"
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
                <img part="card-img" loading="lazy" src="${data.image}" />
            </slot>
        </figure>
        <header part="card-header" .hidden=${!data.label}>
            <h3 part="card-label">${data.label}</h3>
        </header>
    `;
}