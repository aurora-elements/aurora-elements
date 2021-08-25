import { css, html, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { aeEvent } from "../functionalities/directives/event.directive";
import { spoP2fCreatorUrl } from "../functionalities/directives/p2f/p2f.creator.url.directive";
import { spoP2fViewerUrl } from "../functionalities/directives/p2f/p2f.viewer.url.directive";

@customElement("ae-embedded-webview")
export class AeEmbeddedWebview extends LitElement {
  @property({ type: String, attribute: 'base-url' })
  baseUrl: string = window.location.origin;

  @property({ type: String, attribute: 'p2f-creator-url' })
  p2fCreatorUrl: string = 'https://creator.page2flip.customer.space.one/wizard/hotspot-editor-standalone';

  @property({ type: String })
  src: string;

  @property({ type: String })
  name: string;

  @property({ type: String, attribute:'space-key' })
  spaceKey: string;

  @property({ type: Number, attribute:'asset-id' })
  assetId: number;

  @query('iframe')
  frame:any;

  static get styles() {
    return css`
      :host {
        width:100%;
        height:100%;
        display: block;
      }
      iframe {
        width:100%;
        height:100%;
        display: block;
        border: 0;
      }
    `;
  }

  firstUpdated() {
    document.addEventListener('ae-p2f-grid:ae-embedded-webview|push', (e:CustomEvent) => {
      this.assetId= e.detail.assetId;
      this.name= e.detail.documentName;

      if(e.detail.app === 'viewer') {
        this.src= spoP2fViewerUrl(this.baseUrl, this.spaceKey, this.assetId)
      }
      else if(e.detail.app === 'creator') {
        this.src= spoP2fCreatorUrl(null, this.baseUrl, this.spaceKey, this.assetId);
      }

      let embeddedWebviewName:HTMLElement = document.querySelector('#embeddedWebviewName');
      if(embeddedWebviewName !== null) {
        embeddedWebviewName.innerHTML = this.name;
      } 

      this.frame.addEventListener('load', () => {
        if(this.src.includes('http')) {
          aeEvent(this, 'embedded-webview', '*', 'loaded', null, true)
        }
      });

    });   
  }

  render() {
    return html`
      <iframe src="${this.src}"></iframe>      
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ae-embedded-webview": AeEmbeddedWebview;
  }
}
