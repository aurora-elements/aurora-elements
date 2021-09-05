import { html } from "lit";
import { until } from "lit/directives/until";
import { errorHandler } from "../../../functionalities/directives/error.handler.directive";
import "../../../modules/p2f/grid/p2f.grid.module";
import "../../../elements/select.element";
import { P2fCategory } from "../../../functionalities/interfaces/p2f/p2f.category.interface";
import publicApi from "../../../functionalities/directives/spo/spo.api.fetch.public.directive";

export function kioskTemplate(t:any) {
    t.categoryItems = publicApi.get(`${t.urlBase}/api/scope/${t.spaceKey}/items/p2fDocumentCategory`);
    return html`
    <label style="float:left;width:100%;margin-top:20px;">
      Dokumente aus welcher Kategorie sollen angezeigt werden?
    </label>
    <select
      id="category"
      @change="${t.categoryChanged}"
      style="float:left;width:100%;margin-top:10px;">
      <option value="all">Alle Dokumente</option>
      ${until(
        t.categoryItems
          .then(
              (categories: any) => html`
              ${categories.map(
                  (category: P2fCategory) => html`
                  <option
                    value="${category.id}"
                    .selected="${category.id === t.selectedCategory}">
                    ${category.name != undefined ? category.name : category.id
                    }                     
                  </option>
                `
              )}
            `
          ).catch((e: Event) => errorHandler(t, e, "category", true)),
          html`
            <slot name="documents-loading-information">
              <ae-loader part="documents-loading-information"></ae-loader>
            </slot>
          `
      )}
    </select>

      <label style="float:left;width:100%;margin-top:20px;">
        Wie viele Dokumente sollen angezeigt werden?
      </label>
      <ae-select
        style="float:left;width:100%;margin-top:10px;"
        @change="${t.sizeChanged}"
        id="size"
        .options="${[
            { value: "20", text: "20" },
            { value: "50", text: "50" },
            { value: "100", text: "100" },
            { value: "1000", text: "1000" },
        ]}"
        .selected="${t.size}"
      >
      </ae-select>
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
