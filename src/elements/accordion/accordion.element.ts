import { LitElement } from "lit";
import { property, query, state } from 'lit/decorators.js';
import { styles } from "./accordion.styles";
import { template } from "./accordion.template";
import './item/accordion-item.element';
import { auroraElement } from "../../functionalities/decorators";
import { aeEvent } from "../../functionalities/directives/event.directive";

@auroraElement('ae-accordion')
export class AeAccordion extends LitElement {
    /* Properties - LitElement */
    @property({type: Boolean}) 
    multiple = false;

    @property({attribute: 'icon-position'})
    itemIconPosition = 'right'; 

    @property({type: Boolean, attribute: 'icon-animation-off'})
    iconAnimationOff = false;

    @property({type: Boolean, attribute: 'content-animation-off'})
    contentAnimationOff = false;

    @property({type: Boolean, attribute: 'initially-closed'})
    initiallyClosed = false;

    @property({ type: Boolean, attribute: "debug-mode" })
    debugMode = false;

    /* States */
    @state() 
    items = [];

    @state() 
    initialized = false;

    /* Queries */
    @query('slot') slotEl?: any;

    /* Methods */
    protected getItems() {
        return this.slotEl ? this.slotEl.assignedElements() : [];
    }

     expandItem(expanded:any) {
        for(let item of this.items) {
            item.expanded = item === expanded;
            this.requestUpdate();
        }
    }

    protected handleSlotchange() {
        aeEvent({
            dispatchElement: this, 
            trigger: 'accordion', 
            target: '*', 
            activity: 'slot-change', 
            eventDetails: null, 
            debug: this.debugMode});

        if (!this.initialized) {
            this.items = Array.from(this.children);
            this.items.map((item:any) => item.setAttribute('tabIndex', '0'));
            this.initialized = true;
            aeEvent({
                dispatchElement: this, 
                trigger: 'accordion', 
                target: '*', 
                activity: 'initialized', 
                eventDetails: null, 
                debug: this.debugMode
            });
        }

        this.items.map((item:any, index:number, {length}) => {
            item.setAttribute('icon-position', this.itemIconPosition);

            if(index + 1 === length){ 
                item.setAttribute('is-last-item','');
            }

            if(this.iconAnimationOff) {
                item.setAttribute('icon-animation-off', '');
            }
            if(this.contentAnimationOff) {
                item.setAttribute('content-animation-off', '');
            }
            if(this.multiple) {
                item.setAttribute('multiple', '');
            }
        });
        if(!this.initiallyClosed) {
            this.items.find((item:any) => item.expanded) || this.expandItem(this.items[0]);
        }  

        aeEvent({
            dispatchElement: this, 
            trigger:'accordion', 
            target: '*', 
            activity: 'expanded-item', 
            eventDetails: {
                item: this.items.find((item:any) => item.expanded) || this.expandItem(this.items[0])
            }, 
            debug: this.debugMode
        });
    }

    /* Styles - LitElement */
    static styles =[styles];

    /* Render template */
    protected render() { return template(this); }

}

declare global {
    interface HTMLElementTagNameMap {
        'ae-accordion': AeAccordion;
    }
}
