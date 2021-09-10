import "../../../../elements/loader.element";
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { errorHandler } from "../../../../functionalities/directives/error.handler.directive";
import { until } from "lit/directives/until";
import { P2fCategory } from "../../../../functionalities/interfaces/p2f/p2f.category.interface";
import { spoUriConverter } from "../../../../functionalities/directives/spo/spo.uri.converter.directive";
import { aeEvent } from "../../../../functionalities/directives/event.directive";
import { debugMode } from "../p2f.kiosk.app";

const styles = css`
    :host {
        display:block;
        width:100%;
        margin:0 auto;
        max-width: var(--ae-p2f-kiosk-container--width, 1400px);
        transition: transform 500ms linear 0s;
    }
    .grid-container {
        grid-template-columns: repeat(auto-fill,minmax(250px, 1fr));
        grid-gap: calc(var(--ae-p2f-kiosk--padding-horizontal, 2.084vw) / 2);
        grid-template-rows: max-content;       
        display: grid;
        padding: var(--ae-p2f-kiosk--padding-horizontal, 2.084vw);
    }
    div:not(.grid-container) {
        background-color:#fff;
        display: grid;
        grid-template-rows: 1fr 60px;
        box-shadow: 0px 20px 30px -20px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        background-image: linear-gradient(to right, #9ac31c 50%, #fff 0);
        background-position: right;
        background-size: 201% 200%;
        transition: background-position 500ms ease-in-out 0s, color 200ms linear 0s;
    }
    div:not(.grid-container):hover {
        color:#fff;
        background-position: left;
    }
    
    span {
        display: block;
        padding:0 20px;
        line-height: 60px;
        font-size:20px;
        white-space: nowrap;
        width:100%;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    img {
        display: block; 
        width:100%;
    }
`;

@customElement('ae-p2f-kiosk-overview')
export class P2fKioskOverview extends LitElement {

    @property({attribute: false})
    data: any;

    static get styles() {
        return [styles];
    }
    render() {
        return html`
        <div class="grid-container" part="grid-container">
            ${until(
                this.data.categoryItems
                .then(
                    (categories: any) => html`
                        ${categories.filter(category => category.meta.parent == undefined).map(
                            (category: P2fCategory) => html`
                            <div 
                                id="${category.id}"                                 
                                @click=${(e:Event) => this.rootCategoryHandler(e, category.id, category.name)}>
                                <img src="${spoUriConverter(this.data.url + '/api', category.asset.thumbnailUri)}?Width=500" />
                                <span>
                                    ${category.name != undefined ? category.name : category.id}
                                </span>                         
                            </div>
                            `
                        )}
                    `
                ).catch((e: Event) => errorHandler(this, e, "ae-p2f-kiosk-overview", debugMode)),
                
                html``
            )}
        </div>
        <div class="grid-container" style="padding-top: 0;padding-bottom:0">
            <h2 style="color: #2d2e87;font-weight: 600;margin-top:0;">Die aktuellen Highlights</h2>
        </div>
        <div class="grid-container" part="grid-container" style="grid-template-columns: unset;padding-top: 0;">
            <ae-p2f-grid
                modus-viewer
                spoql-query="at '${this.data.key}' select item from 'p2fDocumentItem' where %7Bproperty 'featured' eq 'true'%7D"
                space-key=${this.data.key}
                size="${this.data.size}"
                url-base="${this.data.url}">
            </ae-p2f-grid>
        </div>
        `;
    }

    rootCategoryHandler(e:Event, id:number, name:string) {
        e.preventDefault();
        aeEvent(this, '*', 'p2f-kiosk-contentview', 'show', {
            id: id,
            name: name
        }, debugMode);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-p2f-kiosk-overview': P2fKioskOverview;
    }
}