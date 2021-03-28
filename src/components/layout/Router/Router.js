import { LitElement } from "lit-element";
import { template } from "./RouterTemplate.js";
import { styles } from './RouterStyles.js';

class AuroraRouter extends LitElement {
    /* Properties - LitElement */
    static get properties() {
        return {
            routeOutlet: { 
                type: String, 
                attribute: 'route-outlet' 
            },
            domainName: { 
                type: String, 
                attribute: 'domain-name'
            }
        };
    }

    /* Styles - LitElement */
    static get styles() {
        return [styles]
    }

    constructor() {
        super();

        this.domainName = 'aurora elements';
    }

    /* Render template */
    render() {
        return template(this)
    }

    firstUpdated() {
        super.firstUpdated();
        this.outlet = document.querySelector(this.routeOutlet);

        this.addEventListener('route-change', e => {
            this.handleRouteChange(e.detail.link);
        });

        let routeStart = document.querySelector('[is-route-start]');
        routeStart.classList.add('aurora-state-active');
        this.handleRouteChange(routeStart);
        document.title = (routeStart.pageTitle || routeStart.label + ' - ' + this.domainName) || document.title;

        window.addEventListener('popstate', () => {
            let path = window.location.pathname;
            let links = document.querySelectorAll('aurora-router-link');
            let parents = document.querySelectorAll('aurora-accordion-item');

            for(let i = 0; i < parents.length; i++) {
                parents[i].removeAttribute('expanded');
            }

            for(let i = 0; i < links.length; i++) {
                links[i].classList.remove('aurora-state-active');
                if( links[i].getAttribute('to') === path) {
                    this.handleRouteChange(links[i]);
                    links[i].classList.add('aurora-state-active');
                    links[i].parentElement.setAttribute('expanded', '');
                    document.title = (links[i].pageTitle || links[i].label + ' - ' + this.domainName) || document.title;

                }
            }
        });

        window.addEventListener('unload', e => {
            e.preventDefault();
            window.location.href = "/";
          });
          
    }

    async handleRouteChange(link) {
        const template = link.content + '.html';
        const url = link.getAttribute('to');
        const state = { template, url };

        const html = await (await fetch(template)).text();

        this.outlet.classList.remove('route-change-done');
        this.outlet.classList.add('route-change-start');

        history.pushState(state, null, url);

        this.outlet.innerHTML = html;

        document.title = (link.pageTitle || link.label + ' - ' + this.domainName) || document.title;

        this.outlet.classList.remove('route-change-start');
        this.outlet.classList.add('route-change-done');
    }
}

customElements.define('aurora-router', AuroraRouter);