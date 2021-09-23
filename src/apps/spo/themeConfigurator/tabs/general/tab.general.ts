import {html, LitElement } from 'lit';
import { customElement } from "lit/decorators.js";
import { styles } from './tab.general.styles';
import { masterTemplate } from './tab.general.template';

@customElement('ae-spo-theme-configurator-general')
export class SpoThemeConfiguratorGeneral extends LitElement {

/* Template */
    render() { return html`${masterTemplate()}`; }

/* CSS */
    static get styles() { return [styles]; }

}

/* Declaration */
declare global {
    interface HTMLElementTagNameMap {
        'ae-spo-theme-configurator-general': SpoThemeConfiguratorGeneral;
    }
}