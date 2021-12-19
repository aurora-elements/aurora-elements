import { LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import { aeEvent, attr } from "../../functionalities/directive";
import { styles } from "./confirm-dialog.styles";
import { template } from "./confirm-dialog.template";
import { auroraCustomElement } from "../../functionalities/decorators";
import { AuroraElement } from "../../functionalities/mixins";

function attrVisible(t:any, action:string) {
    attr({
        target: t,
        action: action,
        key: 'visible'
    });
}

@auroraCustomElement('ae-confirm-dialog')
export class AeConfirmDialog extends AuroraElement(LitElement, {
    styles,
    template
}) {
    
    @property({type: String, attribute: 'headline'})
    headline: string = 'Delete';
    
    @property({type: String, attribute: 'description'})
    description: string = 'Are you sure you want to delete this: "{}"?';

    @property({type: String, attribute: 'cancel-button-label'})
    btnLabelCancel: string = 'No';

    @property({type: String, attribute: 'submit-button-label'})
    btnLabelSubmit: string = 'Yes, delete';
    
    @property({type: Boolean, attribute: 'debug-mode'})
    debugMode: boolean = false;

    /* states */
    @state()
    private targetSubject: string;

    @state()
    private targetId: number;

    cancel(e:Event) {
        e.preventDefault();
        attrVisible(this, 'remove');
        document.body.style.removeProperty('overflow');
    }

    submit(e:Event) { 
        e.preventDefault();
        aeEvent({
            dispatchElement: this, 
            trigger: 'confirm-dialog', 
            target: '*', 
            activity:'confirm-accepted', 
            eventDetails: {
                id: this.targetId
            }, 
            debug: this.debugMode
        })
        this.cancel(e);
    }

    protected firstUpdated(_changedProperties: Map<string | number | symbol, unknown>): void {
        document.addEventListener("*:ae-confirm-dialog|confirm-request", (e:CustomEvent) => {
            attrVisible(this, 'set');

            document.body.style.overflow = 'hidden';

            let subject:string = e.detail.subject;
            let id:number = e.detail.id;

            if(subject == undefined) {
                subject = 'Subject not specified'
            }
            
            if(this.description.includes('{}')) {
                this.description = this.description.replace('{}', subject);
            } 
            else if(this.description.includes(this.targetSubject)){
                this.description = this.description.replace(this.targetSubject, subject);    
            }

            this.targetSubject = subject;
            this.targetId = id;
            
        }); 
    }
}

declare global {
    interface HTMLElementTagNameMap {
      "ae-confirm-dialog": AeConfirmDialog;
    }
  }
