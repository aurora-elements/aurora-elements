import { LitElement } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { aeEvent } from '../../functionalities/directive';
import { styles } from "./dropdown-button.styles";
import { template } from "./dropdown-button.template";
import { auroraCustomElement } from "../../functionalities/decorators";
import { AuroraElement } from '../../functionalities/mixins';

@auroraCustomElement('ae-dropdown-button')
export class AeDropdownButton extends AuroraElement(LitElement, {
    styles,
    template
}) {

    /* Properties */
    @property({type: String})
    label: string = "Button label";

    @property({ type: Boolean, attribute: "debug-mode" })
    debugMode: boolean = false;

    /* states */
    @state()
    protected class: string = "ae-dropdown-button";

    @state()
    private open: boolean = false;

    /* Queries */
    @query(".ae-dropdown-button-button")
    button: HTMLElement;

    @query(".ae-dropdown-button-content")
    content: HTMLElement;

    /* Methods */    
    protected handleStatusChange() {
        aeEvent({
            dispatchElement: this, 
            trigger: 'dropdown-button', 
            target: '*', 
            activity: 'status-change', 
            eventDetails: {
                status: this.open ? 'open' : 'closed'
            }, 
            debug: this.debugMode
        })
    }

    protected handleSlotchange() {
        aeEvent({
            dispatchElement: this, 
            trigger: 'dropdown-button', 
            target: '*', 
            activity: 'slot-change', 
            eventDetails: null, 
            debug: this.debugMode
        });
    }

    protected handleOpenChange() {
        this.open = !this.open;
        
        if(this.open) {
            this.class = 'ae-dropdown-button open'
        } else {
            this.class = 'ae-dropdown-button'
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-dropdown-button': AeDropdownButton;
    }
}