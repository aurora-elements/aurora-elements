
import "../../components/codeMirror.component";
import "../../components/dataTable.component";import "../../components/headlineBlock.component";
import "../../../elements/embedded.webview.element";
import "../../../elements/dashboard/number.dashlet.element";
import { LitElement, html } from "lit";
import HTMLAttributes from "./numberDashlet/htmlAttributes.json";
import css from "./numberDashlet/css.json";
import slots from "./numberDashlet/slots.json";
import { elementsMasterTemplate } from "../elements/masterTemplates/elements.master.template";
import { elementsMasterStyles } from "../elements/masterTemplates/elements.master.template.styles";

const headline = 'Number Dashlets';

const description = 'Das Number-Dashlet stellt eine Nummer dar, zum Beispiel die Anzahl von Dokumenten in einem space.';

const version = '0.0.8';

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
    </a>;
    ...
    <svg 
      viewBox="0 0 24 24" 
      slot="icon">
      <path 
        fill="currentColor" 
        d="M22,4A2,2 0 0,1 24,6V16A2, ...">
      </path>
    </svg>
  </ae-number-dashlet>
`;

class NumberDashletPage extends LitElement {

  /* Render template */
  render() {
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
  static get styles() {
    return [elementsMasterStyles]
  }
}
customElements.define("number-dashlet-page", NumberDashletPage);
