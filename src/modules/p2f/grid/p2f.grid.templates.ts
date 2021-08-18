import { html } from 'lit';
import {P2fDocument} from '../../../functionalities/interfaces/p2f/p2f.document.interface';

export function publishStateTemplate(document: P2fDocument) {
    return html`
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
    `;
  }

export function actionsTemplate(t:any, document: P2fDocument) {
    return html`
      <div class="p2f-grid-item-actions" slot="bottom">
        <a 
          href="#"
          onclick="${t.actionEdit ? t.actionEdit : 'editItem(' + document.id + ')'}"
          class="${t.actionPrimary === 'edit' ? 'action-primary' : ''}">
          <svg 
            viewBox="0 0 24 24">
            <path 
              fill="currentColor" 
              d="M16.84,2.73C16.45,2.73 16.07,2.88 15.77,3.17L13.65,5.29L18.95,10.6L21.07,8.5C21.67,7.89 21.67,6.94 21.07,6.36L17.9,3.17C17.6,2.88 17.22,2.73 16.84,2.73M12.94,6L4.84,14.11L7.4,14.39L7.58,16.68L9.86,16.85L10.15,19.41L18.25,11.3M4.25,15.04L2.5,21.73L9.2,19.94L8.96,17.78L6.65,17.61L6.47,15.29" />
          </svg>
          <span>${t.actionLabelEdit}</span>
        </a>
        <a 
          href="${t.url +'/api/scope/' + t.scopeKey + '/asset/' + document.asset.id + '/format/p2fdocument/content/index.html'}" 
          class="${t.actionPrimary === 'viewer' ? 'action-primary' : ''}">
          <svg 
            viewBox="0 0 24 24">
            <path 
              fill="currentColor" 
              d="M17,18C17.56,18 18,18.44 18,19C18,19.56 17.56,20 17,20C16.44,20 16,19.56 16,19C16,18.44 16.44,18 17,18M17,15C14.27,15 11.94,16.66 11,19C11.94,21.34 14.27,23 17,23C19.73,23 22.06,21.34 23,19C22.06,16.66 19.73,15 17,15M17,21.5A2.5,2.5 0 0,1 14.5,19A2.5,2.5 0 0,1 17,16.5A2.5,2.5 0 0,1 19.5,19A2.5,2.5 0 0,1 17,21.5M9.27,20H6V4H13V9H18V13.07C18.7,13.15 19.36,13.32 20,13.56V8L14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H10.5C10,21.41 9.59,20.73 9.27,20Z" />
          </svg>
          <span>${t.actionLabelPreview}</span>
        </a> 
        <a 
          href="${'https://creator.page2flip.customer.space.one/wizard/hotspot-editor-standalone?p=' + t.url + '/api/scope/' + t.scopeKey + '/asset/' + document.asset.id +'/format/p2fdocument/content/'}"
          class="${t.actionPrimary === 'hotspots' ? 'action-primary' : ''}">
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
          class="${t.actionPrimary === 'delete' ? 'action-primary' : ''}">
          <svg 
            viewBox="0 0 24 24">
            <path 
              fill="currentColor" 
              d="M14.12,10.47L12,12.59L9.87,10.47L8.46,11.88L10.59,14L8.47,16.12L9.88,17.53L12,15.41L14.12,17.53L15.53,16.12L13.41,14L15.53,11.88L14.12,10.47M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9Z" />
          </svg>
          <span>${t.actionLabelDelete}</span>
        </a>                    
      </div>
    `;
  }

