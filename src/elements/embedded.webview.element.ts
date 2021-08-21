import { css, html, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";

@customElement("ae-embedded-webview")
export class AeEmbeddedWebview extends LitElement {
  @property({ type: String, attribute: 'base-url' })
  baseUrl: string = window.location.origin;

  @property({ type: String })
  src: string;

  @property({ type: String })
  name: string;

  @property({ type: String, attribute:'space-key' })
  spaceKey: string;

  @property({ type: String, attribute:'asset-id' })
  assetId: string;

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
    document.addEventListener('ae-p2f-embedded-webview-event', (e:any) => {
      this.assetId= e.detail.assetId;
      this.name= e.detail.documentName;

      if(e.detail.app === 'viewer') {
        this.src = `${this.baseUrl}/api/scope/${this.spaceKey}/asset/${this.assetId}/format/p2fdocument/content/index.html`;
      }
      else if(e.detail.app === 'creator') {
        this.src=`https://creator.page2flip.customer.space.one/wizard/hotspot-editor-standalone?p=${this.baseUrl}/api/scope/${this.spaceKey}/asset/${this.assetId}/format/p2fdocument/content/`;
      }

      let embeddedWebviewName:HTMLElement = document.querySelector('#embeddedWebviewName');
      if(embeddedWebviewName !== null) {
        embeddedWebviewName.innerHTML = this.name;
      } 

      this.frame.addEventListener('load', () => {
        if(this.src.includes('http')) {
          let viewerLoadedEvent = new CustomEvent('ae-p2f-embedded-webview-loaded-event', { 
            bubbles: true, 
            composed: true 
          });
          this.dispatchEvent(viewerLoadedEvent); 
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
