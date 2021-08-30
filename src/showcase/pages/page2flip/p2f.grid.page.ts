
import "../../../elements/select.element";import "../../../elements/input.wrapper.element";
import "../../../elements/dashboard/number.dashlet.element";
import "../../components/headlineBlock.component";
import "../../../modules/p2f/grid/p2f.grid.module";
import "../../../elements/card.element";
import "../../../elements/loader.element";
import {LitElement, html, css} from 'lit';
import { property } from "lit/decorators.js";
import publicApi from "../../../functionalities/directives/spo/spo.api.fetch.public.directive";
import { P2fCategory } from "../../../functionalities/interfaces/p2f/p2f.category.interface";
import { errorHandler } from "../../../functionalities/directives/error.handler.directive";
import { until } from "lit/directives/until";

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

  @property({type: String})
  size: string = "3";

  @property({type: String})
  status: string = "all";

  @property({type: String})
  sorting: string = "descending";

  @property({type: String})
  category: string = "all";

  @property({type: Number})
  selectedCategory: number;

  @property()
  categoryItems:any = publicApi.get(`${this.urlBase}/api/scope/${this.spaceKey}/items/p2fDocumentCategory`);

  static get styles() {
    return [styles];
  }


  private spaceKeyChanged() {
    setTimeout(() => {
      this.urlBase =        this.urlBaseInput.value;
      this.spaceKey =       this.spaceKeyInput.value;
      this.categoryItems =  publicApi.get(`${this.urlBase}/api/scope/${this.spaceKey}/items/p2fDocumentCategory`);
    },2000)
  }

  private sizeChanged() {
    setTimeout(() => {
      this.size = this.sizeInput.value;
    },2000)
  }

  private categoryChanged() {
    setTimeout(() => {
      this.category = this.categorySelect.value;
      this.selectedCategory = parseInt(this.categorySelect.value);
    },300)
  }

  private sortingChanged() {
    setTimeout(() => {
      this.sorting = this.sortingSelect.value;
    },300)
  }

  private statusChanged() {
    setTimeout(() => {
      this.status = this.statusSelect.value;
    },300)
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
    let spoqlQuery = `
      at '${this.spaceKey}' select item from 'p2fDocumentItem' 
      ${this.status === 'all' && this.category === 'all' ? '' : 'where'} 
      ${this.status != 'all' ? "%7Bitems publishedstate eq '" + this.status + "'%7D" : ""} 
      ${this.status != 'all' && this.category != 'all' ? 'and' : ''}
      ${this.category != 'all' ? " %7Bproperty 'category' eq '" + this.category + "'%7D" : ""}  
      orderby %7Bcreated ${this.sorting}%7D 
      limit ${this.size}`;

    return html`
      <ae-headline-block headline="page2flip Grid" style="margin-bottom: 60px;">
        Das page2flip Grid...
      </ae-headline-block>
      <small style="width: 100%;display: block;padding-bottom: 40px;opacity: .5;">Version 0.0.8</small>
      <div class="show-box">
        <ae-p2f-grid
          size="2"
          modus-viewer
          url-base="https://lyreco.devdock.space.one"
          space-key="lyreco">
        </ae-p2f-grid>
      </div>
      <span style="width: 100%;display: block;padding: 0 0 10px 0;font-weight: 400;font-size: 20px;">Mit spoQL</span>
      <div class="show-box">
        <ae-p2f-grid 
          url-base="https://page2flip-staging.customer.space.one"
          spoql-query="at 'thenewp2f' select item from 'p2fDocumentItem' where %7Bitems publishedstate eq 'PUBLISHED'%7D orderby %7Bcreated descending%7D limit 3">
        </ae-p2f-grid>
      </div>
      <ae-headline-block 
        is-subheadline 
        headline="DIY - Teste das Grid!" 
        style="margin-bottom: 20px;">
        Hier kannst du verschiedene Konfigurationsmöglichkeiten ausprobieren. 
        Der genutzte Space innerhalb der gewählten page2flip-Instanz muss ein Benutzerrolle mit anonymer Zugriff haben.
      </ae-headline-block>

      <div class="show-box space-bottom-20">
        
        <label style="float:left;width:100%;">Internetadresse der Instanz</label>
        <input 
          id="urlBase" 
          type="text" 
          .value="${this.urlBase}"    
          placeholder="URL" 
          style="float:left;width:100%;margin-top:10px;padding:5px 10px;" />        
        <label style="float:left;width:100%;margin-top:20px;">Key des Spaces, aus dem die Dokumente abgerufen werden sollen</label>
        <input 
            style="float:left;width:100%;margin-top:10px;padding:5px 10px;" 
            type="text" 
            id="spaceKey" 
            @change="${this.spaceKeyChanged}"
            .value="${this.spaceKey}" />

        
        <label style="float:left;width:100%;margin-top:20px;">Wie viele Dokumente sollen angezeigt werden?</label>
        <input 
          id="size" 
          type="number" 
          @change="${this.sizeChanged}"
          .value="${this.size}"  
          style="float:left;width:100%;margin-top:10px;padding:5px 10px;"  />
        <label style="float:left;width:100%;margin-top:20px;">Dokumente aus welcher Kategorie sollen angezeigt werden?</label>
        <select 
          id="category" 
          @change="${this.categoryChanged}"
          style="float:left;width:100%;margin-top:10px;">
          <option value="all">Alle</option> 
          ${until(
            this.categoryItems.then((categories:any) => html`
              ${categories.map((category:P2fCategory) => html`
                <option value="${category.id}" .selected="${category.id === this.selectedCategory}">
                  ${category.name != undefined ? category.name : category.id }
              </option> 
              `)}
            `).catch((e:Event) => 
              errorHandler(this, e, 'category', true)
              ),
              html`
                <slot name="documents-loading-information">
                  <ae-loader part="documents-loading-information"></ae-loader>
                </slot>
              `
            )}
        </select>
        <label style="float:left;width:100%;margin-top:20px;">Dokumente mit welchen Veröffentlichungsstatus sollen angezeigt werden?</label>
        <ae-select
          style="float:left;width:100%;margin-top:10px;"
          @change="${this.statusChanged}"
          id="status"
          .options="${[{ value: 'all', text: 'Alle' }, { value: 'PUBLISHED', text: 'Veröffentlicht' }, { value: 'DRAFT', text: 'Entwurf' }]}"
          .selected="${this.status}">
        </ae-select>

        <label style="float:left;width:100%;margin-top:20px;">Sortierung nach Erstellungsdatum</label>
        <ae-select
          style="float:left;width:100%;margin-top:10px;"
          id="sorting"
          @change="${this.sortingChanged}"
          .options="${[{ value: 'descending', text: 'Absteigend' }, { value: 'ascending', text: 'Aufsteigend' }]}"
          .selected="${this.sorting}">
        </ae-select>
      </div>

      <div class="show-box">
        <ae-p2f-grid
          modus-viewer
          url-base="${this.urlBase}"
          spoql-query="${spoqlQuery}">
        </ae-p2f-grid>
      </div>

      <ae-confirm-dialog></ae-confirm-dialog>
  `;
  }
}
customElements.define('p2f-grid-page', P2fGridPage);
