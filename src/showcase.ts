import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { router } from "lit-element-router";
import { until } from 'lit/directives/until';
import { repeat } from 'lit/directives/repeat.js';
import { locale } from './functionalities/directives/translater.directive';
import logo from './showcase/img/aurora-logo.png';
import translate_de from  './showcase/components/navigation/translations/de.json';
import translate_en from './showcase/components/navigation/translations/en.json';
import { showcaseStyles } from './showcase.styles'
import { routes } from "./showcase/components/navigation/navigation.routes";
import "./standalone"
import "./elements/interaction/theme.switcher.element";

//Components
import "./showcase/components/navigation/link/link.component";
import "./showcase/components/navigation/routerOutlet/routerOutlet.component";

//pages
import "./showcase/components/navigation/pages.imports";

const requestUrl = `${locale === 'de' ? translate_de : translate_en}`;

const nav = fetch(requestUrl).then(res => res.json());

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
    return html`
        <div class="nav">
            <a href="/">
                <img class="logo" src="${logo}" />
            </a>
            <span class="claim">AURORA-ELEMENTS</span>
            <ae-accordion slot="link">
                ${until(
                    nav
                    .then(items => html`                        
                      ${repeat(items, (item:any) => item.id, (item, index) => html`
                        ${item.visible?
                              html`    
                                <ae-accordion-item
                                  ?expanded=${index === 0} 
                                  label="${item.label}">
                                  ${repeat(item.items, (item:any) => item.id, (item) => html`
                                      <nav-link href="${item.href}">${item.label}</nav-link> 
                                    `                                            
                                  )}
                                </ae-accordion-item>`
                              : html``
                            }
                      `)}
                    `),
                    html``
                )}  
            </ae-accordion>
            <div class="copyright">
                <span>&copy;2021 Marcus Kramer</span>
                <nav-link href="/imprint">Imprint</nav-link>  
            </div>
        </div>
        <section id="content" class="content">
            <ae-theme-switcher target="ae-showcase"></ae-theme-switcher>
            <div id="main">
                <router-outlet active-route=${this.route}>
                </router-outlet>
            </div>
            <footer></footer>
        </section>
        <ae-scroll-top scroll-container="#content"></ae-scroll-top>
    `
  }

  static get routes() {
    return routes;
  }

  router(
    route: string, 
    params: {}, 
    query: {}, 
    data: { 
      title: string; 
    }) {
    this.route = route;
    this.params = params;
    this.query = query;
    document.title = data.title ? data.title + ' - aurora-elements showcase' : 'aurora-elements showcase';
  }

}


console.log("Aurora elements Showcase loaded")