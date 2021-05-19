import {LitElement, html} from 'lit';
import {Wizard} from '../../../elements/visualisation/wizard/wizard';
import {property} from '@lit/reactive-element/decorators/property';
import { spoAssetPipe } from '../../../foundations/pipes/spo/spo.asset.pipe';

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
          <img src=${spoAssetPipe('https://kreativburschen.customer.space.one/api', 596, 'wolfenbuettlerschaufenster', 500)} />
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
