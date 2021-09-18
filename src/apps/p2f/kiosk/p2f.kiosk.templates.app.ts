import { html } from "lit";
import { until } from "lit/directives/until";
import { errorHandler } from "../../../functionalities/directives/error.handler.directive";
import "../../../modules/p2f/grid/p2f.grid.module";
import "../../../elements/select.element";
import { P2fCategory } from "../../../functionalities/interfaces/p2f/p2f.category.interface";
import publicApi from "../../../functionalities/directives/spo/spo.api.fetch.public.directive";
import { spoUriConverter } from "../../../functionalities/directives/spo/spo.uri.converter.directive";
import { ThemeConfiguration } from "../../../functionalities/interfaces/spo/spo.theme.configuration";
import logo from './logo.svg';
import "../../../elements/overlay.element";
import "./components/contentview/p2f.kiosk.contentview";
import "./components/overview/p2f.kiosk.overview";
import "./components/header/p2f.kiosk.header";

export let debugMode:boolean;

export function theme(t:any) {

  let themeConfiguration:any = publicApi.get(`${t.urlBase}/api/scope/${t.spaceKey}/items/themeConfiguration`);

  themeConfiguration.then((config:ThemeConfiguration) => {
    t.backgroundColor =         config[0].backgroundColor ? config[0].backgroundColor.rgb : undefined;
    t.logo =                    config[0].logo ? config[0].logo.thumbnailUri : undefined;
    t.backgroundImage =         config[0].backgroundImage ? config[0].backgroundImage.thumbnailUri : undefined;
    t.accentColor =             config[0].accentColor ? config[0].accentColor.rgb : undefined;
    t.containerWidth =          config[0].containerWidth ? config[0].containerWidth : undefined;
    t.padding =                 config[0].padding ? config[0].padding : undefined;
    t.boxShadow =               config[0].boxShadow ? config[0].boxShadow : undefined;
    t.borderRadius =            config[0].borderRadius ? config[0].borderRadius : undefined;
    t.filterbarBorderRadius =   config[0].filterbarBorderRadius ? config[0].filterbarBorderRadius : undefined;
    t.headlineColor =           config[0].headlineColor ? config[0].headlineColor.rgb : undefined;
    t.categoryNameColor =       config[0].categoryNameColor ? config[0].categoryNameColor.rgb : undefined;
    t.debugMode =               config[0].debugMode ? config[0].debugMode : false;
  });

  debugMode = t.debugMode;

  return html`
    <style>
        :host {
          /* Basis */
          --p2f-kiosk--bg-image:              ${t.backgroundImage ? 'url(' + spoUriConverter(t.urlBase + '/api', t.backgroundImage) + '?width=1920)' : ''};
          --p2f-kiosk--bg-color:              ${t.backgroundColor ? t.backgroundColor: '#e9e9e9'};
          --p2f-kiosk--accent-color:          ${t.accentColor ? t.accentColor : '#7DAC46'};
          --p2f-kiosk-container--width:       ${t.containerWidth ? t.containerWidth : '1400px'};
          --p2f-kiosk--padding:               ${t.padding ? t.padding : '2.084vw'};
          --p2f-kiosk--box-shadow:            ${t.boxShadow ? t.boxShadow : '0px 20px 30px -20px rgba(0, 0, 0, 0.3)'};
          --p2f-kiosk--border-radius:         ${t.borderRadius ? t.borderRadius : '0'};
          --p2f-kiosk-headlines--color:       ${t.headlineColor ? t.headlineColor : '#141E38'};
          --p2f-kiosk-category-label--color:  ${t.categoryNameColor ? t.categoryNameColor : '#141E38'};
          
          /* Extended */
          /* Header */
          --p2f-kiosk-header--bg:             #fff;

          /* Filterbar */
          --p2f-kiosk-filterbar--border-radius: ${t.filterbarBorderRadius ? t.filterbarBorderRadius : t.borderRadius};
        }
    </style>
  `;
}

export function kioskTemplate(t:any) {
  return html`
    ${t.modusEmbedded ? 
      html`` :
      html`
        <ae-p2f-kiosk-header logo="${t.logo}" part="ae-p2f-kiosk-header">
          
          <div slot="header-extended-content">
            
            <slot name="header-content">

              <h1 class="slogan" style="color:#2d2e87;font-weight:700;font-size:25px;white-space:nowrap;text-overflow: ellipse;">
                ${t.slogan}
              </h1>

            </slot>

          </div>

        </ae-p2f-kiosk-header>
      `
    }
    <div 
      class="p2f-kiosk-content" 
      part="p2f-kiosk-content">

      <ae-p2f-kiosk-overview
        part="p2f-kiosk-overview" 
        exportparts="
        p2f-kiosk-overview-grid-container,
        p2f-kiosk-overview-category-item,
        p2f-kiosk-overview-category-img,
        p2f-kiosk-overview-category-name,
        p2f-kiosk-overview-feature-documents-headline-box,
        p2f-kiosk-overview-feature-documents-headline,
        p2f-kiosk-overview-grid"
        class="container">
      </ae-p2f-kiosk-overview>

      <ae-p2f-kiosk-contentview 
        part="p2f-kiosk-contentview">
      </ae-p2f-kiosk-contentview>

    </div>
    <ae-overlay size="full" part="p2f-kiosk-overlay" ?debug-mode=${t.debugMode}>

      <img 
          slot="logo"
          style="${t.logo ? '' : 'height:30px;'}"
          src="${t.logo ? spoUriConverter(t.urlBase + '/api', t.logo) + '?height=30' : logo}" />
      
      <ae-embedded-webview
        ?debug-mode=${t.debugMode}
        part="p2f-kiosk-embedded-webview" 
        base-url="${t.urlBase}"
        space-key="${t.spaceKey}">
      </ae-embedded-webview> 

    </ae-overlay>

    ${t.modusEdit ? html`

      <ae-confirm-dialog 
        ?debug-mode=${t.debugMode}
        part="p2f-kiosk-confirm-dialog">
      </ae-confirm-dialog>` :

      html``
    }     
  `;
}

/* old */
export function kioskTemplateold(t:any) {
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
                    ${category.name ? category.name : category.id
                    }                     
                  </option>
                `
              )}
            `
          ).catch((e: Event) => errorHandler(t, e, "category", debugMode)),
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
import "../../../elements/embedded.webview.element";
