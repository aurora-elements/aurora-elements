import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

const styles = css`
    :host {
        display: block;
        position: relative;
        font-family: var(--button-fontFamily, sans-serif);
        font-size: var(--button-fontSize, 13px);
    }
    .ae-button-dropdown-button {
        cursor: pointer;
        display: grid;
        grid-template-columns: 1fr 30px;
        align-items: center;
        justify-items: center;
        transition: all 200ms ease-in-out 0s;
        background-color: var(--button-bg, #3579b2);
        color: var(--button-color, #fff);
        box-shadow: none;
        border-radius: var(--button-borderRadius, .4rem);
        padding: 0 calc(var(--button-spacing, 1rem) / 2) 0 var(--button-spacing, 1rem);
        height: 30px;
        line-height: 30px;
        font-weight: 400;
        letter-spacing: .5px;
    }
    .ae-button-dropdown-button:hover {
        background-color: var(--button-bg--hover, #3579b2);
        box-shadow: var(--button-boxShadow--hover, 0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12));
    }
    .ae-button-dropdown-button-icon {
        transition: transform .2s ease-out;
        transform-origin: center;
        height: 20px;
        padding: 5px 0;
        width: auto;
    }
    .ae-button-dropdown-button span {
        float: left;
    }
        
    .ae-button-dropdown-button-icon svg {
        height: 20px;
    }
    .ae-button-dropdown-button-icon path {
        fill: var(--button-color, #fff);
        opacity: .7;
    }

    .ae-button-dropdown-content {
        transition: max-height .2s ease-out;
        max-height: 0;
        overflow: hidden;
        position:absolute;
        min-width:100%;
        z-index:100;
        background-color: var(--button-dropdown-content-bg, #fff);
        border-radius: 0 0 var(--button-borderRadius, .4rem) var(--button-borderRadius, .4rem);
        box-shadow: var(--button-boxShadow--hover, 0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12));
    }

    .open.ae-button-dropdown-button {
        border-radius: var(--button-borderRadius, .4rem) var(--button-borderRadius, .4rem) 0 0;            
    }
    .open .ae-button-dropdown-button-icon {
        transform: rotate(-90deg);
    }
    .open ~ .ae-button-dropdown-content {
        max-height: 20em;
        overflow-y: auto;
        animation: hide-scroll .2s backwards;
    }
    @keyframes hide-scroll {
        from, to { overflow: hidden; } 
    }
`;

@customElement('ae-button-dropdown')
export class AeButtonDropDown extends LitElement {

    @property({type: String})
    label: string = "Button label";
    @property({type: Boolean})
    open: boolean = false;

    @query(".ae-button-dropdown-button")
    button: HTMLElement;
    @query(".ae-button-dropdown-content")
    content: HTMLElement;

    static styles = [styles];

    protected render() {
        return html`
             <div 
                class='${this.open ? "ae-button-dropdown-button open" : "ae-button-dropdown-button"}'
                @click="${() => this.open = !this.open}">
                <span>
                    ${this.label}
                </span>
                <div class="ae-button-dropdown-button-icon">
                    <slot name="icon">
                        <svg viewBox="0 0 20 20">
                            <path 
                                fill="none" 
                                d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z">
                            </path>
                        </svg>
                    </slot>
                </div>
            </div>
            <div class="ae-button-dropdown-content">
                <slot></slot>
            </div>        
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-button-dropdown': AeButtonDropDown;
    }
}