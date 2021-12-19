import { LitElement } from "lit";
import { property, query, state } from 'lit/decorators.js';
import { styles } from "./accordion.styles";
import { template } from "./accordion.template";
import './item/accordion-item';
import { auroraCustomElement } from "../../functionalities/decorators";
import { aeEvent, attr } from "../../functionalities/directive";
import { AuroraElement } from "../../functionalities/mixins";

function aeAccordionEvent(t:any, activity:string, details?:Object) {
   return aeEvent({
        dispatchElement: t, 
        trigger: 'accordion', 
        target: '*', 
        activity: activity, 
        eventDetails: details, 
        debug: t.debugMode
    }); 
}

function setAccordionAttribute(item:any, key:string, value?:string) {
    if(!value) {
        value = ''
    }
    attr({
        target:item, 
        action: 'set', 
        key: key, 
        value: value
     });
}

@auroraCustomElement('ae-accordion')
export class AeAccordion extends AuroraElement(LitElement, {
    styles, 
    template
}) {
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
        aeAccordionEvent(this, 'slot-change');

        if (!this.initialized) {
            this.items = Array.from(this.children);
            this.items.map((item:any) => item.setAttribute('tabIndex', '0'));
            this.initialized = true;
            aeAccordionEvent(this, 'initialized');
        }

        this.items.map((item:any, index:number, {length}) => {
            setAccordionAttribute(item, 'icon-position', this.itemIconPosition)

            if(index + 1 === length){ 
                setAccordionAttribute(item, 'is-last-item');
            }

            if(this.iconAnimationOff) {
                setAccordionAttribute(item, 'icon-animation-off');
            }
            if(this.contentAnimationOff) {
                setAccordionAttribute(item, 'content-animation-off');
            }
            if(this.multiple) {
                setAccordionAttribute(item, 'multiple');
            }
        });
        if(!this.initiallyClosed) {
            this.items.find((item:any) => item.expanded) || this.expandItem(this.items[0]);
        }  

        aeAccordionEvent(this, 'expanded-item', {
            item: this.items.find((item:any) => item.expanded) || this.expandItem(this.items[0])
        });

    }

}

declare global {
    interface HTMLElementTagNameMap {
        'ae-accordion': AeAccordion;
    }
}
