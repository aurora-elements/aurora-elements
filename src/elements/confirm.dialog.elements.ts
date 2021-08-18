import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

const styles = css`
    :host {
        display:block;
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
    btnLabelSubmit: string = 'Yes';

    @property({attribute: 'action'})
    deleteAction: any;

    @property({type: String, attribute: false})
    deleteTargetName: string;

    @property({type: Number, attribute: false})
    deleteTargetId: number;

    cancel() {

    }

    submit() {
        let deletedEvent = new CustomEvent('ae-deleted-event', { 
            detail: {
              id: this.deleteTargetId
            },
            bubbles: true, 
            composed: true });
          this.dispatchEvent(deletedEvent); 
    }

    firstUpdated() {
        document.addEventListener('ae-delete-request-event', (e:any) => {
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
            <header>
                <h5>
                    ${this.headline}
                </h5>
            </header>
            <div>
                ${this.description}
            </div>
            <footer>
                <a href="#" @click=${this.cancel}>${this.btnLabelCancel}</a>
                <a href="#" 
                    onclick="${this.deleteAction}(${this.deleteTargetId});" 
                    @click=${this.submit}>
                    ${this.btnLabelSubmit}
                </a>
            </footer>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
      "ae-confirm-dialog": AeConfirmDialog;
    }
  }
