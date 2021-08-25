export function aeEvent(
    dispatchElement:any,
    trigger: string,
    target: string,
    activity: string,  
    eventDetails:any,
    debug?: boolean
    ) {

    let aeEvent = new CustomEvent('ae-' + trigger + ':' + target + '|' + activity, { 
        detail: eventDetails,
        bubbles: true, 
        composed: true 
    });

    if(debug) {
        console.log('Fired -> ae-' + trigger + ':' + target + '|' + activity + ': ', aeEvent.detail);
    } 

    return dispatchElement.dispatchEvent(aeEvent);
}