import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { aeEvent } from "../../../../../functionalities/directives/event.directive";
import { debugMode } from "../../p2f.kiosk.templates.app";
import { styles } from './p2f.kiosk.header.styles'
import { headerTemplate } from "./p2f.kiosk.header.template";

@customElement('ae-p2f-kiosk-header')
export class P2fKioskHeader extends LitElement {

/* Properties */
    @property({attribute: 'logo'})
    logo: any;

    @property({attribute: false})
    data: any;

/* Methods */
    showOverview() {
        aeEvent(this, '*', 'p2f-kiosk-overview', 'show', {}, debugMode);
    }

/* CSS */ 
    static get styles() { return [styles]; }

/* Template */
    render() { return html`${headerTemplate(this)}`; }
    
}

/* Declaration */
declare global {
    interface HTMLElementTagNameMap {
        'ae-p2f-kiosk-header': P2fKioskHeader;
    }
}