import { LitElement } from "lit";
import { property } from "lit/decorators.js";
import { aeEvent } from "../../functionalities/directive";
import { styles } from "./scroll-top.styles";
import { template } from "./scroll-top.template";
import { auroraCustomElement } from "../../functionalities/decorators";
import { AuroraElement } from "../../functionalities/mixins";

@auroraCustomElement('ae-scroll-top')
export class AeScrollTop extends AuroraElement(LitElement, {
  styles,
  template
}) {
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

}

declare global {
  interface HTMLElementTagNameMap {
    "ae-scroll-top": AeScrollTop;
  }
}
