import { LitElement, html, css } from "lit-element";
import { router } from "lit-element-router";
import "./standalone"
import "./showcase.css"
import { AppStyles } from './standalone.styles.js'

//Components
import "./showcase/components/navigation/nav-link.component";
import "./router-outlet";

//pages
import "./showcase/pages/home/home.page";
import "./showcase/pages/contact/contact.page";
import "./showcase/pages/about/about.page";

class App extends router(LitElement) {
    static get properties() {
      return {
        route: { type: String },
        params: { type: Object },
        query: { type: Object },
      };
    }

    static get styles() {
      return [css``, AppStyles];
    }
  
    static get routes() {
      return [
        {
          name: "home",
          pattern: "",
          data: { title: "Home" },
        },
        {
          name: "about",
          pattern: "about",
        },
        {
          name: "contact",
          pattern: "contact",
        },
        {
          name: "not-found",
          pattern: "*",
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
      console.log(route, params, query, data);
    }
  
    render() {
      return html`
        <div class="nav-container">
          <nav-link href="/">Home</nav-link>
          <nav-link href="/contact">Contact</nav-link>
          <nav-link href="/about">About</nav-link>
        </div>
  
        <router-outlet active-route=${this.route}>
          <home-page route="home"></home-page>
          <about-page route="about"></about-page>
          <contact-page route="contact"></contact-page>
          <h1 route="not-found">Not Found</h1>
        </router-outlet>
      `;
    }
  }
  
  customElements.define("app-container", App);


console.log("Aurora elements Showcase loaded")