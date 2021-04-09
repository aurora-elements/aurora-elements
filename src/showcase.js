import { LitElement } from "lit-element";
import { router } from "lit-element-router";
import { showcaseStyles } from './showcase.styles.js'
import { template } from "./showcase.template";
import { routes } from "./showcase/components/navigation/navigation.routes";
import "./standalone"

//Components
import "./showcase/components/navigation/link/link.component";
import "./showcase/components/navigation/routerOutlet/routerOutlet.component";

//pages
import "./showcase/components/navigation/pages.imports";

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