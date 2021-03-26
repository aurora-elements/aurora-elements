import { LitElement } from "lit-element";
import { template } from "./HeadlineBlockTemplate.js";
import { styles } from './HeadlineBlockStyles.js';
class AuroraHeadlineBlock extends LitElement {
    /* Properties - LitElement */
    static get properties() {
        return {
            headline:       { 
                type: String 
            },
            isSubheadline:  { 
                type: Boolean, 
                attribute: 'is-subheadline', 
                default: false 
            },
            scrollid: {
                type: String,
                reflect: true
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

}

customElements.define('aurora-headline-block', AuroraHeadlineBlock);