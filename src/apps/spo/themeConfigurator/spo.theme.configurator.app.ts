import {html, LitElement } from 'lit';
import { customElement } from "lit/decorators.js";
import { styles } from './spo.theme.configurator.styles.app';
import { masterTemplate } from './spo.theme.configurator.template.app';

@customElement('ae-spo-theme-configurator')
export class SpoThemeConfigurator extends LitElement {

/* Template */
    render() { return html`${masterTemplate()}`; }

/* CSS */
    static get styles() { return [styles]; }

}

/* Declaration */
declare global {
    interface HTMLElementTagNameMap {
        'ae-spo-theme-configurator': SpoThemeConfigurator;
    }
}