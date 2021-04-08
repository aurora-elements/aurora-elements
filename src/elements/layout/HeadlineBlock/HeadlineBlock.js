import { LitElement } from "lit-element";
import { template } from "./HeadlineBlockTemplate.js";
import { styles } from './HeadlineBlockStyles.js';
class AeHeadlineBlock extends LitElement {
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
            },
            scrollLabel: {
                type: String,
                attribute: 'scroll-label',
                reflect: true,
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

    firstUpdated() {
        super.firstUpdated();
        if(!this.scrollLabel) {
            this.scrollLabel = this.headline;
        }
    }

}

customElements.define('ae-headline-block', AeHeadlineBlock);