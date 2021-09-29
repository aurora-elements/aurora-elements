import { html } from "lit";

function tabBavTemplate(t:any) {
    return html`
        ${t.items.map((item:any, index:number) => html`
            <a 
                part="ae-tabs-nav-item" 
                ?active="${index == 0}"
                data-id="${item.id}"
                @click="${(e:Event) => t.clickHandler(e, item.id)}"
                href="#">
                ${item.name}
            </a>
        `)}    
    `;
}
export function masterTemplate(t:any) {
    return html`
        <nav part="ae-tabs-nav">
            ${t.menuLayout ? 
                html`
                <svg 
                    style="width:24px;height:24px" 
                    viewBox="0 0 24 24" 
                    @click="${() => t.open = !t.open}">
                    <path 
                        fill="currentColor" 
                        d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                </svg>
                <div id="ae-tabs-nav-dopdown-content" ?open="${t.open}">
                    ${tabBavTemplate(t)}
                </div>
                ` : 
                html`
                   ${tabBavTemplate(t)}
                `
            }
        </nav>  

        <slot></slot>
    `;
}