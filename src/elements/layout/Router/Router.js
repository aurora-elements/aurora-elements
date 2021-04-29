import { LitElement } from "lit";
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
        this.outlet = document.querySelector(this.routeOutlet); console.log('outlet: ', this.routeOutlet);

        this.addEventListener('route-change', e => { console.log('route change event');
            this.handleRouteChange(e.detail.link); console.log('route change event detail link: ', e.detail.link);
        });

        let routeStart = document.querySelector('[is-route-start]');console.log('routestart: ', routestart);
        routeStart.classList.add('aurora-state-active');
        this.handleRouteChange(routeStart);
        document.title = (routeStart.pageTitle || routeStart.label + ' - ' + this.domainName) || document.title;

        window.addEventListener('popstate', () => { console.log('popstate');
            let path = window.location.pathname; console.log('popstate path: ', path);
            let links = document.querySelectorAll('aurora-router-link'); console.log('popstate links: ', links);
            let parents = document.querySelectorAll('aurora-accordion-item'); console.log('popstate parents: ', parents);

            for(let i = 0; i < parents.length; i++) { console.log('popstate parents remove expanded');
                parents[i].removeAttribute('expanded');
            }

            for(let i = 0; i < links.length; i++) { console.log('popstate for links');
                links[i].classList.remove('aurora-state-active');
                if( links[i].getAttribute('to') === path) { console.log('popstate for links if');
                    this.handleRouteChange(links[i]);
                    links[i].classList.add('aurora-state-active');
                    links[i].parentElement.setAttribute('expanded', '');
                    document.title = (links[i].pageTitle || links[i].label + ' - ' + this.domainName) || document.title;

                }
            }
        });

        window.addEventListener('unload', e => { console.log('unload');
            e.preventDefault();
            window.location.href = "/";
          });
          
    }

    async handleRouteChange(link) {console.log('handleRouteChange link: ', link);
        const template = link.content + '.html'; console.log('template: ', template);
        const url = link.getAttribute('to'); console.log('url: ', url);
        const state = { template, url }; console.log('state: ', state);

        const html = await (await fetch(template)).text(); console.log('html: ', html);

        history.pushState(state, null, url);
        console.log('history push: ', history.pushState(state, null, url))

        this.outlet.innerHTML = html;

        document.title = (link.pageTitle || link.label + ' - ' + this.domainName) || document.title;
    }
}

customElements.define('aurora-router', AuroraRouter);