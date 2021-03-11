import { LitElement, html } from "lit-element";
import { styles } from './RouterLinkStyles.js';

class AuroraRouterLink extends LitElement {
    /* Properties - LitElement */
    static get properties() {
        return {
            to: { type: String },
            content: { type: String },
            pageTitle: { type: String, attribute: 'page-title' },
            label: {type: String}
        };
    }

    /* Styles - LitElement */
    static get styles() {
        return [styles]
    }

    /* Render template */
    render() {
        return html`${this.label}`;
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('click', e => {
            e.preventDefault();

            let links = document.querySelectorAll('aurora-router-link');
            for(let i = 0; i < links.length; i++) {
                links[i].classList.remove('aurora-state-active');
            }
            this.classList.add('aurora-state-active');
            document.title = (this.pageTitle || this.label + ' - aurora showcase') || document.title;

            this.dispatchEvent(new CustomEvent('route-change', {
                composed: true,
                bubbles: true,
                detail: {link: this}
            }));
         })
    }
  }


  customElements.define('aurora-router-link', AuroraRouterLink );