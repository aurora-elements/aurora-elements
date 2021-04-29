import { LitElement, css, unsafeCSS } from "lit";
import { template } from "./P2FkioskTemplate.js";
import { styles } from './P2FkioskStyles.js';

class P2Fkiosk extends LitElement {
    /* Properties - LitElement */
    static get properties() {
        return {
            search: { 
                type: Boolean 
            },
            color:  { 
                type: String
            },
            showOnly: {
                type: String,
                attribute: 'show-only',
                reflect: true
            },
            cssUrl: {
                type: String,
                attribute: 'css-url',
                reflect: true,
            },
            apiUrlBanner: {
                type: String,
                attribute: 'api-url-banner',
                reflect: true,
            },
            apiUrl: {
                type: String,
                attribute: 'api-url',
                reflect: true,
            }
        };
    }

    /* Styles - LitElement */
    static get styles() {
        if(this.color) {
            return [
                css`
                    :host {
                        --accent-color: ${unsafeCSS(this.color)};
                    }
                `,
                styles
            ]
        } else {
            return [
                styles
            ]
        }
    }

    /* Render template */
    render() {
        return template(this)
    }

    /* Methods */
    onSearch() {
        const inputEl = this.root.querySelector('input');
        let items = this.root.querySelectorAll('[filter-values]');
        let searchString = inputEl.value.toLowerCase();

        for(let i = 0; i < items.length; i++) {
            items[i].classList.remove('hidden-by-filter');
        }

        if(inputEl.value.length > 2) {
            for(let i = 0; i < items.length; i++) {

                let filterItem = items[i].getAttribute('filter-values').toLowerCase();
               
                if(!filterItem.includes(searchString)) {
                    items[i].classList.add('hidden-by-filter');
                }
            }
        }
    }
    categoryHandler(event) {      
        let items = this.root.querySelectorAll('aurora-card[item-category-id]');
        let cat = event.target.getAttribute('category-id');

        for(let i = 0; i < items.length; i++) {

            let catId = items[i].getAttribute('item-category-id');

            if(catId != cat) {
                items[i].classList.add('hidden-by-category');
            } else {
                items[i].classList.remove('hidden-by-category');    
            }
        }
    }

    categoryResetHandler() {
        let items = this.root.querySelectorAll('aurora-card[item-category-id]');
        for(let i = 0; i < items.length; i++) {
            items[i].classList.remove('hidden-by-category');
        }
    }


    /* Get root */
    get root() {
        return this.shadowRoot || this
    }
}
customElements.define('p2f-kiosk', P2Fkiosk);