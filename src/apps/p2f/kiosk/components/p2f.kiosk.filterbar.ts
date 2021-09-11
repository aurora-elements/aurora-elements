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
    input {
        height: 100%;
        max-width: 300px;
        width: 100%;
        border-width: 0 0 1px 0;
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
        <svg 
            style="width:24px;height:24px" 
            viewBox="0 0 24 24">
            <path 
                fill="currentColor" 
                d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
        </svg>
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