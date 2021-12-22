import { LitElement } from "lit";
import {property, query} from 'lit/decorators.js';
import { auroraCustomElement } from "../../../functionalities/decorators";
import { attr } from "../../../functionalities/directive";
import { AuroraElement } from "../../../functionalities/mixins";
import { styles } from "./accordion-item.styles";
import { template } from "./accordion-item.template";

function removeExpanded(target:any) {
    attr({
        target: target,
        action: 'remove', 
        key: 'expanded'                    
     });
}
function setExpanded(target:any) {
    attr({
        target: target,
        action: 'set', 
        key: 'expanded'                    
     });
}

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
                 removeExpanded(expanded);
            }
            setExpanded(this);

        } else {
            if(this.expanded) {
                removeExpanded(expanded);
            } else {
                setExpanded(this);
            }
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-accordion-item': AeAccordionItem;
    }
}