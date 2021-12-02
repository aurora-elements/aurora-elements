import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { aeEvent } from "../../functionalities/directives/event.directive";
import { styles } from "./scroll-top.styles";
import { template } from "./scroll-top.template";

@customElement("ae-scroll-top")
export class AeScrollTop extends LitElement {
  /* Properties - LitElement */
  @property({ type: Number, attribute: "visible-from" })
  visibleFrom: number = 50;
  @property({ type: Boolean, attribute: "debug-mode" })
  debugMode: boolean = false;

  /* First updated - LitElement */
  firstUpdated() {
    this.addEventListener("click", () => this.scroll());
    window.onscroll = this.visiblility.bind(this);
  }

  /* Methods */
  visiblility() {
    if (
      document.body.scrollTop > this.visibleFrom ||
      document.documentElement.scrollTop > this.visibleFrom
    ) {
      this.setAttribute("visible", "");
    } else {
      this.removeAttribute("visible");
    }
  }
  scroll() {
    aeEvent(this, 'scroll-top', '*', 'scroll-top', null, this.debugMode);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* Styles - LitElement */
  static styles = [styles];

  /* Render template */
  protected render() {
    return html`
      ${template()}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ae-scroll-top": AeScrollTop;
  }
}
