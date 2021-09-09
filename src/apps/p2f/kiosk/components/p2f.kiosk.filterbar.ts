import {html, LitElement } from 'lit';
import { customElement } from "lit/decorators.js";

@customElement('ae-p2f-kiosk-filterbar')
export class P2fKioskFilterbar extends LitElement {
    render() {
        return html`
        <h1>hallo</h1>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-p2f-kiosk-filterbar': P2fKioskFilterbar;
    }
  }