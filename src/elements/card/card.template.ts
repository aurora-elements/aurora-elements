import "../loader/loader";
import { html, nothing } from "lit";

export function template(t:any) {
    return html`
        ${t.href
            ? html`
                <a
                    part="ae-card--link"
                    href="${t.href}"
                    .target="${t.target}">
                    <slot name="ae-card--slot-link"></slot>
                </a>
            `
            : nothing
        }
        <slot name="ae-card--slot-top"></slot>
        ${t.image ? 
            html`
                <figure part="ae-card--figure">
                    <slot name="ae-card--ae-loader">
                        <ae-loader 
                            part="ae-card--ae-loader" 
                            exportparts="ae-loader--icon">
                        </ae-loader>
                    </slot>
                    <slot name="ae-card--image">
                        <img
                            part="ae-card--image"
                            loading="lazy"
                            src="${t.image}" />
                    </slot>
                </figure>
            ` : nothing
        }
        ${t.label ?
            html`
                <header part="ae-card--header">
                    <h3 part="ae-card--label">
                        ${t.label}
                    </h3>
                    <slot name="ae-card--header"></slot>
                </header>
            ` : nothing
        }
        <slot name="ae-card--slot-bottom"></slot>
    `
}