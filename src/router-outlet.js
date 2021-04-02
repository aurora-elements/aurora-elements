import { LitElement, html } from "lit-element";
import { outlet } from "lit-element-router";

class RouterOutlet extends outlet(LitElement) {
  render() {
    return html` <slot></slot> `;
  }
}

customElements.define("router-outlet", RouterOutlet);