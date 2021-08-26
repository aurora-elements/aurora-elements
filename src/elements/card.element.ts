import "./loader.element";
import { LitElement, html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";

const styles = css`
  :host {
    contain: content;
    position:relative;
    display: grid;
    background-color: var(
      --card--backgroundColor,
      var(--ae--backgroundColor, #ffffff)
    );
    border-radius: var(--card-radius, var(--ae-radius, 0.4rem));
    box-shadow: var(
      --card-shadow,
      var(--ae-shadow, 0 0.133rem rgba(0, 0, 0, 0.05))
    );
  }

  :host([embedded]) {
    box-shadow: none;
    border-radius: none;
  }

  :host([loaded]) {
    overflow: hidden;
  }
  a {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index:10;
  }
  figure {
    margin: 0;
    width: 100%;
    position: relative;
  }
  img {
    opacity: 0;
    transition: opacity 300ms ease;
    max-width: 100%;
    max-height: 100%;
  }
  :host([loaded]) img {
    opacity: 1;
    display: block;
    margin: 0 auto;
  }

  ae-loader {
    width: 100px;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  :host([loaded]) ae-loader {
    display: none;
  }

  /* header */
  header {
    padding: calc(var(--card-header-padding, var(--ae-padding, 20px)) / 2)
      var(--card-header-padding, var(--ae-padding, 20px));
  }
  h3 {
    font-size: var(--card-label-fontSize, var(--ae-fontSize, inherit));
    color: var(--card-label-color, var(--ae-color, #484848));
    line-height: 130%;
    font-weight: 400;
    margin: 0;
  }
`;
/** Class AeCard representing a card element.
 * @version:                        - 0.0.8.
 * 
 * @property {string} label         - The label of the card. 
 * @property {string} image         - The image of the card. 
 * @property {string} target        - The click target ("_blank, _self, _parent, _top"), Default-value: _self. 
 */
@customElement("ae-card")
export class AeCard extends LitElement {
  @property() 
  label?: string;

  @property() 
  image?: string;

  @property() 
  href?: string;

  @property() 
  target?: any;

  @property({ attribute: "part-link-selector" }) 
  partLinkSelector?: string;

  @property({ attribute: "part-figure-selector" }) 
  partFigureSelector?: string;

  @property({ attribute: "part-loading-svg-selector" })
  partLoadingSvgSelector?: string;

  @property({ attribute: "part-img-selector" }) 
  partImgSelector?: string;

  @property({ attribute: "part-header-selector" }) 
  partHeaderSelector?: string;

  @property({ attribute: "part-label-selector" }) 
  partLabelSelector?: string;

  @query("img") 
  imageEl?: HTMLImageElement;

  static get styles() {
    return [styles];
  }

  render() {
    return html`
      ${this.href
        ? html`
            <a
              part="${this.partLinkSelector
                ? this.partLinkSelector
                : "card-link"}"
              href="${this.href}"
              .target="${this.target}">
            </a>
          `
        : ""}
      <slot name="top"></slot>
      ${this.image ? 
        html`
          <figure
            part="${this.partFigureSelector
              ? this.partFigureSelector
              : "card-figure"}">
            <ae-loader
              part="${this.partLoadingSvgSelector
                ? this.partLoadingSvgSelector
                : "card-loading-svg"}">
            </ae-loader>
            <slot name="image" part="card-slot-image">
              <img
                part="${this.partImgSelector ? this.partImgSelector : "card-img"}"
                loading="lazy"
                src="${this.image}"
              />
            </slot>
          </figure>
        ` : 
        html``}
        ${this.label ?
          html`
            <header
              part="${this.partHeaderSelector
                ? this.partHeaderSelector
                : "card-header"}">
              <h3
                part="${this.partLabelSelector
                  ? this.partLabelSelector
                  : "card-label"}">
                ${this.label}
              </h3>
            </header>
          ` : 
          html``}
      <slot name="bottom"></slot>
    `;
  }

  firstUpdated() {
    const el = this;
    if(this.image) {
      this.imageEl.addEventListener("load", () => {
        el.setAttribute("loaded", "");
      });
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ae-card": AeCard;
  }
}
