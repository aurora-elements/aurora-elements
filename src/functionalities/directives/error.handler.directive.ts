import { html } from "lit";

export function errorHandler(
    dispatchElement:any, 
    error:any, 
    origin:any,
    debug?:boolean) {
    let errorInfo = '';

    if (error.status === 401 || error.status === 404 || error.status === 408) {
        errorInfo = error.status + ' ' + error.statusText;
    } else {
        errorInfo = error.message
    }

    let aeErrorEvent = new CustomEvent('ae-*:*|fetch-error', { 
        detail:{ 
            message: errorInfo,
            origin: origin
        },
        bubbles: true, 
        composed: true 
    });

    if(debug) {
        console.log('Fired -> ae-*:*|fetch-error', aeErrorEvent.detail);
    } 

    dispatchElement.dispatchEvent(aeErrorEvent); 

    return html`<pre class="error" style="color:red">Something went wrong (<i>"${errorInfo}"</i>)</pre>`
}