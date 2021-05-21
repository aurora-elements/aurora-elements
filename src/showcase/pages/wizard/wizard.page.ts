import {LitElement, html} from 'lit';
import {Wizard} from '../../../elements/visualisation/wizard/wizard';
import {property} from '@lit/reactive-element/decorators/property';
import { spoAssetThumbnail } from '../../../foundations/directives/spo/spo.asset.thumbnail';
import { spoP2fCreatorUrl } from '../../../foundations/directives/spo/spo.p2f.creator.url';
import { spoP2fViewerUrl } from '../../../foundations/directives/spo/spo.p2f.viewer.url';
const apiUrl = 'https://kreativburschen.customer.space.one/api';
const scopeKey = 'wolfenbuettlerschaufenster';

class WizardPage extends LitElement {
  /* Properties */
  @property({attribute: false})
  wizard: Wizard = new Wizard();

  /* Render template */
  render() {
    return html`
      <ae-wizard>
        <ae-wizard-tab header="Auswählen">
          <h1>Auswählen</h1>



          <a href target="_blank" href="${spoP2fCreatorUrl(undefined, apiUrl, scopeKey, 3231)}">
            <img src=${spoAssetThumbnail(apiUrl, scopeKey, 596, 500)} />
          </a>

          <a href target="_blank" href="${spoP2fViewerUrl(apiUrl, scopeKey, 3231)}">
            <img src=${spoAssetThumbnail(apiUrl, scopeKey, 596, 500)} />
          </a>

          <a id="test" @click=${this.nextWizardStep} href="#">next</a>
        </ae-wizard-tab>
        <ae-wizard-tab header="Anreichern">
          <h1>Anreichern</h1>
        </ae-wizard-tab>
        <ae-wizard-tab header="Bearbeiten">
          <h1>Bearbeiten</h1>
        </ae-wizard-tab>
        <ae-wizard-tab header="Veröffentlichen">
          <h1>Veröffentlichen</h1>
        </ae-wizard-tab>
      </ae-wizard>
    `;
  }

  /* Methods */
  nextWizardStep() {
    this.wizard.nextStep();
  }
}

customElements.define('wizard-page', WizardPage);
