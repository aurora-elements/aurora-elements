import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { aeEvent } from '../../functionalities/directives/event.directive';
import { styles } from "./dropdown-button.styles";
import { template } from "./dropdown-button.template";

@customElement('ae-dropdown-button')
export class AeDropdownButton extends LitElement {

    @property({type: String})
    label: string = "Button label";
    @property({type: Boolean, attribute: false})
    open: boolean = false;
    @property({ type: Boolean, attribute: "debug-mode" })
    debugMode: boolean = false;

    @query(".ae-dropdown-button-button")
    button: HTMLElement;
    @query(".ae-dropdown-button-content")
    content: HTMLElement;

    handleStatusChange() {
        aeEvent(this, 'dropdown-button', '*', 'status-change', {status: this.open ? 'open' : 'closed'}, this.debugMode)
    }
    handleSlotchange() {
        aeEvent(this, 'dropdown-button', '*', 'slot-change', null, this.debugMode);
    }

    static styles = [styles];

    protected render() {
        return html`${template(this)}`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-dropdown-button': AeDropdownButton;
    }
}