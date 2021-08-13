import "../elements/card.element";
import "../elements/loader.element";
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import publicApi from "../functionalities/directives/spo/spo.api.fetch.public.directive";
import { spoUriConverter } from "../functionalities/directives/spo/spo.uri.converter.directive";
import { until } from "lit/directives/until";

const styles = css`
  :host {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    margin-top: 40px;
  }
`;

@customElement("ae-p2f-grid")
export class AeP2fGrid extends LitElement {
  @property({type: String})
  url: string;
  @property({type: String, attribute: 'space-key'})
  scopeKey: string;

  static get styles() {
    return [styles];
  }

  render() {
    const spoP2fDocumentsUrl = `${this.url}/api/scope/${this.scopeKey}/items/p2fDocumentItem`;
    const articles = publicApi.get(spoP2fDocumentsUrl);

    return html`
      ${until(
        articles.then(
          (documents) => html`
            ${documents.map(
              (document: any) =>
                html`
                  <ae-card
                    label="${document.name}"
                    part="document"
                    image="${spoUriConverter(
                      this.url + '/api',
                      document.asset.thumbnailUri
                    )}"
                    id=${document.id}
                  >
                  </ae-card>
                `
            )}
          `
        ),
        html`
          <slot name="documents-loading-information">
            <ae-loader part="documents-loading-information"></ae-loader>
          </slot>
        `
      )}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ae-p2f-grid": AeP2fGrid;
  }
}
