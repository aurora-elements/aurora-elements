import { html } from 'lit';
import {P2fDocument} from '../../../functionalities/interfaces/p2f/p2f.document.interface';
import publicApi from "../../../functionalities/directives/spo/spo.api.fetch.public.directive";
import "../../../elements/card.element";
import "../../../elements/loader.element";
import { errorHandler } from '../../../functionalities/directives/error.handler.directive';
import { spoUriConverter } from '../../../functionalities/directives/spo/spo.uri.converter.directive';
import { until } from 'lit/directives/until';

function publishStateTemplate(document: P2fDocument) {
    return html`
        ${document.meta.publish.state === 'PUBLISHED' ? 
          html`
            <div 
              slot="top" 
              class="published doc-status">
              <svg 
                style="width:24px;height:24px" 
                viewBox="0 0 24 24">
                <path 
                  fill="currentColor" 
                  d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
              </svg>
            </div>
          ` : 
          html`
          `
        }
    `;
}

function actionsTemplate(t:any, document: P2fDocument) {

  let convertingStatus: string;

  document.asset.formats.map((format) => {
    if(format.name === 'p2fdocument'){
        convertingStatus = format.status;
    }
  });

  return html`
    <div class="p2f-grid-item-actions ${convertingStatus} ${t.modusViewer ? 'viewer' : ''}" slot="bottom">
      ${!t.modusViewer ? 
        html`
          <a 
            href="#"
            onclick="event.preventDefault();${t.actionEdit ? t.actionEdit : 'editItem(' + document.id + ')'}"
            class="${t.actionPrimary === 'edit' ? 'action-primary' : ''} action-edit">
            <svg 
              viewBox="0 0 24 24">
              <path 
                fill="currentColor" 
                d="M16.84,2.73C16.45,2.73 16.07,2.88 15.77,3.17L13.65,5.29L18.95,10.6L21.07,8.5C21.67,7.89 21.67,6.94 21.07,6.36L17.9,3.17C17.6,2.88 17.22,2.73 16.84,2.73M12.94,6L4.84,14.11L7.4,14.39L7.58,16.68L9.86,16.85L10.15,19.41L18.25,11.3M4.25,15.04L2.5,21.73L9.2,19.94L8.96,17.78L6.65,17.61L6.47,15.29" />
            </svg>
            <span>${t.actionLabelEdit}</span>
          </a>
        ` : 
        html``
      }
      <a 
        href="#"
        @click="${(e:Event) => t.openEmbeddedWebview(e, document.asset.id, document.name, 'viewer')}"
        class="${t.actionPrimary === 'viewer' || t.modusViewer ? 'action-primary' : ''} action-viewer">
        <svg 
          viewBox="0 0 24 24">
          <path 
            fill="currentColor" 
            d="M17,18C17.56,18 18,18.44 18,19C18,19.56 17.56,20 17,20C16.44,20 16,19.56 16,19C16,18.44 16.44,18 17,18M17,15C14.27,15 11.94,16.66 11,19C11.94,21.34 14.27,23 17,23C19.73,23 22.06,21.34 23,19C22.06,16.66 19.73,15 17,15M17,21.5A2.5,2.5 0 0,1 14.5,19A2.5,2.5 0 0,1 17,16.5A2.5,2.5 0 0,1 19.5,19A2.5,2.5 0 0,1 17,21.5M9.27,20H6V4H13V9H18V13.07C18.7,13.15 19.36,13.32 20,13.56V8L14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H10.5C10,21.41 9.59,20.73 9.27,20Z" />
        </svg>
        <span>${t.actionLabelPreview}</span>
      </a>
      ${!t.modusViewer ? 
        html`
          <a 
            href="${t.creatorUrl + '?p=' + t.baseUrl + '/api/scope/' + t.scopeKey + '/asset/' + document.asset.id +'/format/p2fdocument/content/'}"
            @click="${(e:Event) => t.openEmbeddedWebview(e, document.asset.id, document.name, 'creator')}"
            class="${t.actionPrimary === 'hotspots' ? 'action-primary' : ''} action-hotspots">
            <svg 
              viewBox="0 0 24 24">
              <path 
                fill="currentColor" 
                d="M22.08,11.04H20.08V4H13.05V2H11.04V4H4V11.04H2V13.05H4V20.08H11.04V22.08H13.05V20.08H20.08V13.05H22.08V11.04M18.07,18.07H13.05V16.06H11.04V18.07H6V13.05H8.03V11.04H6V6H11.04V8.03H13.05V6H18.07V11.04H16.06V13.05H18.07V18.07M13.05,12.05A1,1 0 0,1 12.05,13.05C11.5,13.05 11.04,12.6 11.04,12.05C11.04,11.5 11.5,11.04 12.05,11.04C12.6,11.04 13.05,11.5 13.05,12.05Z" />
            </svg>
            <span>${t.actionLabelHotspots}</span>
          </a>
          <a 
            href="#"                      
            @click="${(e:Event) => t.delete(e,document.id, document.name)}"
            class="${t.actionPrimary === 'delete' ? 'action-primary' : ''} action-delete">
            <svg 
              viewBox="0 0 24 24">
              <path 
                fill="currentColor" 
                d="M14.12,10.47L12,12.59L9.87,10.47L8.46,11.88L10.59,14L8.47,16.12L9.88,17.53L12,15.41L14.12,17.53L15.53,16.12L13.41,14L15.53,11.88L14.12,10.47M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9Z" />
            </svg>
            <span>${t.actionLabelDelete}</span>
          </a>       
        ` : 
        html`` 
      }                    
    </div>
  `;
}

