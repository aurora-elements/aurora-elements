
import "../../components/codeMirror.component";
import "../../components/dataTable.component";import "../../components/headlineBlock.component";
import "../../../elements/embedded.webview.element";
import "../../../elements/dashboard/number.dashlet.element";
import { LitElement, html } from "lit";
import htmlAttributes from "./numberDashlet/htmlAttributes.json";
import css from "./numberDashlet/css.json";
import slots from "./numberDashlet/slots.json";

class NumberDashletPage extends LitElement {

  /* Render template */
  render() {
    return html`
      <ae-headline-block headline="Number Dashlets" style="margin-bottom: 60px;">
        Das Number-Dashlet stellt eine Nummer dar, zum Beispiel die Anzahl von Dokumenten in einem space.
      </ae-headline-block>
      <div style="background-color:#f8f8f8;padding:40px;margin-bottom:40px;">
        <ae-number-dashlet>
          <a href="#" slot="actions" style="margin-right:10px">Aktion 1</a>
          <a href="#" slot="actions" style="margin-right:10px">Aktion 2</a>
          <a href="#" slot="actions">Aktion 3</a>
        </ae-number-dashlet>
      </div>
      <ae-code-mirror language="xml">
        &lt;ae-number-dashlet&gt;
            &lt;a href="#" slot="actions" style="margin-right:10px">Aktion 1&lt;/a&gt;
            &lt;a href="#" slot="actions" style="margin-right:10px">Aktion 2&lt;/a&gt;
            &lt;a href="#" slot="actions">Aktion 3&lt;/a&gt;

            &lt;svg viewBox="0 0 24 24" slot="icon"&gt;
                &lt;path fill="currentColor" d="M22,4A2,2 0 0,1 24,6V16A2, ..."&gt;
                &lt;/path&gt;
            &lt;/svg&gt;
        &lt;/ae-number-dashlet&gt;
      </ae-code-mirror>
      <span style="width: 100%;display: block;padding: 40px 0 0px 0;font-weight: 400;font-size: 20px;">HTML</span>
      <ae-data-table rows="${htmlAttributes}" type="html">
      </ae-data-table>

      <span style="width: 100%;display: block;padding: 40px 0 0px 0;font-weight: 400;font-size: 20px;">Slots</span>
      <ae-data-table rows="${slots}" type="slots">
      </ae-data-table>
      
      <span style="width: 100%;display: block;padding: 40px 0 0px 0;font-weight: 400;font-size: 20px;">CSS</span>
      <ae-data-table rows="${css}" type="css">
      </ae-data-table>

    `;
  }
}
customElements.define("number-dashlet-page", NumberDashletPage);
