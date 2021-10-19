import "../../../elements/dashboard/number.dashlet.element";
import { LitElement, html } from "lit";
import HTMLAttributes from "./numberDashlet/htmlAttributes.json";
import css from "./numberDashlet/css.json";
import slots from "./numberDashlet/slots.json";
import { elementsMasterTemplate } from "../elements/masterTemplates/elements.master.template";
import { elementsMasterStyles } from "../elements/masterTemplates/elements.master.template.styles";

const headline = "Number Dashlets";

const description =
  "Das Number-Dashlet stellt eine Nummer dar, zum Beispiel die Anzahl von Dokumenten in einem space.";

const version = "0.0.8";

const element = html`
  <ae-number-dashlet>
    <a href="#" slot="actions" style="margin-right:10px">Aktion 1</a>
    <a href="#" slot="actions" style="margin-right:10px">Aktion 2</a>
    <a href="#" slot="actions">Aktion 3</a>
  </ae-number-dashlet>
`;

const HTMLCode = `
<ae-number-dashlet 
    label="Label" 
    number-value="0">
    <a 
        href="#" 
        slot="actions">
        Aktion 1
    </a>
    <a 
        href="#" 
        slot="actions">
        Aktion 2
    </a>
    <a 
        href="#" 
        slot="actions">
        Aktion 3
    </a>
    ...
</ae-number-dashlet>
`;

class NumberDashletPage extends LitElement {
  /* Render template */
  protected render() {
    return html`
      ${elementsMasterTemplate(
        false,
        headline,
        description,
        version,
        element,
        HTMLCode,
        HTMLAttributes,
        slots,
        null,
        css
      )}
    `;
  }

  /* Styles - LitElement */
  static styles = [elementsMasterStyles];
}
customElements.define("number-dashlet-page", NumberDashletPage);
