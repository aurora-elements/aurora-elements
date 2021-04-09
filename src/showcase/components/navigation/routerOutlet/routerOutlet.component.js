import { LitElement, html } from "lit-element";
import { outlet } from "lit-element-router";
import { template } from './routerOutlet.template';
import { styles } from './routerOutlet.styles';

class RouterOutlet extends outlet(LitElement) {
  static get styles() {
    return [styles];
  }

  render() {
    return template(this)
  }
  
}

customElements.define("router-outlet", RouterOutlet);