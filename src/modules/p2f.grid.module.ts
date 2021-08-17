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


import "../elements/card.element";
import "../elements/loader.element";
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import publicApi from "../functionalities/directives/spo/spo.api.fetch.public.directive";
import { spoUriConverter } from "../functionalities/directives/spo/spo.uri.converter.directive";
import { until } from "lit/directives/until";

const styles = css`
  :host {
    display:                grid;
    grid-template-columns:  repeat(auto-fill, minmax(var(--p2f-grid-column-min, 300px), 1fr));
    grid-gap:               var(--p2f-grid-gap, 20px);
    background-color:       var(--p2f-grid-bg, #e6e9ef);
    padding:                var(--p2f-grid-padding, 40px);
    --card-radius:          var(--p2f-grid-item-radius, 0);
  }
  ae-card {
      transition:           transform .3s ease-in-out;
      box-shadow:           var(--p2f-grid-item-shadow, 0px 20px 30px -20px rgba(0, 0, 0, 0.1));
      padding:              var(--p2f-grid-item-padding, 20px);
      display:              block;
  }
  ::part(card-figure) {
    aspect-ratio:           var(--p2f-grid-item-image-aspect-ration, 1 / 1.5);
  }
  ::part(card-img) {
    object-fit:             cover;
    width:                  100%;
    height:                 100%;
  }
  ::part(card-header) {
    padding-left:           0;
    padding-right:          0;
  }
  ::part(card-label) {
    font-weight:            700;
    text-transform:         uppercase;
    white-space:            nowrap;
    overflow:               hidden;
    text-overflow:          ellipsis;
    font-size:              14px;
  }
  .p2f-grid-item-actions {
    transition:             opacity 300ms linear 0s;
    opacity:                0;
    position:               absolute;
    top:                    0;
    left:                   0;
    width:                  100%;
    height:                 100%;
    z-index:                10;
    display:                grid; 
    grid-template-columns:  1fr 1fr 1fr; 
    grid-template-rows:     1fr 80px; 
    grid-template-areas:    "primary primary primary" ". . ."; 
  }
  .p2f-grid-item-actions a {
    background:             var(--p2f-grid-item-action-secondary-bg, #fff);
    text-decoration:        none;
    color:                  var(--p2f-grid-item-action-color, var(--p2f-grid-item-action-primary-bg, #7DAC46));
    text-transform:         uppercase; 
    font-size:              var(--p2f-grid-item-action-font-size, 12px);
    font-family:            var(--p2f-grid-item-action-font-family, 'Roboto', sans-serif);                  
  }
  .p2f-grid-item-actions a:not(.action-primary):hover {
      color:                var(--p2f-grid-item-action-color-hover, #5D902C);
  }
  .p2f-grid-item-actions a svg {
    width:                  24px;
    margin:                 18px auto 5px auto;
    display:                block;
  }
  .p2f-grid-item-actions a span {
    display:                block;
    width:                  100%;
    text-align:             center;
    line-height:            120%;
  }
  .p2f-grid-item-actions a.action-primary {
    background:             var(--p2f-grid-item-action-primary-bg, #7DAC46);
  }
  .p2f-grid-item-actions a.action-primary {         
    grid-area:              primary; 
    display:                grid;
    grid-template-rows:     .75fr .25fr;
    align-items:            center;
    transition:             opactiy 300ms ease-in-out 0s;
    color:                  var(--p2f-grid-item-action-primary-color, #fff);
    opacity:                .8;                             
    font-weight:            700;
    letter-spacing:         1px; 
    font-size:              var(--p2f-grid-item-action-primary-font-size, 14px);
    font-family:            var(--p2f-grid-item-action-font-family, 'Roboto', sans-serif);                  
  }
  .p2f-grid-item-actions a.action-primary:hover {
    opacity:                .9;                          
  }
  .p2f-grid-item-actions a.action-primary svg {
    width:                  var(--p2f-grid-item-action-primary-icon-size, 80px);
    height:                 var(--p2f-grid-item-action-primary-icon-size, 80px);
    margin:                 0 auto;
  }
  .p2f-grid-item-actions a.action-primary span {
    width:                  100%;
    display:                block;
    text-align:             center;                         
  }
  ae-card:hover .p2f-grid-item-actions {
    opacity:                1;
  }

  .doc-status {
    position:               absolute;
    top:                    0;
    left:                   0;
    padding:                7px 15px 7px 9px;
    background:           #888;
    z-index:                1;
    border-radius:          0 0 99px 0;
    color:                #fff;
    font-size:              20px;
  }
  .doc-status.published {
    background-color:       var(--color-accent);
  }
  .doc-status.draft {
    background-color:       orange;
  }
`;

