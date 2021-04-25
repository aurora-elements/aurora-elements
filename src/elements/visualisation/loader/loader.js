import { LitElement } from "lit-element";
import { template } from "./loaderTemplate.js";
import { styles } from './loaderStyles.js';

class AeLoader extends LitElement {
        /* Properties - LitElement */
        static get properties() {
            return {
                partLoaderSvgSelector: {
                    Type: String,
                    attribute: 'part-loader-svg-selector'
                },
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
}
customElements.define('ae-loader', AeLoader);