import { LitElement } from "lit-element";
import { template } from "./CardTemplate.js";
import { styles } from './CardStyles.js';

class AeCard extends LitElement {
        /* Properties - LitElement */
        static get properties() {
            return {
                label: { 
                    type: String
                },
                image: { 
                    type: String, 
                },
                href: { 
                    type: String, 
                },
                target: { 
                    type: String, 
                },
                partLinkSelector: {
                    Type: String,
                    attribute: 'part-link-selector'
                },
                partFigureSelector: {
                    type: String,
                    attribute: 'part-figure-selector'
                },
                partLoadingSvgSelector: {
                    Type: String,
                    attribute: 'part-loading-svg-selector'
                },
                partImgSelector: {
                    Type: String,
                    attribute: 'part-img-selector'
                },
                partHeaderSelector: {
                    Type: String,
                    attribute: 'part-header-selector'
                },
                partLabelSelector: {
                    Type: String,
                    attribute: 'part-label-selector'
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
            const el = this;
            image.addEventListener('load', () => {
                el.setAttribute('loaded', '');
            })   
        }
}
customElements.define('ae-card', AeCard);