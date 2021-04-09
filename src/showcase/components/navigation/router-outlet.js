import { LitElement, html } from "lit-element";
import { outlet } from "lit-element-router";

class RouterOutlet extends outlet(LitElement) {
  render() {
    return html`
      <welcome-page route="welcome"></welcome-page>
      <whatsnew-page route="whatsnew"></whatsnew-page>
      <not-found-page route="not-found"></not-found-page>
    `;
  }
}

customElements.define("router-outlet", RouterOutlet);