import { LitElement, css, html } from "lit-element";
class Header extends LitElement {
  static get styles() {
    return [css``];
  }
  render() {
    return html` <div>This is a header in shadow dom</div>`;
  }
  static get properties() {
    return {
      eg: {
        type: String,
      },
    };
  }
  constructor() {
    super();
  }
}

customElements.define("app-header", Header);