import {html, LitElement } from 'lit';
import { customElement, property } from "lit/decorators.js";
import { styles } from './tab.styles.element';
import { masterTemplate } from './tab.template.element';

@customElement('ae-tab')
export class Tab extends LitElement {

/* Properties */
    @property()
    name: string;

/* Template */
    render() { return html`${masterTemplate()}`; }

/* CSS */
    static get styles() { return [styles]; }

}

/* Declaration */
declare global {
    interface HTMLElementTagNameMap {
        'ae-tab': Tab;
    }
}