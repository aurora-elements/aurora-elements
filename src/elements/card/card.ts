import { LitElement } from "lit";
import { property, query, state } from "lit/decorators.js";
import { template } from "./card.template";
import { styles } from "./card.styles";
import { auroraCustomElement } from "../../functionalities/decorators";
import { AuroraElement } from "../../functionalities/mixins";
import { aeEvent, attr } from "../../functionalities/directive";

@auroraCustomElement("ae-card")
export class AeCard extends AuroraElement(LitElement, {
  styles, 
  template
}) {
  /* Properties */
  @property() 
  label: string;

  @property() 
  image: string;

  @property() 
  href: string;

  @property({type: Boolean}) 
  embedded = false;

  @property() 
  target: string;

  @property({type: Boolean, attribute: 'debug-mode'})
  debugMode = false;

  /* state */
  @state()
  loaded: boolean = false;
  
  /* Queries */
  @query("img") 
  imageEl: HTMLImageElement;

  protected firstUpdated(_changedProperties: Map<string | number | symbol, unknown>): void {
    if(this.image) {
      this.imageEl.addEventListener("load", () => {
        attr({
          target: this, 
          action: 'set',
          key: 'loaded'
        })
        aeEvent({
            dispatchElement: this, 
            trigger: 'card', 
            target: '*', 
            activity:'image-loaded', 
            eventDetails: {
                trigger: this
            }, 
            debug: this.debugMode
        })
      });
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ae-card": AeCard;
  }
}
