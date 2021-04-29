import { LitElement } from "lit";
import { template } from "./AccordionTemplate.js";
import { styles } from './AccordionStyles.js';

class AeAccordion extends LitElement {
    constructor() {
        super();

        this.items =        [];
        this.initialized =  false;
    }

    /* Properties - LitElement */
    static get properties() {
        return {
            items:      { type: Array },
            multiple:   { type: Boolean }
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
    /* Should update - Lit Element (Implement to override default behavior) */
    shouldUpdate(changedProperties) {
        if (!this.initialized) {
            this.items = Array.from(this.children);
            this.items.map(item => item.setAttribute('tabIndex', '0'));
            this.initialized = true;
        }

        return changedProperties;
    }

    /* Get root */
    get root() {
        return this.shadowRoot || this
    }

    getItems() {
        const slot = this.root.querySelector('slot');
        return slot ? slot.assignedElements() : [];
    }
    /*?*/
    expandItem(expanded) {
        for(let item of this.items) {
            item.expanded = item === expanded;
            this.requestUpdate(); /* LitElement function */
        }
    }

    /* First updated - LitElement */
    firstUpdated() {
        super.firstUpdated();
        this.items.find(item => item.expanded) || this.expandItem(this.items[0]);

        if(this.multiple) {
            this.items.map(item => item.setAttribute('multiple-support', ''))
        }
    }

}

customElements.define('ae-accordion', AeAccordion);