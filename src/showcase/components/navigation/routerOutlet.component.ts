import { LitElement, html, css } from "lit";
import { customElement, property } from 'lit/decorators.js';
import { outlet } from "lit-element-router";
/* Pages */
import "../../pages/welcome/welcome.page";
import "../../pages/whatsNew/whatsNew.page";
import "../../pages/imprint/imprint.page";
import "../../pages/elements/card/card.page";
import "../../pages/elements/accordion/accordion.page";
import "../../pages/dashboard/number.dashlet.page";
import "../../pages/page2flip/p2f.grid.page";
import "../../pages/page2flip/kiosk/p2f.kiosk.page";
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
      pattern: "elements/card",
      data: { title: "Card" }
    },
    {
      name: "accordion",
      pattern: "elements/accordion",
      data: { title: "Accordion" }
    },
    {
      name: "number",
      pattern: "dashboard/number",
      data: { title: "Number Dashlets" }
    },
    {
      name: "p2fgrid",
      pattern: "/modules/page2flip/grid",
      data: { title: "page2flip Grid" }
    },
    {
      name: "p2fkiosk",
      pattern: "/apps/page2flip/kiosk",
      data: { title: "page2flip Kiosk" }
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
    @property({ type: String, attribute: 'route-active' }) routeActive!: string;

    render() {
        return html`
            <welcome-page route="welcome"></welcome-page>
            <whatsnew-page route="whatsnew"></whatsnew-page>
            <imprint-page route="imprint"></imprint-page>
            <card-page route="card"></card-page>
            <accordion-page route="accordion"></accordion-page>
            <number-dashlet-page route="number"></number-dashlet-page>
            <p2f-grid-page route="p2fgrid"></p2f-grid-page>
            <p2f-kiosk-page route="p2fkiosk"></p2f-kiosk-page>
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

    updated() {
        this.dispatchEvent(new CustomEvent('route-change-event', {bubbles: true, composed: true}));
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'router-outlet': RouterOutlet;
    }
}
