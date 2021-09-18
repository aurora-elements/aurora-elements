import "../../../elements/overlay.element";
import "../../../elements/embedded.webview.element";
import "./components/header/p2f.kiosk.header";
import "./components/overview/p2f.kiosk.overview";
import "./components/contentview/p2f.kiosk.contentview";
import "./components/categories/p2f.kiosk.categories";
import "../../../modules/p2f/grid/p2f.grid.module";
import {LitElement, html } from 'lit';
import { customElement, property, query } from "lit/decorators.js";
import { styles } from "./p2f.kiosk.styles.app";
import publicApi from "../../../functionalities/directives/spo/spo.api.fetch.public.directive";
import { kioskTemplate, theme } from "./p2f.kiosk.templates.app";

@customElement('ae-p2f-kiosk')
export class P2fKiosk extends LitElement {

/* Properties */
  @property({type: String, attribute:'url' })
  urlBase: string = '';

  @property({type: String, attribute: 'key'})
  spaceKey: string = "";

  @property({type: Number})
  size: number = 20;

  @property({type: String})
  status: string = "all";

  @property({type: String})
  slogan: string = "";

  @property({type: String})
  sorting: string = "descending";

  @property({type: String})
  category: string = "all";

  @property({type: String})
  searchString: string;

  @property({type: Number})
  selectedCategory: number;

  @property({type: String})
  selectedCategoryName: string;

  @property()
  categoryItems:any;

  @property({attribute: false})
  logo: string;
  @property({attribute: false})
  backgroundColor:string
  @property({attribute: false})
  backgroundImage: string;
  @property({attribute: false})
  accentColor: string;

  @property({type:Boolean, attribute: 'modus-edit'})
  modusEdit: boolean = false;
  @property({type:Boolean, attribute: 'modus-embedded'})
  modusEmbedded: boolean = false;

/* Queries */
  @query('ae-p2f-kiosk-header')
  header: any;
  @query('ae-p2f-kiosk-overview')
  overview: any;
  @query('ae-p2f-kiosk-contentview')
  contentview: any;
  @query('ae-overlay')
  overlay: HTMLElement;
  @query('ae-embedded-webview')
  webview: HTMLIFrameElement;

/* Methods */
  sizeChanged() {
    setTimeout(() => {
      this.size = parseInt(this.sizeSelect.value);
    },2000)
  }

  sortingChanged() {
    setTimeout(() => {
      this.sorting = this.sortingSelect.value;
    },300)
  }

  statusChanged() {
    setTimeout(() => {
      this.status = this.statusSelect.value;
    },300)
  }

  private get sizeSelect(): HTMLSelectElement {
    return this.shadowRoot!.querySelector('#size select')! as HTMLSelectElement;
  }

  private get sortingSelect(): HTMLSelectElement {
    return this.shadowRoot!.querySelector('#sorting select')! as HTMLSelectElement;
  }

  private get statusSelect(): HTMLSelectElement {
    return this.shadowRoot!.querySelector('#status select')! as HTMLSelectElement;
  }

/* Init */
  firstUpdated() {
    let obj = {
      url: this.urlBase,
      key: this.spaceKey,
      size: this.size,
      logo: this.logo,
      categoryItems: publicApi.get(`${this.urlBase}/api/scope/${this.spaceKey}/items/p2fDocumentCategory`)
    };
    this.header.data = obj;
    this.overview.data = obj;
    this.contentview.data = obj;

    document.addEventListener('ae-*:p2f-kiosk-contentview|show', () => {
      this.overview.classList.add('fadeOut');
      this.overview.classList.remove('fadeIn');
      this.contentview.classList.remove('fadeOut');
      this.contentview.classList.add('fadeIn');
    });

    document.addEventListener('ae-*:p2f-kiosk-overview|show', () => {
      this.contentview.classList.add('fadeOut');
      this.contentview.classList.remove('fadeIn');
      this.overview.classList.remove('fadeOut');
      this.overview.classList.add('fadeIn');
    });

    document.addEventListener('ae-p2f-kiosk-categories:ae-p2f-kiosk|select', (e:CustomEvent) => {
      this.category = e.detail.category;  
      this.selectedCategory = parseInt(e.detail.catgory);
      this.selectedCategoryName = e.detail.name;
    });

    document.addEventListener('ae-embedded-webview:*|loaded', (e:CustomEvent) => {
        this.overlay.setAttribute('visible', ''); 
        this.overlay.setAttribute('name', e.detail.name);
    });

    document.addEventListener('ae-overlay:*|closed', () => {
      this.webview.src = ''; 
    })
  }

/* Template */
  render() { return html`
    ${theme(this)}
    ${kioskTemplate(this)}`;
  }

/* CSS */
  static get styles() { return [styles]; }
}

/* Declaration */
declare global {
  interface HTMLElementTagNameMap {
      'ae-p2f-kiosk': P2fKiosk;
  }
}
