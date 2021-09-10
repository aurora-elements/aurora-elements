import {css, html, LitElement } from 'lit';
import { customElement, property, query } from "lit/decorators.js";
import { aeEvent } from '../../../../functionalities/directives/event.directive';
import { debugMode } from '../p2f.kiosk.app';

const styles = css`
    :host {
        width:100%;
        padding: 11.5px 20px;
        background: #fff;
        box-shadow: 0px 20px 30px -20px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
    }
`;

@customElement('ae-p2f-kiosk-filterbar')
export class P2fKioskFilterbar extends LitElement {

    @property({type: String})
    searchString: string;

    @query('input')
    input: HTMLInputElement;
    
    static get styles() {
        return [styles];
    }

    render() {
        return html`
        <input
            id="search"
            type="text"
            @keyup="${this.searchChanged}"
            .value="${this.searchString != undefined ? this.searchString : ''}"
            placeholder="Suche nach Dokument"/> 
        ${this.searchString != undefined && this.searchString.length > 0 ? html`
            <svg 
                style="width:24px;height:24px"
                @click=${this.resetHandler} 
                viewBox="0 0 24 24">
                <path 
                    fill="currentColor" 
                    d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
            </svg>
        ` : html``} 
        `;
    }

    resetHandler() {
        this.input.value = '';
        aeEvent(this, 'kiosk-filterbar', 'ae-p2f-kiosk-grid', 'search', {searchString: undefined}, debugMode);
    }

    searchChanged() {
        setTimeout(() => {
          if(this.searchInput.value.length != 0) {
            this.searchString = this.searchInput.value;
            aeEvent(this, 'kiosk-filterbar', 'ae-p2f-kiosk-grid', 'search', {searchString: this.searchString}, debugMode);
          } else {
            this.searchString = undefined;
          }
        },500)
    }
    private get searchInput(): HTMLInputElement {
        return this.shadowRoot!.querySelector('#search')! as HTMLInputElement;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-p2f-kiosk-filterbar': P2fKioskFilterbar;
    }
  }