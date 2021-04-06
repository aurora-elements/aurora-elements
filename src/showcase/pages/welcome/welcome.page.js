import { LitElement } from "lit-element";
import { template } from "./welcome.template";

class Welcome extends LitElement {
    static get properties() {
      return {
        lang: { 
          type: String, 
          reflect: true
        }
      };
    }
    constructor() {
      super();
      this.lang = localStorage.getItem('locale')
    }
    /* Render template */
    render() {
      return template(this)
    }

}

customElements.define("welcome-page", Welcome);