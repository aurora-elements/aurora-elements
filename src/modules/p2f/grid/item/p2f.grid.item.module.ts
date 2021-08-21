
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from '../p2f.grid.styles.modules'

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

  static get styles() {
    return [styles];
  }

  delete(e:Event, id:number, name:string) {
    e.preventDefault();
    let deleteRequestEvent = new CustomEvent('ae-delete-request-event', { 
      detail: { 
        name: name,
        id: id
      },
      bubbles: true, 
      composed: true });
    this.dispatchEvent(deleteRequestEvent); 
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

    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ae-p2f-grid-item": AeP2fGridItem;
  }
}
