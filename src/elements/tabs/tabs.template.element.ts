import { html } from "lit";

export function masterTemplate(t:any) {
    return html`
        <nav part="ae-tabs-nav">
            ${t.items.map((item:any, index:number) => html`
                <a 
                    part="ae-tabs-nav-item" 
                    ?active="${index == 0}"
                    @click="${(e:Event) => t.clickHandler(e, item.id)}"
                    href="#">
                    ${item.name}
                </a>
            `)}
        </nav>
        <slot></slot>
    `;
}