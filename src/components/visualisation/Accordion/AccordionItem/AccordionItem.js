import { LitElement } from "lit-element";
import { template } from "./AccordionItemTemplate.js";
import { styles } from './AccordionItemStyles.js';

class AuroraAccordionItem extends LitElement {
    constructor() {
        super();

        this.label = '';
        this.expanded = false;
        this.multipleSupport = false;
    }

    /* Properties - LitElement */
    static get properties() {
        return {
            label:              { 
                type: String 
            },
            expanded:           { 
                type: Boolean, 
                reflect: true 
            },
            multipleSupport:    { 
                type: Boolean, 
                attribute: 'multiple-support', 
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

    /* Methods */
    convertLabel(string) {
        return string.replace(/\s/g, '-').toLowerCase();
    }

    toggle() {
        let parent = this.parentNode;
        let expanded = parent.querySelector("[expanded]");

        if(!this.multipleSupport) {
            expanded.removeAttribute('expanded');
            this.setAttribute('expanded', '');
        } else {
            if(this.expanded) {
                this.removeAttribute('expanded')
            } else {
                this.setAttribute('expanded', '')
            }
        }
    }
}

customElements.define('aurora-accordion-item', AuroraAccordionItem);
