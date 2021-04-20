import { LitElement } from "lit-element";
import { template } from "./CardTemplate.js";
import { styles } from './CardStyles.js';

class AuroraCard extends LitElement {
        /* Properties - LitElement */
        static get properties() {
            return {
                label: { 
                    type: String
                },
                image: { 
                    type: String, 
                }
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

        firstUpdated() {
            const image = this.root.querySelector('img');
            image.addEventListener('load', () => {
                this.parentNode.setAttribute('loaded', '');
            })   
        }
}
customElements.define('aurora-card', AuroraCard);