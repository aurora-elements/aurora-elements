import { LitElement } from "lit";
import {property, query} from 'lit/decorators.js';
import { styles } from "./accordion-item.styles";
import { template } from "./accordion-item.template";
import { auroraElement } from "../../../functionalities/decorators";

@auroraElement('ae-accordion-item')
class AeAccordionItem extends LitElement {

    /* Properties - LitElement */
    @property() 
    label = '';

    @property({type: Boolean, reflect: true}) 
    expanded = false;

    @property({type: Boolean, attribute: 'multiple', reflect: true}) 
    multiple = false;

    @property({type: Boolean, attribute: 'is-last-item'})
    isLastItem = false;

    /* Queries */
    @query('header')
    header:HTMLElement;

    @query('.content')
    content:HTMLElement;

    /* Methods */
    toggle() {
        let parent = this.parentNode;
        let expanded = parent!.querySelector("[expanded]");

        if(!this.multiple) {
            if(expanded !== null) {
                expanded!.removeAttribute('expanded');
            }
            this.setAttribute('expanded', '');
        } else {
            if(this.expanded) {
                this.removeAttribute('expanded')
            } else {
                this.setAttribute('expanded', '')
            }
        }
    }

    /* Styles - LitElement */
    static styles = [styles];

    /* Render template */
    protected render() { return template(this) }

}

declare global {
    interface HTMLElementTagNameMap {
        'ae-accordion-item': AeAccordionItem;
    }
}