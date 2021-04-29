import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { router } from "lit-element-router";
import { showcaseStyles } from './showcase.styles'
import { template } from "./showcase.template.js";
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

@customElement('ae-showcase')
export class AeShowcase extends router(LitElement) {
  @property({ type: String }) route = '';
  @property({ type: Object }) params = {};
  @property({ type: Object }) query = {};


  static get styles() {
    return [showcaseStyles];
  }

  render() {
    return template(this)
  }

  static get routes() {
    return routes;
  }

  router(route: string, params: {}, query: {}, data: { title: string; }) {
    this.route = route;
    this.params = params;
    this.query = query;
    document.title = data.title ? data.title + ' - aurora-elements showcase' : 'aurora-elements showcase';
  }

}


console.log("Aurora elements Showcase loaded")