import { html, LitElement } from 'lit';
import { customElement, property, query } from "lit/decorators.js";
import { aeEvent } from '../../../../../functionalities/directives/event.directive';
import { debugMode } from '../../p2f.kiosk.templates.app';
import { styles } from './p2f.kiosk.filterbar.styles';
import { filterbarTemplate } from './p2f.kiosk.filterbar.template';

@customElement('ae-p2f-kiosk-filterbar')
export class P2fKioskFilterbar extends LitElement {

/* Properties */
    @property({type: String})
    searchString: string;

/* Queries */
    @query('input')
    input: HTMLInputElement;

/* Methods */
    resetHandler() {
        this.input.value = '';
        aeEvent(this, 'kiosk-filterbar', 'ae-p2f-kiosk-grid', 'search', {searchString: undefined}, debugMode);
    }

    searchChanged() {
        setTimeout(() => {
          if(this.input.value.length != 0) {
            this.searchString = this.input.value;
            aeEvent(this, 'kiosk-filterbar', 'ae-p2f-kiosk-grid', 'search', {searchString: this.searchString}, debugMode);
          } else {
            this.searchString = undefined;
            aeEvent(this, 'kiosk-filterbar', 'ae-p2f-kiosk-grid', 'search', {searchString: this.searchString}, debugMode);
          }
        },500)
    }

/* CSS */
    static get styles() { return [styles]; }

/* Template */
    render() { return html`${filterbarTemplate(this)}`; }
}

/* Declaration */
declare global {
    interface HTMLElementTagNameMap {
        'ae-p2f-kiosk-filterbar': P2fKioskFilterbar;
    }
  }