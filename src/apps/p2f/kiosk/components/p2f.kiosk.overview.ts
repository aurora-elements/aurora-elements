import "../../../../elements/loader.element";
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { errorHandler } from "../../../../functionalities/directives/error.handler.directive";
import { until } from "lit/directives/until";
import { P2fCategory } from "../../../../functionalities/interfaces/p2f/p2f.category.interface";
import publicApi from "../../../../functionalities/directives/spo/spo.api.fetch.public.directive";
import { spoUriConverter } from "../../../../functionalities/directives/spo/spo.uri.converter.directive";


const styles = css`
    :host {
        display:block;
        width:100%;
        padding:4.315vh 2.084vw;
        box-sizing: border-box;
    }
    .container {
        grid-template-columns: repeat(auto-fill,minmax(400px,1fr));
        grid-gap: 30px;
        grid-template-rows: max-content;
        margin:0 auto;
        max-width: var(--ae-p2f-kiosk-container--width, 1400px);
        display: grid;
    }
    div:not(.container) {
        transition: color 200ms linear 0s, background-color 400ms ease-in-out 0s;
        background-color:#fff;
        display: grid;
        grid-template-rows: 1fr 60px;
        box-shadow: 0px 20px 30px -20px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
    div:not(.container):hover {
        background-color: #9ac31c;
        color:#fff;
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

    @property({type: String, attribute:'url'})
    urlBase: string = "";
  
    @property({type: String, attribute: 'key'})
    spaceKey: string = "";

    static get styles() {
        return [styles];
    }
    render() {
        let categoryItems = publicApi.get(`${this.urlBase}/api/scope/${this.spaceKey}/items/p2fDocumentCategory`);
        return html`
        <div class="container" part="container">
            ${until(
                categoryItems
                .then(
                    (categories: any) => html`
                        ${categories.filter(category => category.meta.parent == undefined).map(
                            (category: P2fCategory) => html`
                            <div id="${category.id}">
                                <img src="${spoUriConverter(this.urlBase + '/api', category.asset.thumbnailUri)}?Width=500" />
                                <span>
                                    ${category.name != undefined ? category.name : category.id}
                                </span>                         
                            </div>
                            `
                        )}
                    `
                ).catch((e: Event) => errorHandler(this, e, "ae-p2f-kiosk-overview", true)),
                
                html``
            )}
        </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-p2f-kiosk-overview': P2fKioskOverview;
    }
}