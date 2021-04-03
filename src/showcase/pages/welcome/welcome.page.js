import { LitElement } from "lit-element";
import { template } from "./welcome.template";

class Welcome extends LitElement {
    /* Render template */
    render() {
      return template(this)
    }
}

customElements.define("welcome-page", Welcome);