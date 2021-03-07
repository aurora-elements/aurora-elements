import { LitElement } from "lit-element";
import { template } from "./RouterLinkTemplate.js";
import { styles } from './RouterLinkStyles.js';

class AuroraRouterLink extends LitElement {
    /* Properties - LitElement */
    static get properties() {
        return {
            to: { type: String },
            content: { type: String }
        };
    }

    /* Styles - LitElement */
    static get styles() {
        return [styles]
    }

    /* Render template */
    render() {
        return template(this)
    }

    connectedCallback() {
        super.connectedCallback();
      this.addEventListener('click', e => {
        e.preventDefault();

        this.dispatchEvent(new CustomEvent('route-change', {
          composed: true,
          bubbles: true,
          detail: {link: this}
        }));
      })
    }
  }


  customElements.define('aurora-router-link', AuroraRouterLink );