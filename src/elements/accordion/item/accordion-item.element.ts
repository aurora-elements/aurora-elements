import { LitElement } from "lit";
import {property, query} from 'lit/decorators.js';
import { styles } from "./accordion-item.styles";
import { template } from "./accordion-item.template";
import { auroraCustomElement } from "../../../functionalities/decorators";
import { AuroraElement } from "../../../functionalities/mixins";

@auroraCustomElement('ae-accordion-item')
class AeAccordionItem extends AuroraElement(LitElement, {
    styles,
    template
}) {

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
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-accordion-item': AeAccordionItem;
    }
}