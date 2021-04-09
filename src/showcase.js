import { LitElement } from "lit-element";
import { router } from "lit-element-router";
import { showcaseStyles } from './showcase.styles.js'
import { template } from "./showcase.template";
import "./standalone"


//Components
import "./showcase/components/navigation/nav-link.component";
import "./router-outlet";


//pages
import "./showcase/pages/welcome/welcome.page";
import "./showcase/pages/whatsNew/whatsNew.page";
import "./showcase/pages/notFound/notFound.page";

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

    /* Render template */
    render() {
      return template(this)
    }
  
    static get routes() {
      return [
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
          name: "not-found",
          pattern: "*",
          data: { title: "404 Not found" }
        },
      ];
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