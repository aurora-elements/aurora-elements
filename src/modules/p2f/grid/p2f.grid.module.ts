import "../../../elements/confirm.dialog.element";
import "../../../elements/card.element";
import "../../../elements/loader.element";
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import publicApi from "../../../functionalities/directives/spo/spo.api.fetch.public.directive";
import { spoUriConverter } from "../../../functionalities/directives/spo/spo.uri.converter.directive";
import { until } from "lit/directives/until";
import { styles } from './p2f.grid.styles.modules'
import { publishStateTemplate, actionsTemplate, categoryTemplate, convertingStatusTemplate } from './p2f.grid.templates';
import {P2fDocument} from '../../../functionalities/interfaces/p2f/p2f.document.interface';
import { aeDeleteEvent, aeEvent } from "../../../functionalities/directives/event.directive";

/**
 * page2flip Grid Module
 * @description:                                          This module provides a grid for page2flip documents. 
 *                                                        It can be adapted in various ways in terms of functionality and appearance.
 * @version:                                              0.0.8.
 * 
 * Javascript____________________________________________
 * @property {string} url                               - Rest-Api Endpoint for p2f documents. 
 * @property {string} space-key                         - Key of the space.
 * @property {number} size                              - Number of documents that are displayed.
 * @property {string} action-primary                    - Main action on the tile.
 * @property {string} action-label-edit                 - Label of the edit action.
 * @property {string} action-edit                       - Javascript edit action.
 * @property {string} action-label-preview              - Label of the preview action.
 * @property {string} action-label-hotspots             - Label of the hotspots action.
 * @property {string} action-label-delete               - Label of the delete action.
 * 
 * CSS___________________________________________________
 * Grid
 * @property {css} --p2f-grid-column-min                - Minimum width of an item.
 * @property {css} --p2f-grid-gap                       - Distance between the items.
 * @property {css} --p2f-grid-bg                        - Background color of the component.
 * @property {css} --p2f-grid-padding                   - Padding of the component.
 * Items
 * @property {css} --p2f-grid-item-radius               - Corner radius of the items.
 */

@customElement("ae-p2f-grid")
export class AeP2fGrid extends LitElement {
  @property({type: String, attribute: 'base-url'})
  baseUrl: string = window.location.origin;

  @property({type: String, attribute: 'space-key'})
  scopeKey: string;

  @property({type: String, attribute: 'spoql-query'})
  spoQlQuery: string;

  @property({type:Number})
  size:number = 100000;

  @property({type:String, attribute: 'action-primary'})
  actionPrimary: string = 'edit';

  @property({type:String, attribute: 'action-label-edit'})
  actionLabelEdit: string = 'Edit';

  @property({type:String, attribute: 'action-edit'})
  actionEdit: string;

  @property({type:String, attribute: 'action-label-preview'})
  actionLabelPreview: string = 'Preview';

  @property({type:String, attribute: 'action-label-hotspots'})
  actionLabelHotspots: string = 'Hotspots';

  @property({type:String, attribute: 'action-label-delete'})
  actionLabelDelete: string = 'Delete';

  @property({type:String, attribute: 'converting-status-label-failed'})
  convertingStatusLabelFailed: string = 'PDF conversion failed';

  @property({type:String, attribute: 'converting-status-label-converting'})
  convertingStatusLabelConverting: string = 'The PDF is converted';

  static get styles() {
    return [styles];
  }

  delete(e:Event, id:number, name:string) {
    e.preventDefault();
    aeDeleteEvent(
      this, 
      id, 
      name,
      {
        trigger: 'ae-p2f-grid', 
        type: 'document'
      }, true);
  }

  openEmbeddedWebview(e:Event, assetId:number, documentName:string, app:string) {
    e.preventDefault();
    aeEvent(this, 'p2f-grid', 'ae-embedded-webview', 'push', {
      assetId: assetId,
      documentName: documentName,
      app: app
    }, true);
  }

  get root() {
      return this.shadowRoot || this
  }

  firstUpdated() {
    document.addEventListener('ae-deleted-event', (e:CustomEvent) => {
      let deletedItem = this.root.getElementById('document_' + e.detail.id);
      if(deletedItem != null) {
        deletedItem.remove();
      }
    });
    document.addEventListener('afterViewUpdate', () => {
      this.requestUpdate();
    });
  }

  render() {

    let apiResponse:any;

    if(!this.spoQlQuery) {
      apiResponse = publicApi.get(`${this.baseUrl}/api/scope/${this.scopeKey}/items/p2fDocumentItem`);
    } else {
      apiResponse = publicApi.get(`${this.baseUrl}/api/spoql?q=${this.spoQlQuery}`);
    }

    return html`
      ${until(
        apiResponse.then(
          (documents:any) => html`
            ${documents.map(
              (document:P2fDocument) =>
                html`
                  <ae-card
                    label="${document.name ? document.name : 'Name not specified'}"
                    part="document"
                    target="_blank"             
                    image="${spoUriConverter(this.baseUrl + '/api', document.asset.thumbnailUri)}"
                    id="document_${document.id}">
                    ${publishStateTemplate(document)}
                    ${actionsTemplate(this, document)}
                    ${categoryTemplate(document)}
                    ${convertingStatusTemplate(this, document)}
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
