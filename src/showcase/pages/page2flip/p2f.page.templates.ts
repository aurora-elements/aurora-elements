import { html } from "lit";
import { until } from 'lit/directives/until.js';
import { errorHandler } from "../../../functionalities/directives/error.handler.directive";
import "../../../modules/p2f/grid/p2f.grid.module";
import "../../components/headlineBlock.component";
import "../../../elements/select.element";
import { P2fCategory } from "../../../functionalities/interfaces/p2f/p2f.category.interface";

export function defaultContentTemplate() {
    return html`
    <ae-headline-block headline="page2flip Grid" style="margin-bottom: 60px;">
      Das page2flip Grid...
    </ae-headline-block>
    <small style="width: 100%;display: block;padding-bottom: 40px;opacity: .5;"
      >Version 0.0.9</small
    >
    <div class="show-box">
      <ae-p2f-grid
        size="2"
        modus-viewer
        url-base="https://lyreco.devdock.space.one"
        space-key="lyreco"
      >
      </ae-p2f-grid>
    </div>
    <span
      style="width: 100%;display: block;padding: 0 0 10px 0;font-weight: 400;font-size: 20px;"
      >Mit spoQL</span
    >
    <div class="show-box">
      <ae-p2f-grid
        url-base="https://page2flip-staging.customer.space.one"
        spoql-query="at 'thenewp2f' select item from 'p2fDocumentItem' where %7Bitems publishedstate eq 'PUBLISHED'%7D orderby %7Bcreated descending%7D limit 3"
      >
      </ae-p2f-grid>
    </div>
  `;
}

export function DIYconfigTemplate(t:any) {
    return html`
    <div class="show-box space-bottom-20">
      <label style="float:left;width:100%;">Internetadresse der Instanz</label>
      <input
        id="urlBase"
        type="text"
        .value="${t.urlBase}"
        placeholder="URL"
        style="float:left;width:100%;margin-top:10px;padding:5px 10px;"
      />
      <label style="float:left;width:100%;margin-top:20px;"
        >Key des Spaces, aus dem die Dokumente abgerufen werden sollen</label
      >
      <input
        style="float:left;width:100%;margin-top:10px;padding:5px 10px;"
        type="text"
        id="spaceKey"
        @change="${t.spaceKeyChanged}"
        .value="${t.spaceKey}"/>

      <label style="float:left;width:100%;margin-top:20px;">
        Wie viele Dokumente sollen angezeigt werden?
      </label>
      <input
        id="size"
        type="number"
        @change="${t.sizeChanged}"
        .value="${t.size}"
        style="float:left;width:100%;margin-top:10px;padding:5px 10px;"
      />
      <label style="float:left;width:100%;margin-top:20px;"
        >Dokumente aus welcher Kategorie sollen angezeigt werden?</label
      >
      <select
        id="category"
        @change="${t.categoryChanged}"
        style="float:left;width:100%;margin-top:10px;"
      >
        <option value="all">Alle</option>
        ${until(
          t.categoryItems
            .then(
                (categories: any) => html`
                ${categories.map(
                    (category: P2fCategory) => html`
                    <option
                      value="${category.id}"
                      .selected="${category.id === t.selectedCategory}"
                    >
                      ${category.name != undefined
                            ? category.name
                            : category.id}
                    </option>
                  `
                )}
              `
            )
            .catch((e: Event) => errorHandler(t, e, "category", true)),
        html`
            <slot name="documents-loading-information">
              <ae-loader part="documents-loading-information"></ae-loader>
            </slot>
          `
    )}
      </select>
      <label style="float:left;width:100%;margin-top:20px;"
        >Dokumente mit welchen Veröffentlichungsstatus sollen angezeigt
        werden?</label
      >
      <ae-select
        style="float:left;width:100%;margin-top:10px;"
        @change="${t.statusChanged}"
        id="status"
        .options="${[
            { value: "all", text: "Alle" },
            { value: "PUBLISHED", text: "Veröffentlicht" },
            { value: "DRAFT", text: "Entwurf" },
        ]}"
        .selected="${t.status}"
      >
      </ae-select>

      <label style="float:left;width:100%;margin-top:20px;">Sortierung</label>
      <ae-select
        style="float:left;width:100%;margin-top:10px;"
        id="sorting"
        @change="${t.sortingChanged}"
        .options="${[
            { value: "descending", text: "Erstellungsdatum absteigend" },
            { value: "ascending", text: "Erstellungsdatum aufsteigend" },
        ]}"
        .selected="${t.sorting}">
      </ae-select>
    </div>
    <div class="show-box space-bottom-20">
        <label style="float:left;width:100%;">Suche</label>
        <input
            id="search"
            type="text"
            @change="${t.searchChanged}"
            .value="${t.search != undefined ? t.search : ''}"
            placeholder="Suche nach Dokument"
            style="float:left;width:100%;margin-top:10px;padding:5px 10px;"/>  
    </div>
  `;
}
