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
export function aeDeleteEvent(
    dispatchElement:any,
    id: number,
    name?:string,
    debugInformations?:any, 
    debug?: boolean
    ) {

    let aeDeleteEvent = new CustomEvent('ae-*:ae-confirm-dialog|delete-request', { 
        detail: {
            id: id,
            name: name,
            debugInformations:debugInformations
        },
        bubbles: true, 
        composed: true 
    });

    if(debug) {
        console.log('Fired -> ae-*:ae-confirm-dialog|delete-request', aeDeleteEvent.detail);
    } 

    return dispatchElement.dispatchEvent(aeDeleteEvent);
}