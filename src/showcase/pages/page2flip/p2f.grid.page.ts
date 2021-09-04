
import "../../../apps/p2f/kiosk/p2f.kiosk.apps";/* 
text suche
alternative darstellung kategorien
*/
import "../../../elements/select.element";import "../../../elements/input.wrapper.element";
import "../../../elements/dashboard/number.dashlet.element";
import "../../components/headlineBlock.component";
import "../../../modules/p2f/grid/p2f.grid.module";
import "../../../elements/card.element";
import "../../../elements/loader.element";
import {LitElement, html, css} from 'lit';
import { property } from "lit/decorators.js";
import publicApi from "../../../functionalities/directives/spo/spo.api.fetch.public.directive";
import { defaultContentTemplate, DIYconfigTemplate } from "./p2f.page.templates";

const styles = css`
  ae-p2f-grid {
    width: 100%;
    box-sizing: border-box;
  }
  .show-box {
    background-color:var(--grey-ligthest);
    padding:40px;
    margin-bottom:40px;
    float: left;
    width: 100%;
    box-sizing: border-box;
    position:relative;
  }
  .space-bottom-20 {
    margin-bottom:20px!important;
  }
`;

class P2fGridPage extends LitElement {
  @property({type: String})
  urlBase: string = "https://page2flip-staging.customer.space.one";

  @property({type: String})
  spaceKey: string = "thenewp2f";

  @property({type: Number})
  size: number = 3;

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

  @property()
  categoryItems:any = publicApi.get(`${this.urlBase}/api/scope/${this.spaceKey}/items/p2fDocumentCategory`);

  static get styles() {
    return [styles];
  }


  spaceKeyChanged() {
    setTimeout(() => {
      this.urlBase =        this.urlBaseInput.value;
      this.spaceKey =       this.spaceKeyInput.value;
      this.categoryItems =  publicApi.get(`${this.urlBase}/api/scope/${this.spaceKey}/items/p2fDocumentCategory`);
    },2000)
  }

  sizeChanged() {
    setTimeout(() => {
      this.size = parseInt(this.sizeInput.value);
    },2000)
  }

  categoryChanged() {
    setTimeout(() => {
      this.category = this.categorySelect.value;
      this.selectedCategory = parseInt(this.categorySelect.value);
    },300)
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
        console.log('searchString: ', this.searchString)
        console.log('searchString length: ', this.searchString.length)
      } else {
        this.searchString = undefined; console.log('searchString: ', this.searchString) 
      }
    },300)
  }

  private get searchInput(): HTMLInputElement {
    return this.shadowRoot!.querySelector('#search')! as HTMLInputElement;
  }

  private get urlBaseInput(): HTMLInputElement {
    return this.shadowRoot!.getElementById('urlBase')! as HTMLInputElement;
  }

  private get spaceKeyInput(): HTMLInputElement {
    return this.shadowRoot!.querySelector('#spaceKey')! as HTMLInputElement;
  }

  private get sizeInput(): HTMLInputElement {
    return this.shadowRoot!.getElementById('size')! as HTMLInputElement;
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
      ${defaultContentTemplate()}
      <ae-headline-block 
        is-subheadline 
        headline="DIY - Teste das Grid!" 
        style="margin-bottom: 20px;">
        Hier kannst du verschiedene Konfigurationsmöglichkeiten ausprobieren. 
        Der genutzte Space innerhalb der gewählten page2flip-Instanz muss ein Benutzerrolle mit anonymer Zugriff haben.
      </ae-headline-block>

      ${DIYconfigTemplate(this)}

      <div class="show-box">
        <ae-p2f-grid
          modus-viewer
          size="${this.size}"
          search-string="${this.searchString}"
          url-base="${this.urlBase}"
          spoql-query="${spoqlQuery}">
        </ae-p2f-grid>
      </div>

      <ae-confirm-dialog></ae-confirm-dialog>
      <div style="display: block;position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 1000000;background: #fff;overflow-y:auto;">
        <ae-p2f-kiosk 
          url="https://lyreco.devdock.space.one"
          key="lyreco"
          slogan="WORKING TOGETHER FOR TOMORROW">
        </ae-p2f-kiosk>
      </div>
  `;
  }
}
customElements.define('p2f-grid-page', P2fGridPage);
