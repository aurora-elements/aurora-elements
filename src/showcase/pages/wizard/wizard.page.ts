import {LitElement, html} from 'lit';
import {until} from 'lit/directives/until.js';
import {Wizard} from '../../../elements/visualisation/wizard/wizard';
import {property} from '@lit/reactive-element/decorators/property';
import { spoAssetThumbnail } from '../../../functionalities/directives/spo/spo.asset.thumbnail.directive';
import { spoP2fCreatorUrl } from '../../../functionalities/directives/spo/spo.p2f.creator.url.directive';
import { spoP2fViewerUrl } from '../../../functionalities/directives/spo/spo.p2f.viewer.url.directive';
import spoApiFetch  from '../../../functionalities/directives/spo/spo.api.fetch.directive';
import { spoUriConverter } from '../../../functionalities/directives/spo/spo.uri.converter.directive';
import { customElement } from 'lit/decorators.js';

const apiUrl = 'https://kreativburschen.customer.space.one/api';
const scopeKey = 'wolfenbuettlerschaufenster';
const spoP2fDocumentsUrl = `${apiUrl}/scope/${scopeKey}/items/p2fDocumentItem`;

@customElement('wizard-page')
export class WizardPage extends LitElement {
  /* Properties */
  @property({attribute: false})
  wizard: Wizard = new Wizard();


  firstUpdated() {
  }
  /* Render template */
  render() {
    const articles = spoApiFetch.get(
      spoP2fDocumentsUrl,
      'basic',
      '',
      'marcus.kramer',
      'Qv4g7v5TQCGw' );
    return html`
      <ae-wizard>
        <ae-wizard-tab header="Auswählen">
          <h1>Auswählen</h1>
          ${until(
              articles
              .then(documents => html` 
                ${documents.map((document:any) =>
                  html`
                    <ae-card
                      label="${document.name}"
                      part="document"
                      image="${spoUriConverter(apiUrl, document.asset.thumbnailUri)}"
                      published-date="${document.meta.publish.start}"
                      filter-values="${document.name}"
                      category-id="${document.category.id}" 
                      id=${document.id}>  
                    </ae-card>
                  `)}                       
                `),
                html`
                    <slot name="documents-loading-information">
                    <ae-loader part="documents-loading-information"></ae-loader>
                    </slot>             
                `
            )} 


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
