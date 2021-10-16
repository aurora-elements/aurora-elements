import "../../../components/dataTable.component";
import "../../../components/codeMirror.component";
import "../../../../elements/card.element";
import "../../../../elements/loader.element";
import "../../../components/headlineBlock.component";
import { LitElement, html, css } from "lit";
import HTMLAttributes from "./htmlAttributes.json";
import cssVars from "./css.json";
import slots from "./slots.json";
import parts from "./parts.json";
import { elementsMasterTemplate } from "../masterTemplates/elements.master.template";
import { elementsMasterStyles } from "../masterTemplates/elements.master.template.styles";

const version = "0.0.8";
const headline = "Card";
const HTMLCode = `
<ae-card
    style="width:300px;" 
    label="Card"
    image="/src/showcase/assets/card-testbild.jpg">
</ae-card>
`;
const element = html`
    <ae-card
        style="width:300px;" 
        label="Card"
        image="/src/showcase/assets/card-testbild.jpg">
    </ae-card>
`;

class Card extends LitElement {
  /* Render template */
  protected render() {
    return html`
      ${elementsMasterTemplate(
        false,
        headline,
        null,
        version,
        element,
        HTMLCode,
        HTMLAttributes,
        slots,
        parts,
        cssVars
      )}
    `;
  }
  /* Styles - LitElement */
  static styles = [
    elementsMasterStyles, 
    css`
        ae-card{
            --card--backgroundColor: #fff;
        }
    `
  ];

}
customElements.define("card-page", Card);
