import { LitElement, html, css } from "lit";
import { customElement, property, queryAssignedNodes } from "lit/decorators.js";

@customElement('ae-input-wrapper')
export class AeInputWrapper extends LitElement {
    @property({type: String})
    label: string;

    @queryAssignedNodes('', true)
    defaultSlotNodes: HTMLInputElement;

  static styles = [css`
      * {
        box-sizing: border-box;
      }
      :host {
        position: relative;
        margin: 1rem 0;
        width:100%;
        float:left;
      }
      ::slotted(input.outline) {
        border: 1px solid #333333;
        border-radius: 5px;
      }
      label {
        position: absolute;
        font-size: 1rem;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: #fff;
        color: gray;
        padding: 0 0.3rem;
        margin: 0 0.5rem;
        transition: 0.1s ease-out;
        transform-origin: left top;
        pointer-events: none;
      }
      ::slotted(input) {
        font-size: 1rem;
        outline: none;
        border: none;
        border-radius: 0px;
        padding: 1rem 0.6rem;
        color: #333333;
        transition: 0.1s ease-out;
        border-bottom: 1px solid #333333;
        background: transparent;
        cursor: text;
        margin-left: auto;
        width: 95%;
        margin-right: auto;
      }
      ::slotted(input:focus) {
        border-color: #b949d5;
      }
      slot:focus + label {
        color: #b949d5;
        top: 0;
        transform: translateY(-50%) scale(0.9);
      }
      input:not(:placeholder-shown) + label {
        top: 0;
        transform: translateY(-50%) scale(0.9);
      }
      input:focus:not(.outline) ~ label,
      input:not(:placeholder-shown):not(.outline) ~ label {
        padding-left: 0px;
      }
      input:disabled,
      input:disabled ~ .label {
        opacity: 0.5;
      }
    `
  ];

  handleSlotchange(e:any) {
    console.log('this.defaultSlotNodes: ', this.defaultSlotNodes)
    if(this.shadowRoot.activeElement === this.defaultSlotNodes) {
      console.log('focus', e)
      
    } 
  }
  firstUpdated() {
 /*   this.defaultSlotNodes.addEventListener('focus', () => {
      this.classList.add('focus')
    }) */
  }
 
  protected render() {
    return html`
        <slot @slotchange=${this.handleSlotchange}></slot>
        <label>${this.label}</label>
    `;
  }
}

declare global {
    interface HTMLElementTagNameMap {
      "ae-input": AeInputWrapper;
    }
  }
