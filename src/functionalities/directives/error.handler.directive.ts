export function errorHandler(
    dispatchElement:any, 
    error:any, 
    origin:any,
    debug?:boolean) {
    let errorInfo = '';

    if (error.status === 401 || error.status === 404 || error.status === 408) {
        errorInfo = error.status + ' ' + error.statusText;
    } else {
        errorInfo = ' something went wrong: ' + error.message
    }

    let aeErrorEvent = new CustomEvent('ae-*:*|error', { 
        detail:{ 
            message: errorInfo,
            origin: origin
        },
        bubbles: true, 
        composed: true 
    });

    if(debug) {
        console.log('Fired -> ae-*:*|error', aeErrorEvent.detail);
    } 

    return dispatchElement.dispatchEvent(aeErrorEvent); 
}