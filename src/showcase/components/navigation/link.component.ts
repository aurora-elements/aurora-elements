import { LitElement, html, css } from "lit";
import { customElement, property } from 'lit/decorators.js';
import { navigator } from "lit-element-router";

@customElement('nav-link')
export class NavLink extends navigator(LitElement) {
    /* Properties */
    @property({ type: String }) href: string = '';

    static get styles() {
        return css`
            :host {
                display: block;
            }
            a {
                text-decoration: none;
                width: 100%;
                display: block;
                padding: 0 20px 10px 20px;
                line-height: 24px;
                color: #9c9c9c;
                outline: none !important;
                cursor: pointer;
            }
            a[route-active] {
                cursor: default;
                color: var(--link-color-hover, var(--color-accent-primary, #00569c));
            }
            a:hover {
                color: var(--link-color-hover, var(--color-accent-primary, #00569c));
            }
      `;
    }

    render() {
        return html`
            <a 
                class="nav-link" 
                href="${this.href}" 
                @click="${this.handleClick}">
                <slot></slot>
            </a>
        `;
    }

    handleClick(e:Event) {
        e.preventDefault();

        let accordionItem = this.parentNode as HTMLElement;
        let accordion = accordionItem.parentNode as HTMLElement;

        let links = accordionItem.querySelectorAll('nav-link');

        let test = accordion.querySelectorAll('ae-accordion-item');

        for (let i = 0; i < test.length; i++) { console.log('test[i]', test[i]);
            test[i].removeAttribute('expanded');
        }

        for (let i = 0; i < links.length; i++) {
            links[i].removeAttribute('route-active');
        }

        this.navigate(this.href);

        this.setAttribute('route-active', '');

        accordionItem.setAttribute('expanded', '');
    }

    firstUpdated() {
        let accordionItem = this.parentNode as HTMLElement;
        let accordion = accordionItem.parentNode as HTMLElement;

        let links = accordionItem.querySelectorAll('nav-link');

        let test = accordion.querySelectorAll('ae-accordion-item');

        for (let i = 0; i < test.length; i++) {
            test[i].removeAttribute('expanded');
        }

        for (let i = 0; i < links.length; i++) {
            let link = links[i].shadowRoot.querySelector('a');
            if (link !== null) {
                if (links[i].href === window.location.pathname) {
                    link.setAttribute('route-active', '');
                    let parentEl = links[i].parentNode as HTMLElement;
                    parentEl.setAttribute('expanded', '')
                } else {
                    link.removeAttribute('route-active');
                }
            }
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'nav-link': NavLink;
    }
}