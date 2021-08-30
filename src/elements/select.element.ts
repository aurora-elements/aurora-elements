import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('ae-select')
export class AeSelect extends LitElement {
    @property()
    options: any = [];
    @property()
    selected: string;
    @property()
    onChange:any

    protected render() {
        return html`  
            <select @change="${this.onChange}">                   
                ${this.options.map(option => html`
                    <option 
                        value="${option.value}" 
                        ?selected=${this.selected === option.value}>
                        ${option.text}
                    </option>
                `)}                      
            </select>   
        `;
      }
      protected createRenderRoot() {
        return this;
    }
}

declare global {
    interface HTMLElementTagNameMap {
      "ae-select": AeSelect;
    }
}

/*
          .options="${[{ value: 'Not connected', text: 'Not connected' }, { value: 'Connected', text: 'Connected' }]}"
          .selected="${this.sorting}"
          .onChange="${e => this.sorting = e.target.value}"
*/