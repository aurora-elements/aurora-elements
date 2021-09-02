import "../../../modules/p2f/grid/p2f.grid.module";
import {LitElement, html } from 'lit';
import { customElement, property } from "lit/decorators.js";
import { kioskTemplate } from "./p2f.kiosk.templates.apps";
import { styles } from "./p2f.kiosk.styles.apps";

@customElement('p2f-kiosk')
export class P2fKiosk extends LitElement {
  @property({type: String, attribute:'url'})
  urlBase: string = '';

  @property({type: String, attribute: 'key'})
  spaceKey: string = "thenewp2f";

  @property({type: Number})
  size: number = 20;

  @property({type: String})
  status: string = "all";

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

  static get styles() {
    return [styles];
  }

  sizeChanged() {
    setTimeout(() => {
      this.size = parseInt(this.sizeSelect.value);
    },2000)
  }

  categoryChanged() {
    setTimeout(() => {  
      this.category = this.categorySelect.value;
      this.selectedCategory = parseInt(this.categorySelect.value);
      this.selectedCategoryName = this.categorySelect.selectedOptions[0].textContent.trim();
    },300)
  }

  selectCategory(e:Event) {
    this.category = (e.target as Element).id;  
    this.selectedCategory = parseInt((e.target as Element).id);
    this.selectedCategoryName = (e.target as Element).textContent.trim();

    (e.target as Element).classList.add('selected');  

    console.log('e.target: ', e.target);
    console.log('category: ', this.category);
    console.log('selectedCategory: ', this.selectedCategory);
    console.log('selectedCategoryName: ', this.selectedCategoryName);
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

  private get categorySelect(): HTMLSelectElement {
    return this.shadowRoot!.querySelector('#category')! as HTMLSelectElement;
  }

  private get sortingSelect(): HTMLSelectElement {
    return this.shadowRoot!.querySelector('#sorting select')! as HTMLSelectElement;
  }

  private get statusSelect(): HTMLSelectElement {
    return this.shadowRoot!.querySelector('#status select')! as HTMLSelectElement;
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

      <ae-confirm-dialog></ae-confirm-dialog>
  `;
  }
}
