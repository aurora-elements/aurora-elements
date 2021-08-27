
import "../../../components/dataTable.component";
import "../../../components/codeMirror.component";
import "../../../../elements/card.element";
import "../../../../elements/loader.element";
import "../../../components/headlineBlock.component";
import {LitElement, html} from 'lit';
import htmlAttributes from './htmlAttributes.json';
import css from './css.json';
import slots from './slots.json';
import parts from './parts.json';


class Accordion extends LitElement {

  /* Render template */
  render() {
    return html`
    <ae-headline-block headline="Accordion - coming soon" style="margin-bottom: 60px;">
        Das Accordion Element ...
      </ae-headline-block>
      <small style="width: 100%;display: block;padding-bottom: 40px;opacity: .5;">Version 0.0.8</small></div>
      <div style="background-color:var(--grey-ligthest);padding:40px;margin-bottom:40px;display:none;">
          <ae-card></ae-card>
      </div>
      <ae-code-mirror language="xml" style="display:none;">
        &lt;ae-card&gt;
            &lt;a href="#" slot="actions" style="margin-right:10px">Aktion 1&lt;/a&gt;
            &lt;a href="#" slot="actions" style="margin-right:10px">Aktion 2&lt;/a&gt;
            &lt;a href="#" slot="actions">Aktion 3&lt;/a&gt;

            &lt;svg viewBox="0 0 24 24" slot="icon"&gt;
                &lt;path fill="currentColor" d="M22,4A2,2 0 0,1 24,6V16A2, ..."&gt;
                &lt;/path&gt;
            &lt;/svg&gt;
        &lt;/ae-card&gt;
      </ae-code-mirror>
      <span style="width: 100%;display: none;padding: 40px 0 0px 0;font-weight: 400;font-size: 20px;">HTML</span>
      <ae-data-table rows="${htmlAttributes}" type="html" style="display:none;">
      </ae-data-table>

      <span style="width: 100%;display: none;padding: 40px 0 0px 0;font-weight: 400;font-size: 20px;">Slots</span>
      <ae-data-table rows="${slots}" type="slots" style="display:none;">
      </ae-data-table>

      <span style="width: 100%;display: none;padding: 40px 0 0px 0;font-weight: 400;font-size: 20px;">Parts</span>
      <ae-data-table rows="${parts}" type="parts" style="display:none;">
      </ae-data-table>
      
      <span style="width: 100%;display: none;padding: 40px 0 0px 0;font-weight: 400;font-size: 20px;">CSS</span>
      <ae-data-table rows="${css}" type="css" style="display:none;">
      </ae-data-table>
 
 `;
  }
}
customElements.define('accordion-page', Accordion);
