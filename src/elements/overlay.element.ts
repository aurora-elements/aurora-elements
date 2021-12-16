import { LitElement, css, html } from "lit";
import { customElement, property } from 'lit/decorators.js';
import { aeEvent } from "../functionalities/directives/event.directive";

const styles = css`
    :host {
        display: grid;
        grid-template-columns: 1fr minmax(300px, 50%); 
        grid-template-rows: 1fr; 
        gap: 0px 0px; 
        grid-template-areas: ". content"; 
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.3);
        opacity: 0;
        visibility: hidden;
        transform: scale(1.1);
        transition: visibility 0s linear .25s,opacity .25s 0s,transform .25s;
        z-index: -1;
    }
    :host([visible]) {
        opacity: 1;
        visibility: visible;
        transform: scale(1);
        transition: visibility 0s linear 0s,opacity .25s 0s,transform .25s;
        z-index: 99999;
    }
    :host([size=small]) {
        grid-template-columns: 1fr 33.33%; 
    }
    :host([size=middle]) {
        grid-template-columns: 1fr 50%;     
    }
    :host([size=full]) {
        grid-template-columns: 1fr 100%;    
    }
    section {
        background: #fff;
        grid-area: content;
    }
    header {
        background: #fff;
        display: grid;
        grid-template-columns: auto 1fr 24px;
        padding: 10px 20px;
        align-items: center;
        color: #333;
        grid-gap: 20px;
    }
    
    header h5 {margin:0}
    svg {
        cursor: pointer;
        opacity:.5;
    }
    svg:hover {
        opacity:1;
    }
    div {
        position: relative;
        width: 100%;
        height: calc(100vh - 50px);
        float: left;
        padding: 0;
    }
`;

@customElement('ae-overlay')
export class AeOverlay extends LitElement {
    @property({type: String})
    name: string;

    @property({type: String})
    size: string;

    @property({type: Boolean})
    visible: boolean = false;

    @property({type: Boolean, attribute: 'debug-mode'})
    debugMode: boolean = false;

    static styles = [styles];

    protected firstUpdated(_changedProperties: Map<string | number | symbol, unknown>): void {
        document.addEventListener('*:ae-overlay|visible', () => {
            this.visible = true;
        })
    }

    protected render() {
        return html`
            <section>
                <header>
                    <slot name="logo"></slot>
                    <h5>${this.name}</h5>
                    <svg 
                        style="width:24px;height:24px"
                        @click=${this.closeHandler} 
                        viewBox="0 0 24 24">
                        <path 
                            fill="currentColor" 
                            d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
                    </svg>
                </header>
                <div>
                    <slot></slot>
                </div>
            </section>
        `;
    }

    closeHandler() {
        this.removeAttribute('visible');
        this.name= '';
        aeEvent(this, 'overlay', '*', 'closed', null, this.debugMode)
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-overlay': AeOverlay;
    }
}