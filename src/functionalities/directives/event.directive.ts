interface AeEventConfig {
    dispatchElement:any;
    trigger: string;
    target: string;
    activity: string;  
    eventDetails:any;
    debug?: boolean;
}

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