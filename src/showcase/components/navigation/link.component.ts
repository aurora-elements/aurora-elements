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
                line-height: 24px;
                color: #9c9c9c;
                outline: none !important;
                cursor: pointer;
            }
            a[route-active] {
                cursor: default;
                font-weight: bold;
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

        let navItemGroup = this.parentNode as HTMLElement;

        let links = navItemGroup.querySelectorAll('nav-link');

        for (let i = 0; i < links.length; i++) {
            links[i].removeAttribute('route-active');
        }

        this.navigate(this.href);

        this.setAttribute('route-active', '');

    }

    firstUpdated() {
        let navItemGroup = this.parentNode as HTMLElement;

        let links = navItemGroup.querySelectorAll('nav-link');

        for (let i = 0; i < links.length; i++) {
            let link = links[i].shadowRoot.querySelector('a');
            if (link !== null) {
                if (links[i].href === window.location.pathname) {
                    link.setAttribute('route-active', '');
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