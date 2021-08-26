import "../../components/headlineBlock.component";
import { LitElement, html } from "lit";

class Imprint extends LitElement {
    /* Render template */
    render() {
      return html`
      <ae-headline-block 
          headline="Imprint">
          Impressum...
      </ae-headline-block>
  `
    }

}

customElements.define("imprint-page", Imprint);