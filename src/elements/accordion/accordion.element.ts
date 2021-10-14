import { LitElement, html, css } from "lit";
import { customElement, property, query } from 'lit/decorators.js';

const styles = css`
    :host {
        display: grid;
        contain: content;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        width: 100%;
    }
    ::slotted(ae-accordion-item){
        border-bottom: 1px solid var(--accordion-item-border-color, var(--border-color, #c1c1c1));
    }
    ::slotted(ae-accordion-item:last-child) {
        border-bottom: none;
    }
    ::slotted([visible=true]:last-child) {
        border:10px solid red!important;
    }
`;

@customElement('ae-accordion')
class AeAccordion extends LitElement {
    /* Properties - LitElement */
    @property({type: Array, attribute: false}) 
    items:any = [];

    @property({type: Boolean}) 
    multiple = false;

    @property({type: Boolean, attribute: false}) 
    initialized = false;

    @query('slot') slotEl?: any;

    /* Styles - LitElement */
    static get styles() {
        return [styles]
    }

    /* Render template */
    render() {
        return html`
            <slot> </slot>
        `;
    }

    /* Methods */
    /* Should update - Lit Element (Implement to override default behavior) */
    shouldUpdate(changedProperties:any) {
        if (!this.initialized) {
            this.items = Array.from(this.children);
            this.items.map((item:any) => item.setAttribute('tabIndex', '0'));
            this.initialized = true;
        }

        return changedProperties;
    }

    getItems() {
        return this.slotEl ? this.slotEl.assignedElements() : [];
    }
    /*?*/
    expandItem(expanded:any) {
        for(let item of this.items) {
            item.expanded = item === expanded;
            this.requestUpdate(); /* LitElement function */
        }
    }

    /* First updated - LitElement */
    firstUpdated() {
        this.items.find((item:any) => item.expanded) || this.expandItem(this.items[0]);

        if(this.multiple) {
            this.items.map((item:any) => item.setAttribute('multiple-support', ''))
        }
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'ae-accordion': AeAccordion;
    }
}
