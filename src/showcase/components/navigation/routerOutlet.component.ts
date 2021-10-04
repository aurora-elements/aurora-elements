import { LitElement, html, css } from "lit";
import { customElement, property } from 'lit/decorators.js';
import { outlet } from "lit-element-router";
/* Pages */
import "../../pages/login/login.page";
import "../../pages/welcome/welcome.page";
import "../../pages/whatsNew/whatsNew.page";
import "../../pages/imprint/imprint.page";
import "../../pages/elements/card/card.page";
import "../../pages/elements/accordion/accordion.page";
import "../../pages/dashboard/number.dashlet.page";
import "../../pages/page2flip/p2f.grid.page";
import "../../pages/page2flip/kiosk/p2f.kiosk.page";
import "../../pages/space.one/themeConfigurator/spo.theme.configurator.page";
import "../../pages/notFound/notFound.page";

/* Routes */
export const routes = [
    {
      name: "login",
      pattern: "",
      data: { 
        title: "Login - marcuskramer.online",
        bodyClass: 'login' 
      }
    },
    {
      name: "whatsnew",
      pattern: "whatsnew",
      data: { 
        title: "What's new",
        bodyClass: 'whatsnew' 
      }
    },
    {
      name: "imprint",
      pattern: "imprint",
      data: { 
        title: "Imprint",
        bodyClass: 'imprint'  
      }
    },
    {
      name: "card",
      pattern: "elements/card",
      data: { 
        title: "Card",
        bodyClass: 'card'  
      }
    },
    {
      name: "accordion",
      pattern: "elements/accordion",
      data: { 
        title: "Accordion",
        bodyClass: 'accordion'  
      }
    },
    {
      name: "number",
      pattern: "dashboard/number",
      data: { 
        title: "Number Dashlets",
        bodyClass: 'number-dashlet'  
      }
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
      name: "spaceOneThemeConfigurator",
      pattern: "/apps/space.one/theme",
      data: { title: "space.one Theme Configurator" }
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
    @property({ type: String, attribute: 'route-active' }) r
    outeActive!: string;

    @property({type: Boolean, attribute: false})
    auth: boolean;

    firstUpdated() {
      this.addEventListener('ae-login:*|authenticated', () => {
        this.auth = true;
      })
      if(sessionStorage.getItem('authenticated') != null) {
        this.auth = sessionStorage.getItem('authenticated').toLowerCase() == 'true' ? true : false;
      }
    }

    render() {
        return html`
            <login-page route="login"></login-page>
            <imprint-page route="imprint" style="display: none;"></imprint-page>
            ${this.auth ? 
              html`
                <welcome-page route="welcome" style="display: none;"></welcome-page>
                <whatsnew-page route="whatsnew" style="display: none;"></whatsnew-page>          
                <card-page route="card" style="display: none;"></card-page>
                <accordion-page route="accordion" style="display: none;"></accordion-page>
                <number-dashlet-page route="number" style="display: none;"></number-dashlet-page>
                <p2f-grid-page route="p2fgrid" style="display: none;"></p2f-grid-page>
                <p2f-kiosk-page route="p2fkiosk" style="display: none;"></p2f-kiosk-page>
                <spo-theme-configurator-page route="spaceOneThemeConfigurator" style="display: none;"></spo-theme-configurator-page>
                <not-found-page route="not-found" style="display: none;"></not-found-page>
              ` : 
              html``

            }
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
