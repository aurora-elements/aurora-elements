import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { aeDeleteRequestEvent, aeEvent } from "../../functionalities/directives/event.directive";
import { styles } from "./confirm-dialog.styles";
import { template } from "./confirm-dialog.template";

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
    
    @property({type: Boolean, attribute: 'debug-mode'})
    debugMode: boolean = false;

    cancel(e:Event) {
        e.preventDefault();
        this.removeAttribute('visible');
        document.body.style.removeProperty('overflow');
    }

    submit(e:Event) {
        e.preventDefault();
        aeEvent(this, 'confirm-dialog', '*', 'deleted', {
            id: this.deleteTargetId
        }, this.debugMode)
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

    static styles = [styles];

    protected render() { return html`${template(this)}`; }
}

declare global {
    interface HTMLElementTagNameMap {
      "ae-confirm-dialog": AeConfirmDialog;
    }
  }
