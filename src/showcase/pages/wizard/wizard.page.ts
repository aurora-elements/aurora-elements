import { LitElement, html } from 'lit';
import { until } from 'lit/directives/until.js';
import { Wizard } from '../../../elements/visualisation/wizard/wizard.element';
import { property } from '@lit/reactive-element/decorators/property';
import publicApi from '../../../functionalities/directives/spo/spo.api.fetch.public.directive';
import { spoUriConverter } from '../../../functionalities/directives/spo/spo.uri.converter.directive';
import { customElement } from 'lit/decorators.js';
import juli2021 from './reports/juli2021.json';

const apiUrl = 'https://lyreco.devdock.space.one/api';
const scopeKey = 'lyreco';
const spoP2fDocumentsUrl = `${apiUrl}/scope/${scopeKey}/items/p2fDocumentItem`;

@customElement('wizard-page')
export class WizardPage extends LitElement {
	/* Properties */
	@property({ attribute: false })
	wizard: Wizard = new Wizard();


	firstUpdated() {
	}
	/* Render template */
	render() {
		const articles = publicApi.get(spoP2fDocumentsUrl);
    let test = ["Bezeichung","Betrag","Anmerkung"];
		return html`
      <ae-wizard>
        <ae-wizard-tab header="Auswählen">
          <ae-headline-block class="space-bottom-m40" headline="Finanzen">
            <ae-accordion>
              <ae-accordion-item label="Juli 2021">
                <ae-headline-block 
                  is-subheadline 
                  part="space-bottom-m40" 
                  headline="Ausgaben">
                </ae-headline-block>
                <ae-data-table
                  rows="${juli2021}"></ae-data-table>
                </ae-data-table>
              </ae-accordion-item>
            </ae-accordion>
          </ae-headline-block>
          <ae-headline-block class="space-bottom-m40" headline="Public API with cards">
            <div style="display: grid; grid-template-columns: repeat(auto-fill,minmax(300px,1fr));grid-gap:20px;">
                ${until(
			articles
				.then(documents => html` 
                      ${documents.map((document: any) =>
					html`
                          <ae-card
                            label="${document.name}"
                            part="document"
                            image="${spoUriConverter(apiUrl, document.asset.thumbnailUri)}"
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
              </div>
          </ae-headline-block>


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
