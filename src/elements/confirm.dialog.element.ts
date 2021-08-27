import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { aeDeleteRequestEvent, aeEvent } from "../functionalities/directives/event.directive";

/**
 * Confirm dialog
 * @description:                                          This element provides a confirm dialog.
 * @version:                                              0.0.8.
 * 
 * Javascript____________________________________________
 * @property {string} url                               - Rest-Api Endpoint for p2f documents. 
 * Methods
 * 
 * CSS___________________________________________________
 * Grid
 * @property {css} --p2f-grid-column-min                - Minimum width of an item.
 */

const styles = css`
    :host {
        transition: opacitiy 500ms ease-in-out 0s;
        display:none;
        background: rgba(0,0,0,.5);
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-items: center;
        opacity:0;
    }
    :host([visible]) {
        display:grid;
        opacity:1;
        z-index:99999;
    }
    section {
        background: #fff;
        box-shadow: 0px 20px 30px -20px rgba(0, 0, 0, 0.1);
        display: grid;
        grid-template-rows: 41px 1fr 45px;
        max-width:300px;
        user-select:none;
    }
    header {
        background-color: #ed5565;
        color: #fff;
    }
    header h5 {
        margin:0;
    }
    header, div, footer {
        padding: 12px 20px;
    }
    footer {
        text-align: right;
        padding:10px 10px 20px 10px;
    }
    footer a {
        text-transform: uppercase;
        transition: opacity 300 ms linear 0s;
        text-decoration: none;
        padding: 10px;
        font-weight: 700;
        color: #ed5565;
        opacity: .7;      
    }
    footer a:hover {opacity:1;}
    footer a[part=ae-confirm-dialog-action-cancel] {
        color: #888;
    }
`;

@customElement('ae-confirm-dialog')
export class AeConfirmDialog extends LitElement {
    
    @property({type: String, attribute: 'headline'})
    headline: string = 'Delete';
    
    @property({type: String, attribute: 'description'})
    description: string = 'Are you sure you want to delete this: "{}"?';

    @property({type: String, attribute: 'label-cancel'})
    btnLabelCancel: string = 'No';

    @property({type: String, attribute: 'label-submit'})
    btnLabelSubmit: string = 'Yes, delete';

    @property({attribute: 'action'})
    deleteAction: any = 'removeItem';

    @property({type: String, attribute: false})
    deleteTargetName: string;

    @property({type: Number, attribute: false})
    deleteTargetId: number;

    cancel(e:Event) {
        e.preventDefault();
        this.removeAttribute('visible');
        document.body.style.removeProperty('overflow');
    }

    submit(e:Event) {
        e.preventDefault();
        aeEvent(this, 'confirm-dialog', '*', 'deleted', {
            id: this.deleteTargetId
        }, true)
        this.cancel(e);
    }

    firstUpdated() {
        document.addEventListener(aeDeleteRequestEvent, (e:CustomEvent) => {

            this.setAttribute('visible', '');

            document.body.style.overflow = 'hidden';

            let name:string = e.detail.name;
            let id:number = e.detail.id;

            if(name == undefined) {
                name = 'Name not specified'
            }
            
            if(this.description.includes('{}')) {
                this.description = this.description.replace('{}', name);
            } 
            else if(this.description.includes(this.deleteTargetName)){
                this.description = this.description.replace(this.deleteTargetName, name);    
            }

            this.deleteTargetName = name;
            this.deleteTargetId = id;
            
        });
    }

    static get styles() {
        return [styles];
    }
    render() {   
        return html`
            <section part="ae-confirm-dialog">
                <header part="ae-confirm-dialog-header">
                    <h5 part="ae-confirm-dialog-headline">
                        ${this.headline}
                    </h5>
                </header>
                <div part="ae-confirm-dialog-description">
                    ${this.description}
                </div>
                <footer part="ae-confirm-dialog-footer">
                    <a 
                        href="#"
                        part="ae-confirm-dialog-action-cancel" 
                        @click=${this.cancel}>${this.btnLabelCancel}</a>
                    <a href="#" 
                        part="ae-confirm-dialog-action-submit"
                        onclick="${this.deleteAction}(${this.deleteTargetId});" 
                        @click=${this.submit}>
                        ${this.btnLabelSubmit}
                    </a>
                </footer>
            </section>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
      "ae-confirm-dialog": AeConfirmDialog;
    }
  }
