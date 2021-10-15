import "../../../../elements/accordion/accordionItem.element";
import "../../../../elements/accordion/accordion.element";
import "../../../components/dataTable.component";
import "../../../components/codeMirror.component";
import "../../../../elements/card.element";
import "../../../../elements/loader.element";
import "../../../components/headlineBlock.component";
import { LitElement, html } from "lit";
import { elementsMasterTemplate } from "../masterTemplates/elements.master.template";
import { elementsMasterStyles } from "../masterTemplates/elements.master.template.styles";
import css from "./css.json";
import HTMLAttributes from "./htmlAttributes.json";
import slots from "./slots.json";
import cssItem from "./item/css.json";
import HTMLAttributesItem from "./item/htmlAttributes.json";
import slotsItem from "./item/slots.json";
import partsItem from "./item/parts.json";

const headline = "Accordion";

const headlineItem = "Accordion Item";

const version = "0.0.8";

const HTMLCode = `
<ae-accordion>
    <ae-accordion-item label="Accordion item 1">
        Lorem ipsum dolor sit amet...
    </ae-accordion-item>
    <ae-accordion-item label="Accordion item 2">
        Lorem ipsum dolor sit amet...
    </ae-accordion-item>
    <ae-accordion-item label="Accordion item 3">
        Lorem ipsum dolor sit amet...
    </ae-accordion-item>
    ...
</ae-accordion>
`;
const element = html`
  <ae-accordion>
    <ae-accordion-item label="Accordion item 1">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>
    </ae-accordion-item>
    <ae-accordion-item label="Accordion item 2">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>
    </ae-accordion-item>
    <ae-accordion-item label="Accordion item 3">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>
    </ae-accordion-item>
  </ae-accordion>
`;

class Accordion extends LitElement {
    /* Render template */
    render() {
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
            null,
            css
        )}
      ${elementsMasterTemplate(
            true,
            headlineItem,
            null,
            null,
            null,
            null,
            HTMLAttributesItem,
            slotsItem,
            partsItem,
            cssItem
        )}
    `;
    }

    /* Styles - LitElement */
    static get styles() {
        return [elementsMasterStyles];
    }
}
customElements.define("accordion-page", Accordion);
