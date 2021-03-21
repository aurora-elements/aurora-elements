import { LitElement } from "lit-element";
import { template } from "./ScrollTopTemplate.js";
import { styles } from './ScrollTopStyles.js';

class AuroraScrollTop extends LitElement {

        /* Properties - LitElement */
        static get properties() {
            return {
                scrollContainer:      { type: String, attribute: 'scroll-container' }
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

    /* Get root */
    get root() {
        return this.shadowRoot || this
    }

    /* First updated - LitElement */
    firstUpdated() {
        super.firstUpdated();

        const scrollCon = document.querySelector(this.scrollContainer);

        scrollCon.onscroll = () => {
            if (scrollCon.scrollTop > 50) {
                this.setAttribute('is-active', '');
            } else {
                this.removeAttribute('is-active');
            }
        }

        this.addEventListener('click', () => {
            scrollCon.scrollTo({
                top: 0,
                behavior: "smooth"
              })
        })
    }
}
customElements.define('aurora-scroll-top', AuroraScrollTop);