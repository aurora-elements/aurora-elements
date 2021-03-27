import { html } from "lit-element";

export function template(data) {

    let scrollElements = document.querySelectorAll(data.scrollElements);
    let scrollNavigationItems = Array.from(scrollElements);
    
    return html`
        <div></div>
        <div part="scroll-items">
            <h2>${data.label}</h2>
            ${scrollNavigationItems.map((item, index) =>
                html`<span 
                        scroll-target="${item.scrollid}" 
                        ?is-active=${index == 0}
                        @click=${data.scrollHandler}>
                        ${item.scrollLabel}
                    </span>
                `
            )} 
        </div>
    `
}