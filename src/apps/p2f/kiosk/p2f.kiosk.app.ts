
import "./components/p2f.kiosk.header";
import "./components/p2f.kiosk.overview";
import "./components/p2f.kiosk.contentview";
import "./components/p2f.kiosk.categories";
import "../../../modules/p2f/grid/p2f.grid.module";
import {LitElement, html } from 'lit';
import { customElement, property, query } from "lit/decorators.js";
import { styles } from "./p2f.kiosk.styles.app";
import publicApi from "../../../functionalities/directives/spo/spo.api.fetch.public.directive";

export const debugMode:boolean = true;

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

  @property({type:Boolean, attribute: 'modus-edit'})
  modusEdit: boolean = false;

  @property({type:Boolean, attribute: 'modus-embedded'})
  modusEmbedded: boolean = false;

  @query('ae-p2f-kiosk-header')
  header: any;

  @query('ae-p2f-kiosk-overview')
  overview: any;

  @query('ae-p2f-kiosk-contentview')
  contentview: any;

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
    let obj = {
      url: this.urlBase,
      key: this.spaceKey,
      size: this.size,
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

    this.backgroundImage = 'url('+ this.urlBase +'/api/scope/'+ this.spaceKey +'/asset/1196/thumbnail?&width=1920)';

    document.addEventListener('ae-p2f-kiosk-categories:ae-p2f-kiosk|select', (e:CustomEvent) => {
      this.category = e.detail.category;  
      this.selectedCategory = parseInt(e.detail.catgory);
      this.selectedCategoryName = e.detail.name;
    });
  }

  /* Render template */
  render() {
 /*   let selectItem =                `at '${this.spaceKey}' select item from 'p2fDocumentItem' `;
    let filterByStatusOrCategory =  `${this.status === 'all' && this.category === 'all' ? '' : 'where'}`;
    let filterByStatus =            `${this.status != 'all' ? "%7Bitems publishedstate eq '" + this.status + "'%7D" : ""}`;
    let filterByStatusAndCategory = `${this.status != 'all' && this.category != 'all' ? 'and' : ''}`;
    let filterByCategory =          `${this.category != 'all' ? " %7Bproperty 'category' eq '" + this.category + "'%7D" : ""}`; 
    let orderBy =                   `orderby %7Bcreated ${this.sorting}%7D`;        

   /* let spoqlQuery = `
      ${selectItem} 
      ${filterByStatusOrCategory} 
      ${filterByStatus} 
      ${filterByStatusAndCategory}
      ${filterByCategory}
      ${orderBy}
    `;*/

    return html`

      <style>
        :host {
          --ae-p2f-kiosk--bg-image: ${this.backgroundImage};
          --ae-p2f-kiosk--bg-color:#e9e9e9;
        }
      </style>

      ${this.modusEmbedded ? 
        html`` : 
        html`
          <ae-p2f-kiosk-header>
            <div slot="header-extended-content">
              <slot name="header-content">
                <h1 class="slogan" style="color:#2d2e87;font-weight:700;font-size:25px;white-space:nowrap;text-overflow: ellipse;">
                  ${this.slogan}
                </h1>
              </slot>
            </div>
          </ae-p2f-kiosk-header>
        `
      }
      <div class="ae-p2f-kiosk-content">
        <ae-p2f-kiosk-overview class="container"></ae-p2f-kiosk-overview>
        <ae-p2f-kiosk-contentview></ae-p2f-kiosk-contentview>
      </div>

      ${this.modusEdit ? html`<ae-confirm-dialog></ae-confirm-dialog>` : html``}
      
  `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
      'ae-p2f-kiosk': P2fKiosk;
  }
}
