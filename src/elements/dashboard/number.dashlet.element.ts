import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

const styles = css`
    :host {
        display: grid;
        grid-template-columns: auto minmax(calc(var(--number-dashlet-icon-size, 80px) + var(--number-dashlet-actions-padding, 20px)), .5fr);
        grid-template-rows: 1fr auto;
        gap: 20px;
        grid-template-areas: ". icon" ". icon";
        align-content: center;
        box-shadow: var(--number-dashlet-shadow, var(--dashlet-shadow, 0px 20px 30px -20px rgba(0, 0, 0, 0.1)));
        background: var(--number-dashlet-bg, var(--dashlet-bg, #fff));       
    }
    #numberAndText {
        padding: var(--number-dashlet-numberAndText-padding, 20px 20px 0 20px);   
        font-size: var(--number-dashlet-numberAndText-font-size, 24px); 
        color: var(--number-dashlet-numberAndText-color, #141E38); 
    }
    #actions {
        padding: var(--number-dashlet-actions-padding, 0 20px 20px 20px);    
    }
    #icon {
        grid-area: icon;
        background: var(--number-dashlet-icon-bg, #f3f4f7);
        color: var(--number-dashlet-icon-color, #7DAC46);
        padding: var(--number-dashlet-icon-padding, 20px);
        display: grid;
        align-content: center;
        justify-content: var(--number-dashlet-icon-align, center);
    }
    svg, ::slotted(svg) {
        width: var(--number-dashlet-icon-size, 80px);
        height: var(--number-dashlet-icon-size, 80px);
    }
`;

@customElement("ae-number-dashlet")
export class AeNumberDashlet extends LitElement {

    @property({type: Number, attribute: 'number-value'})
    numberValue: number;

    @property({type: String, attribute: 'label'})
    label: string;

    render() {
        return html`
            <header 
                id="numberAndText" 
                part="numberAndText">
                <span 
                    id="number" 
                    part="number">
                    ${this.numberValue}
                </span> 
                <span 
                    id="label" 
                    part="label">
                    ${this.label}
                </span>
            </header>
            <footer 
                id="actions" 
                part="actions">
                <slot name="actions"></slot>
            </footer>
            <aside 
                id="icon" 
                part="icon">
                <slot name="icon">
                    <svg viewBox="0 0 24 24">
                        <path 
                            fill="currentColor" 
                            d="M16 0H8C6.9 0 6 .9 6 2V18C6 19.1 6.9 20 8 20H20C21.1 20 22 19.1 22 18V6L16 0M20 18H8V2H15V7H20V18M4 4V22H20V24H4C2.9 24 2 23.1 2 22V4H4M10 10V12H18V10H10M10 14V16H15V14H10Z" />
                    </svg>
                </slot>
            </aside> 
        `;
    }

    static get styles() {
        return [styles];
    }
}

declare global {
    interface HTMLElementTagNameMap {
      "ae-number-dashlet": AeNumberDashlet;
    }
  }