
import "./components/p2f.kiosk.header";
import "./components/p2f.kiosk.overview";
import "./components/p2f.kiosk.categories";
import "../../../modules/p2f/grid/p2f.grid.module";
import {LitElement, html } from 'lit';
import { customElement, property } from "lit/decorators.js";
import { kioskTemplate } from "./p2f.kiosk.templates.apps";
import { styles } from "./p2f.kiosk.styles.apps";

@customElement('ae-p2f-kiosk')
export class P2fKiosk extends LitElement {
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
  backgroundImage: any;

  static get styles() {
      return [styles];
  }

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

  searchChanged() {
    setTimeout(() => {
      if(this.searchInput.value.length != 0) {
        this.searchString = this.searchInput.value;
      } else {
        this.searchString = undefined; 
      }
    },300)
  }

  private get searchInput(): HTMLInputElement {
    return this.shadowRoot!.querySelector('#search')! as HTMLInputElement;
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

  firstUpdated() {
    this.backgroundImage = 'url('+ this.urlBase +'/api/scope/'+ this.spaceKey +'/asset/1196/thumbnail?&width=1920)';

    document.addEventListener('ae-p2f-kiosk-categories:ae-p2f-kiosk|select', (e:CustomEvent) => {
      this.category = e.detail.category;  
      this.selectedCategory = parseInt(e.detail.catgory);
      this.selectedCategoryName = e.detail.name;
    });
  }

  /* Render template */
  render() {
    let selectItem =                `at '${this.spaceKey}' select item from 'p2fDocumentItem' `;
    let filterByStatusOrCategory =  `${this.status === 'all' && this.category === 'all' ? '' : 'where'}`;
    let filterByStatus =            `${this.status != 'all' ? "%7Bitems publishedstate eq '" + this.status + "'%7D" : ""}`;
    let filterByStatusAndCategory = `${this.status != 'all' && this.category != 'all' ? 'and' : ''}`;
    let filterByCategory =          `${this.category != 'all' ? " %7Bproperty 'category' eq '" + this.category + "'%7D" : ""}`; 
    let orderBy =                   `orderby %7Bcreated ${this.sorting}%7D`;        

    let spoqlQuery = `
      ${selectItem} 
      ${filterByStatusOrCategory} 
      ${filterByStatus} 
      ${filterByStatusAndCategory}
      ${filterByCategory}
      ${orderBy}
    `;

    return html`
    <style>
      :host {
        --ae-p2f-kiosk--bg-image: ${this.backgroundImage};
        --ae-p2f-kiosk--bg-color:#e9e9e9;
      }
    </style>
      <ae-p2f-kiosk-header
      url="${this.urlBase}" 
          key="${this.spaceKey}">
          <div slot="header-extended-content">
            <slot name="header-content">
              <h1 class="slogan" style="color:#2d2e87;font-weight:700;font-size:25px;white-space:nowrap;text-overflow: ellipse;">
                ${this.slogan}
              </h1>
            </slot>
          </div>
      </ae-p2f-kiosk-header>
      <ae-p2f-kiosk-overview
        class="container"
        url="${this.urlBase}" 
        key="${this.spaceKey}">
      </ae-p2f-kiosk-overview>
      <div style="display: none">
        <ae-p2f-kiosk-categories 
          url="${this.urlBase}" 
          key="${this.spaceKey}">
        </ae-p2f-kiosk-categories>
        ${kioskTemplate(this)}
        <div class="show-box">
          <header>
            <h1>
              ${this.selectedCategoryName != undefined ? this.selectedCategoryName : 'Alle Dokumente'}
            </h1>
          </header>
          <ae-p2f-grid
            modus-viewer
            size="${this.size}"
            search-string="${this.searchString}"
            url-base="${this.urlBase}"
            spoql-query="${spoqlQuery}">
          </ae-p2f-grid>
        </div>
      </div>
      <ae-confirm-dialog></ae-confirm-dialog>
  `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
      'ae-p2f-kiosk': P2fKiosk;
  }
}
