import { LitElement } from "lit-element";
import { router } from "lit-element-router";
import { showcaseStyles } from './showcase.styles.js'
import { template } from "./showcase.template";
import { routes } from "./showcase/components/navigation/navigation.routes";
import "./standalone"
import "./elements/foundation/themeSwitcher/themeSwitcher.component.js";

//Components
import "./showcase/components/navigation/link/link.component";
import "./showcase/components/navigation/routerOutlet/routerOutlet.component";

//pages
import "./showcase/components/navigation/pages.imports";

// register sw
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });

}


class AeShowcase extends router(LitElement) {
    static get properties() {
      return {
        route: { type: String },
        params: { type: Object },
        query: { type: Object },
      };
    }

    static get styles() {
      return [showcaseStyles];
    }

    render() {
      return template(this)
    }
  
    static get routes() {
      return routes;
    }
  
    constructor() {
      super();
      this.route = "";
      this.params = {};
      this.query = {};
    }
  
    router(route, params, query, data) {
      this.route = route;
      this.params = params;
      this.query = query;
      document.title = data.title ? data.title + ' - aurora-elements showcase' : 'aurora-elements showcase';
    }
  
  }
  
  customElements.define("ae-showcase", AeShowcase);


console.log("Aurora elements Showcase loaded")