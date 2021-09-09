import {css, html, LitElement } from 'lit';
import { customElement, property } from "lit/decorators.js";

const styles = css`
    :host {
        width:100%;
        padding: 10px 20px;
        background: #fff;
        box-shadow: 0px 20px 30px -20px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
    }
`;

@customElement('ae-p2f-kiosk-filterbar')
export class P2fKioskFilterbar extends LitElement {

    @property({type: String})
    searchString: string;
    
    static get styles() {
        return [styles];
    }

    render() {
        return html`
        <input
            id="search"
            type="text"
            @change="${this.searchChanged}"
            .value="${this.searchString != undefined ? this.searchString : ''}"
            placeholder="Suche nach Dokument"
            style="float:left;width:100%;margin-top:10px;padding:5px 10px;"/>  
        `;
    }

    searchChanged() {
        setTimeout(() => {
          if(this.searchInput.value.length != 0) {
            this.searchString = this.searchInput.value;
            console.log('searchString: ', this.searchString)
            console.log('searchString length: ', this.searchString.length)
          } else {
            this.searchString = undefined; console.log('searchString: ', this.searchString) 
          }
        },300)
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