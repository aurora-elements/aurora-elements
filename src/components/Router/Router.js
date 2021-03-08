import { LitElement } from "lit-element";
import { template } from "./RouterTemplate.js";
import { styles } from './RouterStyles.js';

class AuroraRouter extends LitElement {
    /* Properties - LitElement */
    static get properties() {
        return {
            routeOutlet: { type: String, attribute: 'route-outlet' }
        };
    }

    /* Styles - LitElement */
    static get styles() {
        return [styles]
    }

    /* Render template */
    render() {
        return template(this)
    }

    firstUpdated() {
        super.firstUpdated();
        this.outlet = document.querySelector(this.routeOutlet);

        this.addEventListener('route-change', e => {
            this.handleRouteChange(e.detail.link)
        });

        let routeStart = document.querySelector('[route-start]');
        routeStart.classList.add('aurora-state-active');
        this.handleRouteChange(routeStart);

        window.onpopstate = () => {
            let path = window.location.pathname;
            let links = document.querySelectorAll('aurora-router-link');

            for(let i = 0; i < links.length; i++) {
                if( links[i].getAttribute('to') === path) {
                    this.handleRouteChange(links[i])
                }
            }
          };
    }

    async handleRouteChange(link) {
        const template = link.content;
        const url = link.getAttribute('to');
        const state = { template, url };

        const html = await (await fetch(template)).text();

        history.pushState(state, null, url);

        this.outlet.innerHTML = html;
    }
}

customElements.define('aurora-router', AuroraRouter);