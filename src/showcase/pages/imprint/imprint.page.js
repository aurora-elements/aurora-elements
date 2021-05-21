import { LitElement } from "lit";
import { template } from "./imprint.template";

class Imprint extends LitElement {
    /* Render template */
    render() {
      return template(this)
    }

}

customElements.define("imprint-page", Imprint);