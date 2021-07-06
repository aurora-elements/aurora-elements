import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { router } from "lit-element-router";
import { until } from 'lit/directives/until';
import { repeat } from 'lit/directives/repeat.js';
import { locale } from './functionalities/directives/translater.directive';
import logo from './showcase/img/aurora-logo.png';
import translate_de from './showcase/components/navigation/translations/de.json';
import translate_en from './showcase/components/navigation/translations/en.json';
import { routes } from "./showcase/components/navigation/routerOutlet.component";
import "./standalone"
import "./elements/interaction/theme.switcher.element";

//Components
import "./showcase/components/navigation/link.component";
import "./showcase/components/navigation/routerOutlet.component";

const requestUrl = `${locale === 'de' ? translate_de : translate_en}`;

const nav = fetch(requestUrl).then(res => res.json());

const styles = css`
 /* scrollbar */
  * {
    scrollbar-width: thin;
    scrollbar-color: 
    var(--showcase-scrollBar--bg, var(--ae-scrollBar--bg, #9c9c9c))  
    var(--showcase-scrollBar--color, var(--ae-scrollBar--color, #e0e6ed));
  }
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: var(--showcase-scrollBar--color, var(--ae-scrollBar--color, #e0e6ed));
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--showcase-scrollBar--bg, var(--ae-scrollBar--bg, #9c9c9c)); 
    border-radius: 20px;
    border: 3px solid var(--showcase-scrollBar--color, var(--ae-scrollBar--color, #e0e6ed));
  }

  /* helpers */
  .space-bottom-m40 {
    margin-bottom: 40px;
  }

  :host {
    margin: 0;
    height: 100vh;
    width: 100%;
    outline: none;
    background-color: var(--showcase--bg, var(--showcase-white--1, #ffffff));
    font-family: var(--showcase--fontFamily, var(--ae--fontFamily, Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif));
    text-rendering: optimizeLegibility;
    font-size: 15px;
    display: grid;
    grid-template-columns: minmax(250px, 380px) minmax(600px, 1fr);
    grid-template-areas: 'nav content';
  }
  ::part(space-bottom-m40) {
    margin-bottom: 40px;
  }

  .logo {
    max-width: 200px;
    display: block;
    margin: 20px auto -10px auto;
  }
  .claim {
    letter-spacing: 3px;
    font-size: 10px;
    text-transform: uppercase;
    color: var(--showcase-claim-color, var(--grey-dark));
    width: 100%;
    float: left;
    text-align: center;
    padding-bottom: 40px;
    border-bottom: 1px solid
      var(--accordion-item-border-color, var(--border-color, #c1c1c1));
  }
  .nav {
    --accordion-item-color-expanded: var(--font-color-primary);
    --accordion-item-border-color: var(--grey-middle);
    grid-area: nav;
    background-color: var(--grey-ligthest);
    border-right: 1px solid var(--grey-middle);
    overflow-y: auto;
    position: relative;
  }
  .nav nav {
    padding: 40px;
    float:left;
    width:100%;
    box-sizing: border-box;
  }
  nav span {
      width:100%;
      float:left;
      margin-bottom:10px;
      text-transform: uppercase;
      opacity:.3;
  }
  nav div {
      margin-bottom:20px;
      float:left;
      width:100%;
  }
  nav nav-link {
      float:left;
      width:100%;
      margin-bottom:10px;
  }

  .copyright {
    font-weight: 400;
    color: var(--grey-dark);
    display: block;
    line-height: 24px;
    opacity: .5;
    float: left;
  }
  .copyright span, footer nav-link {
    float: left; 
    font-size: 80%;
    padding-bottom:0;
    margin-left:20px;
  }

  .content {
    grid-area: content;
    overflow-y: auto;
    overflow-x: hidden;
  }

  ae-theme-switcher {
    position: absolute;
    right: 40px;
    top: 20px;
  }

  .content #main {
    transition: opacity 5s linear 0s;
    padding: 0 60px 60px;
    opacity: 1;
  }
  #main.route-change {
    opacity: 0;
    animation: fade 5s linear 0;
  }
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 50%;
    }
  }
  .content footer {
    padding: 0 60px 60px 60px;
  }
  .content #main,
  .content footer {
    float: left;
    width: 100%;
    box-sizing: border-box;
    max-width: 1080px;
  }
  aurora-code-mirror,
  aurora-headline-block[is-subheadline] {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 900px) {
    :host {
      grid-template-columns: 1fr;
      grid-template-areas: 'content';  
    }
    .nav {display: none;}
    .content #main, .content footer {
      padding: 0 20px 20px 20px;  
    } 
  }
`;


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
        return [styles];
    }

    render() {
        return html`
            <div class="nav">
                <a href="/">
                    <img class="logo" src="${logo}" />
                </a>
                <span class="claim">AURORA-ELEMENTS</span>
                <nav>
                    ${until(
                        nav
                        .then(items => html`                        
                            ${repeat(items, (item: any) => item.id, (item, index) => html`
                                ${item.visible ?
                                    html`    
                                        <div>
                                            <span>${item.label}</span>
                                            ${repeat(item.items, (item: any) => item.id, (item) => html`
                                                <nav-link href="${item.href}">
                                                    ${item.label}
                                                </nav-link> 
                                            `)}
                                        </div>`

                                    : html``
                                }
                            `)}
                        `),
                        html``
                    )}  
                </nav>
                
            </div>
            <section id="content" class="content">
                <ae-theme-switcher target="ae-showcase"></ae-theme-switcher>
                <div id="main">
                    <router-outlet active-route=${this.route}>
                    </router-outlet>
                </div>
                <footer>
                    <div class="copyright">
                        <span>&copy;2021 Marcus Kramer</span> 
                    </div>
                    <nav-link href="/imprint">Imprint</nav-link> 
                </footer>
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
          }
        ) {
          this.route = route;
          this.params = params;
          this.query = query;
          document.title = data.title ? data.title + ' - aurora-elements showcase' : 'aurora-elements showcase';
          window.scrollTo({
            top: 0,
            behavior: "auto"
          })
    }

}