function categoryTemplate(document: P2fDocument) {
  return html`
    <span
      slot="bottom"
      class="category">
      ${document.category != null ? document.category.name : 'Category not specified'}
    </span>
  `;
}

function convertingStatusTemplate(t:any, document: P2fDocument) {

  let convertingStatus: string;

  document.asset.formats.map((format) => {
    if(format.name === 'p2fdocument'){
        convertingStatus = format.status;
    }
  });

  return html`
    <div slot="top">
      ${convertingStatus === 'failed' ? 
        html`
          <span 
            class="converting-status failed" 
            style="${document.meta.publish !== undefined && document.meta.publish.state === 'PUBLISHED' ? 'padding-left: 55px;' :''}">            ${t.convertingStatusLabelFailed}
          </span>` 
        : html``
      }
      ${convertingStatus === 'converting' ? 
        html`
          <span 
            class="converting-status converting"
            style="${document.meta.publish !== undefined && document.meta.publish.state === 'PUBLISHED' ? 'padding-left: 55px;' :''}">            ${t.convertingStatusLabelConverting}
          </span>` 
        : html``
      }
    </div>
  `;
}

export function masterTemplate(t:any) {
  
  let apiResponse:any;

  if(!t.spoQlQuery) {
    apiResponse = publicApi.get(`${t.baseUrl}/api/scope/${t.scopeKey}/items/p2fDocumentItem`);
  } 
  else if(t.apiUrl) {
    apiResponse = publicApi.get(t.apiUrl);  
  } 
  else {
    apiResponse = publicApi.get(`${t.baseUrl}/api/spoql?q=${t.spoQlQuery}`);
  }

  return html`
    ${until(
      apiResponse.then(
        (documents:any) => html`
        <span style="position:absolute;top:10px;right:10px;">
          ${t.size != undefined ? (t.size > documents.length ? documents.length : t.size) + ' / ' + documents.length : documents.length}
        </span>
          ${documents.length > 0 ? 
            html`   
              ${documents.slice(0, t.size).map(
                (document:P2fDocument) =>
                  html`
                    ${t.searchString != undefined ? 
                      html`
                        ${document.name != undefined && document.name.toLowerCase().includes(t.searchString) ? 
                          html`
                            <ae-card
                              label="${document.name ? document.name : 'Name not specified'}"
                              part="document"
                              target="_blank"             
                              image="${spoUriConverter(t.baseUrl + '/api', document.asset.thumbnailUri)}"
                              id="document_${document.id}">
                              ${document.meta.publish != undefined ? 
                                html`${publishStateTemplate(document)}` : html`` 
                              }
                              ${actionsTemplate(t, document)} 
                              ${categoryTemplate(document)}  
                              ${convertingStatusTemplate(t, document)}     
                            </ae-card>
                          `: 
                          html``
                        }
                      `:
                      html`
                        <ae-card
                          label="${document.name ? document.name : 'Name not specified'}"
                          part="document"
                          target="_blank"             
                          image="${spoUriConverter(t.baseUrl + '/api', document.asset.thumbnailUri)}"
                          id="document_${document.id}">
                          ${document.meta.publish != undefined ? 
                            html`${publishStateTemplate(document)}` : html`` 
                          }
                          ${actionsTemplate(t, document)} 
                          ${categoryTemplate(document)}  
                          ${convertingStatusTemplate(t, document)}     
                        </ae-card>
                      `
                    }                 
                  `
              )}` : 
            html`<span>${t.msgEmpty}</span>`
          }
        `
      ).catch((e:Event) => 
          errorHandler(t, e, 'ae-p2f-grid', true)
      ),
      html`
        <slot name="documents-loading-information">
          <ae-loader part="documents-loading-information"></ae-loader>
        </slot>
      `
    )}
  `;
}


