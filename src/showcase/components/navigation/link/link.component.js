import { LitElement, html } from "lit-element";
import { navigator } from "lit-element-router";
import { styles } from "./link.styles";

class NavLink extends navigator(LitElement) {
  static get properties() {
    return {
      href: { type: String },
    };
  }
  static get styles() {
    return [styles];
  }

  constructor() {
    super();
    this.href = "";
  }
  render() {
    return html`
      <a class="nav-link" href="${this.href}" @click="${this.handleClick}">
          <slot></slot>
      </a>
    `;
  }
  handleClick(e) {
    e.preventDefault();
    let links = this.parentNode.querySelectorAll('nav-link');
    for(let i = 0;i < links.length; i++ ) {
        links[i].removeAttribute('route-active');
    }
    this.navigate(this.href);
    this.setAttribute('route-active', '');
   // document.title = 'hallo';
  }

  firstUpdated() {
    let links = this.parentNode.querySelectorAll('nav-link');

    for(let i = 0;i < links.length; i++ ) {
        if(links[i].href === window.location.pathname) { 
          links[i].setAttribute('route-active', '');  
        } else {
          links[i].removeAttribute('route-active');
        }
    }
  }
}

customElements.define("nav-link", NavLink);