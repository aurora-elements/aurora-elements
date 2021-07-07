import { LitElement, html } from 'lit';
import { until } from 'lit/directives/until.js';
import publicApi from '../../../../src/functionalities/directives/spo/spo.api.fetch.public.directive';
import { spoUriConverter } from '../../../../src/functionalities/directives/spo/spo.uri.converter.directive';
import { customElement } from 'lit/decorators.js';

const apiUrl = 'https://lyreco.devdock.space.one/api';
const scopeKey = 'lyreco';
const spoP2fDocumentsUrl = `${apiUrl}/scope/${scopeKey}/items/p2fDocumentItem`;

@customElement('wizard-page')
export class WizardPage extends LitElement {


	firstUpdated() {
	}
	/* Render template */
	render() {
		const articles = publicApi.get(spoP2fDocumentsUrl);
    let test = ["Bezeichung","Betrag","Anmerkung"];
		return html`

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

    `;
	}

}