@customElement("ae-p2f-grid")
export class AeP2fGrid extends LitElement {
  @property({type: String})
  url: string;

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

  static get styles() {
    return [styles];
  }

  render() {

    let apiResponse:any;

    if(!this.spoQlQuery) {
      apiResponse = publicApi.get(`${this.url}/api/scope/${this.scopeKey}/items/p2fDocumentItem`);
    } else {
      apiResponse = publicApi.get(`${this.url}/api/spoql?q=${this.spoQlQuery}`);
    }

    return html`
      ${until(
        apiResponse.then(
          (documents:any) => html`
            ${documents.map(
              (document:any) =>
                html`
                  <ae-card
                    label="${document.name ? document.name : 'Name not specified'}"
                    part="document"
                    target="_blank"             
                    image="${spoUriConverter(this.url + '/api', document.asset.thumbnailUri)}"
                    id="document_${document.id}">
                    <div 
                      slot="top" 
                      class="${document.meta.publish.state === 'PUBLISHED' ? 'published doc-status' : 'draft doc-status'}">
                      ${document.meta.publish.state === 'PUBLISHED' ? 
                        html`
                          <svg 
                            style="width:24px;height:24px" 
                            viewBox="0 0 24 24">
                            <path fill="currentColor" d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                          </svg>
                        ` : 
                        html`
                          <svg 
                            style="width:24px;height:24px" 
                            viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22,5.27L20.5,6.75C21.46,8.28 22,10.07 22,12A10,10 0 0,1 12,22C10.08,22 8.28,21.46 6.75,20.5L5.27,22L4,20.72L20.72,4L22,5.27M17.9,17.39C19.2,15.97 20,14.08 20,12C20,10.63 19.66,9.34 19.05,8.22L14.83,12.44C14.94,12.6 15,12.79 15,13V16H16C16.89,16 17.64,16.59 17.9,17.39M11,19.93V18C10.5,18 10.07,17.83 9.73,17.54L8.22,19.05C9.07,19.5 10,19.8 11,19.93M15,4.59V5A2,2 0 0,1 13,7H11V9A1,1 0 0,1 10,10H8V12H10.18L8.09,14.09L4.21,10.21C4.08,10.78 4,11.38 4,12C4,13.74 4.56,15.36 5.5,16.67L4.08,18.1C2.77,16.41 2,14.3 2,12A10,10 0 0,1 12,2C14.3,2 16.41,2.77 18.1,4.08L16.67,5.5C16.16,5.14 15.6,4.83 15,4.59Z" />
                          </svg>
                        `
                      }
                    </div>
                    <div slot="bottom">
                      ${document.asset.formats.get('p2fdocument') == null 
                        || document.asset.formats.get('p2fdocument').status.toString() == 'failed' ? 
                        html`<span>Failed</span>` : 
                        html``
                      }



                      
    <span th:if="${document.asset.formats.get('p2fdocument') != null && document.asset.formats.get('p2fdocument').status.toString() == 'ready'}"
          th:text='converted'></span>
    <span th:if="${document.asset.formats.get('p2fdocument') != null && document.asset.formats.get('p2fdocument').status.toString() != 'ready' && document.asset.formats.get('p2fdocument').status.toString() != 'failed'}"
          th:text='converting'></span>
                    </div>
                    <div class="p2f-grid-item-actions" slot="bottom">
                      <a 
                        href="#"
                        onclick="${this.actionEdit ? this.actionEdit : 'editItem(' + document.id + ')'}"
                        class="${this.actionPrimary === 'edit' ? 'action-primary' : ''}">
                        <svg 
                          viewBox="0 0 24 24">
                          <path 
                            fill="currentColor" 
                            d="M16.84,2.73C16.45,2.73 16.07,2.88 15.77,3.17L13.65,5.29L18.95,10.6L21.07,8.5C21.67,7.89 21.67,6.94 21.07,6.36L17.9,3.17C17.6,2.88 17.22,2.73 16.84,2.73M12.94,6L4.84,14.11L7.4,14.39L7.58,16.68L9.86,16.85L10.15,19.41L18.25,11.3M4.25,15.04L2.5,21.73L9.2,19.94L8.96,17.78L6.65,17.61L6.47,15.29" />
                        </svg>
                        <span>${this.actionLabelEdit}</span>
                      </a>
                      <a 
                        href="${this.url +'/api/scope/' + this.scopeKey + '/asset/' + document.asset.id + '/format/p2fdocument/content/index.html'}" 
                        class="${this.actionPrimary === 'viewer' ? 'action-primary' : ''}">
                        <svg 
                          viewBox="0 0 24 24">
                          <path 
                            fill="currentColor" 
                            d="M17,18C17.56,18 18,18.44 18,19C18,19.56 17.56,20 17,20C16.44,20 16,19.56 16,19C16,18.44 16.44,18 17,18M17,15C14.27,15 11.94,16.66 11,19C11.94,21.34 14.27,23 17,23C19.73,23 22.06,21.34 23,19C22.06,16.66 19.73,15 17,15M17,21.5A2.5,2.5 0 0,1 14.5,19A2.5,2.5 0 0,1 17,16.5A2.5,2.5 0 0,1 19.5,19A2.5,2.5 0 0,1 17,21.5M9.27,20H6V4H13V9H18V13.07C18.7,13.15 19.36,13.32 20,13.56V8L14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H10.5C10,21.41 9.59,20.73 9.27,20Z" />
                        </svg>
                        <span>${this.actionLabelPreview}</span>
                      </a> 
                      <a 
                        href="${'https://creator.page2flip.customer.space.one/wizard/hotspot-editor-standalone?p=' + this.url + '/api/scope/' + this.scopeKey + '/asset/' + document.asset.id +'/format/p2fdocument/content/'}"
                        class="${this.actionPrimary === 'hotspots' ? 'action-primary' : ''}">
                        <svg 
                          viewBox="0 0 24 24">
                          <path 
                            fill="currentColor" 
                            d="M22.08,11.04H20.08V4H13.05V2H11.04V4H4V11.04H2V13.05H4V20.08H11.04V22.08H13.05V20.08H20.08V13.05H22.08V11.04M18.07,18.07H13.05V16.06H11.04V18.07H6V13.05H8.03V11.04H6V6H11.04V8.03H13.05V6H18.07V11.04H16.06V13.05H18.07V18.07M13.05,12.05A1,1 0 0,1 12.05,13.05C11.5,13.05 11.04,12.6 11.04,12.05C11.04,11.5 11.5,11.04 12.05,11.04C12.6,11.04 13.05,11.5 13.05,12.05Z" />
                        </svg>
                        <span>${this.actionLabelHotspots}</span>
                      </a>
                      <a 
                        href="#"
                        data-pfconfirmcommand="removeItem(${document.id})"
                        onclick="PrimeFaces.confirm({
                          source: 'document_${document.id}', 
                          message: 'Soll <b>${document.name}</b> wirklich löschen?'
                        })"
                        class="${this.actionPrimary === 'delete' ? 'action-primary' : ''}">
                        <svg 
                          viewBox="0 0 24 24">
                          <path 
                            fill="currentColor" 
                            d="M14.12,10.47L12,12.59L9.87,10.47L8.46,11.88L10.59,14L8.47,16.12L9.88,17.53L12,15.41L14.12,17.53L15.53,16.12L13.41,14L15.53,11.88L14.12,10.47M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9Z" />
                        </svg>
                        <span>${this.actionLabelDelete}</span>
                      </a>                    
                    </div>
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
