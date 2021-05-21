import {LitElement, html, css} from 'lit';
import {customElement, property, query, queryAll } from 'lit/decorators.js';

@customElement('ae-wizard-tab')
export class WizardTab extends LitElement {
  /* Properties */
  @property()
  name?: string;

  /* Queries */


  /* Template */
  render() {
    return html`
        <slot></slot>
    `;
  }

  /* Methods */

  /* Styling */
  static styles = css`
    :host {
        display: none;
        contain: content;
    }
    :host([active]) {
      display: block
    }
  `;
}
