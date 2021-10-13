
import "../../../../elements/accordion/accordionItem.element";
import "../../../../elements/accordion/accordion.element";
import "../../../components/dataTable.component";
import "../../../components/codeMirror.component";
import "../../../../elements/card.element";
import "../../../../elements/loader.element";
import "../../../components/headlineBlock.component";
import {LitElement, html} from 'lit';
import { elementsMasterTemplate } from "../masterTemplates/elements.master.template";
import { elementsMasterStyles } from "../masterTemplates/elements.master.template.styles";
import css from './css.json';
import HTMLAttributes from "./htmlAttributes.json";
import slots from "./slots.json";
import parts from "./parts.json";

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
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
        sed diam nonumy eirmod tempor invidunt ut labore et 
        dolore magna aliquyam erat, sed diam voluptua. 
      </p>
    </ae-accordion-item>
    <ae-accordion-item label="Accordion item 2">
      <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et 
          dolore magna aliquyam erat, sed diam voluptua. 
      </p>
    </ae-accordion-item>
    <ae-accordion-item label="Accordion item 3">
      <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et 
          dolore magna aliquyam erat, sed diam voluptua. 
      </p>
    </ae-accordion-item>
  </ae-accordion>
`

class Accordion extends LitElement {

  /* Render template */
  render() {
    return html`
      ${elementsMasterTemplate(
        false,
        'Accordion', 
        null, 
        '0.0.8', 
        element, 
        HTMLCode, 
        HTMLAttributes, 
        slots, 
        parts, 
        css
      )}
      ${elementsMasterTemplate(
        true,
        'Accordion Item', 
        null, 
        null, 
        null, 
        null, 
        HTMLAttributes, 
        slots, 
        parts, 
        css
      )}
    `;
  }

  /* Styles - LitElement */
  static get styles() {
    return [elementsMasterStyles]
  }
}
customElements.define('accordion-page', Accordion);
