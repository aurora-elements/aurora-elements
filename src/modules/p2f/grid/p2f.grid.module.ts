import "../../../elements/confirm.dialog.element";
import "../../../elements/card.element";
import "../../../elements/loader.element";
import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styles } from './p2f.grid.styles.modules'
import { aeDeleteEvent, aeDeletedEvent, aeEvent } from "../../../functionalities/directives/event.directive";
import { masterTemplate } from "./p2f.grid.templates";

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
 * @property {boolean} modusViewer                      - show all actions, or only viewer | default: show all
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
  @property({type: String, attribute: 'url-base'})
  baseUrl: string = window.location.origin;

  @property({type: String, attribute: 'url-creator'})
  creatorUrl: string = 'https://creator.page2flip.customer.space.one/wizard/hotspot-editor-standalone';

  @property({type: String, attribute: 'space-key'})
  scopeKey: string;

  @property({type: String, attribute: 'spoql-query'})
  spoQlQuery: string;

  @property({type: String, attribute: 'url-api'})
  apiUrl: string;

  @property({type:Number})
  size:number = 100000;

  @property({type:String, attribute: 'update-event'})
  updateEvent: string = 'afterViewUpdate';

  @property({type:String, attribute: 'search-string'})
  searchString: string;

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
 
  @property({type:String, attribute:'msg-empty'})
  msgEmpty: string = 'Unfortunately, no documents were found!';

  @property({type:Boolean, attribute: 'modus-viewer'})
  modusViewer: boolean;

  @property({type:Boolean, attribute: 'show-counter'})
  counter: boolean = false;

  @property({type: Boolean, attribute: 'debug-mode'})
  debugMode: boolean = false;

  @property({attribute:false})
  counterDocumentsInCategory: number;

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
      }, this.debugMode);
  }

  openEmbeddedWebview(e:Event, assetId:number, documentName:string, app:string) {
    e.preventDefault();
    aeEvent(this, 'p2f-grid', 'ae-embedded-webview', 'push', {
      assetId: assetId,
      documentName: documentName,
      app: app
    }, this.debugMode);
  }

  get root() {
      return this.shadowRoot || this
  }

  firstUpdated() {
    document.addEventListener(aeDeletedEvent, (e:CustomEvent) => {
      let deletedItem = this.root.getElementById('document_' + e.detail.id);
      if(deletedItem != null) {
        deletedItem.remove();
      }
    });
    
    document.addEventListener(this.updateEvent, () => {
      this.requestUpdate();
    });

    document.addEventListener('ae-kiosk-filterbar:ae-p2f-kiosk-grid|search', (e:CustomEvent) => {
      this.searchString = e.detail.searchString;
  });
  }

  render() {
    return masterTemplate(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ae-p2f-grid": AeP2fGrid;
  }
}
