
import "../../../../elements/card.element";
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from '../p2f.grid.styles.modules'
import { actionsTemplate, categoryTemplate, convertingStatusTemplate, publishStateTemplate } from "./p2f.grid.item.templates";
import { aeEvent } from "../../../../functionalities/directives/event.directive";

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

@customElement("ae-p2f-grid-item")
export class AeP2fGridItem extends LitElement {

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
 
  @property()
  image: any;
  
  @property({type: String})
  label: string;
  
  @property()
  document: any;

  static get styles() {
    return [styles];
  }

  delete(e:Event, id:number, name:string) {
    e.preventDefault();
    aeEvent(this, 'p2f-grid', '*', 'delete-request', { 
      name: name,
      id: id
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
    document.addEventListener('ae-deleted-event', (e:any) => {
      let deletedItem = this.root.getElementById('document_' + e.detail.id);
      if(deletedItem != null) {
        deletedItem.remove();
      }
    });
  }

  render() {
    return html`
      <ae-card
        label="${this.label}"
        part="document"            
        image="${this.image}"
        id="document_${this.id}">
        ${publishStateTemplate(this.document)}
        ${actionsTemplate(this, this.document)}
        ${categoryTemplate(this.document)}
        ${convertingStatusTemplate(this, this.document)}
      </ae-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ae-p2f-grid-item": AeP2fGridItem;
  }
}
