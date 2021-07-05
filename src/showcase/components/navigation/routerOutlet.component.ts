import { LitElement, html, css } from "lit";
import { customElement } from 'lit/decorators.js';
import { outlet } from "lit-element-router";
/* Pages */
import "../../pages/welcome/welcome.page";
import "../../pages/whatsNew/whatsNew.page";
import "../../pages/imprint/imprint.page";
import "../../pages/visualisation/card/card.page";
import "../../pages/notFound/notFound.page";

/* Routes */
export const routes = [
    {
      name: "welcome",
      pattern: "",
      data: { title: "Welcome" }
    },
    {
      name: "whatsnew",
      pattern: "whatsnew",
      data: { title: "What's new" }
    },
    {
      name: "imprint",
      pattern: "imprint",
      data: { title: "Imprint" }
    },
    {
      name: "card",
      pattern: "visualisation/card",
      data: { title: "Imprint" }
    },
    {
      name: "not-found",
      pattern: "*",
      data: { title: "404 Not found" }
    },
  ];

/* Router outlet */  
@customElement('router-outlet')
export class RouterOutlet extends outlet(LitElement) {
  render() {
    return html`
        <welcome-page route="welcome"></welcome-page>
        <whatsnew-page route="whatsnew"></whatsnew-page>
        <imprint-page route="imprint"></imprint-page>
        <card-page route="card"></card-page>
        <not-found-page route="not-found"></not-found-page>
    `;
}

static get styles() {
    return css`
        [route] {
            display: block;
        }
        [route]:not([style*="display: none"]) {
            animation: slide-down 0.5s cubic-bezier(0.75, 0.02, 0.5, 1);
        }
        @keyframes slide-down {
            0% {
            opacity: 0;
            transform: translateY(50px) scale(1.1);
            }
            100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            }
        }
    `;
  }
}

declare global {
    interface HTMLElementTagNameMap {
        'router-outlet': RouterOutlet;
    }
}
