import { LitElement } from "lit";
import { property } from "lit/decorators.js";
import { aeEvent } from "../../functionalities/directives/event.directive";
import { styles } from "./scroll-top.styles";
import { template } from "./scroll-top.template";
import { auroraElement } from "../../functionalities/decorators";

@auroraElement('ae-scroll-top')
export class AeScrollTop extends LitElement {
  /* Properties - LitElement */
  @property({ type: Number, attribute: "visible-from" })
  visibleFrom: number = 50;

  @property({ type: Boolean, attribute: "debug-mode" })
  debugMode: boolean = false;

  /* Methods */
  private visiblility() {
    if (
      document.body.scrollTop > this.visibleFrom ||
      document.documentElement.scrollTop > this.visibleFrom
    ) {
      this.setAttribute("visible", "");
    } else {
      this.removeAttribute("visible");
    }
  }

  private scrollUp() {
    aeEvent({
      dispatchElement: this, 
      trigger: "scroll-top", 
      target: "*", 
      activity: "scroll-top", 
      eventDetails: null, 
      debug: this.debugMode
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* First updated - LitElement */
  protected firstUpdated(
    _changedProperties: Map<string | number | symbol, unknown>
  ): void {
    this.addEventListener("click", () => this.scrollUp());

    window.onscroll = this.visiblility.bind(this);
  }

  /* Styles - LitElement */
  static styles = [styles];

  /* Render template */
  protected render() { return template() }
}

declare global {
  interface HTMLElementTagNameMap {
    "ae-scroll-top": AeScrollTop;
  }
}
