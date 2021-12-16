import { AeEventConfig } from "../interfaces/event.interface";
import { AttrConfig } from "../interfaces/attr.interface";

// aeEvent directive
export function aeEvent(ev: AeEventConfig) {

    let triggerEl = ev.trigger === '*' ? ev.trigger: 'ae-' + ev.trigger;

    let aeEvent = new CustomEvent(triggerEl + ':' + ev.target + '|' + ev.activity, { 
        detail: ev.eventDetails,
        bubbles: true, 
        composed: true 
    });

    if(ev.debug) {
        console.log('Fired -> ' + triggerEl + ':' + ev.target + '|' + ev.activity + ': ', aeEvent.detail);
    } 

    return ev.dispatchElement.dispatchEvent(aeEvent);
}

// attr directive
export function attr(attr: AttrConfig):any {
    if(attr.action === 'set' && attr.value == undefined) {
        attr.value = '';
    }
    switch (attr.action) {
        case 'set': 
            return attr.target.setAttribute(attr.key, attr. value);
        case 'remove':
            return attr.target.removeAttribute(attr.key);
        case 'get': 
            return attr.target.getAttribute(attr.key);
        default: 
            return console.log('attribute function error')
    }
}