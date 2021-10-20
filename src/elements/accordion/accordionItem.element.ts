import { LitElement, html, css } from "lit";
import {customElement, property} from 'lit/decorators.js';

const styles = css`
    :host {
        display: block;
        outline: none!important;
    }
    header {
        transition: color 300ms linear;
        cursor: pointer;
        user-select: none;
        padding: 15px 20px;
        display: grid;
        grid-template-columns: auto 24px;
        outline: none!important;
    }
    :host([expanded]) header {
        cursor: default;
        color: var(--accordion-item-color-expanded, var(--color-accent, #3579B2));
    }
    :host([expanded][multiple-support]) header {
        cursor: pointer;
    }
    :host header svg {
        transition: transform 100ms linear;
        transform: rotate(-90deg);
        fill: var(--accordion-item-border-color, var(--border-color, #c1c1c1));
    }
    :host([expanded]) header  svg {
        transform: rotate(90deg);
    }
    h3 {
        margin: 0;
        font-size: 1rem;
        user-select: none;
        font-weight: 600;
    }
    .content {
        transition: all 0.35s;
        float:left;
        width: 100%;
        box-sizing: border-box;
        outline: none!important;
        max-height:0;
        padding:0 20px 0 20px;
        overflow: hidden;
    }
    .content.open {
        padding-bottom: 20px;
        max-height: 100vh;
    }
`;


@customElement('ae-accordion-item')
class AeAccordionItem extends LitElement {

    /* Properties - LitElement */
    @property() 
    label = '';

    @property({reflect: true,  type: Boolean}) 
    expanded = false;

    @property({attribute: 'multiple-support', reflect: true, type: Boolean}) 
    multipleSupport = false;

    /* Styles - LitElement */
    static get styles() {
        return [styles]
    }

    /* Render template */
    render() {
        return html`
        <header
            part="header"
            id="button-${this.convertLabel(this.label)}"
            tabindex="-1"
            @click=${this.toggle}>
            <h3>${this.label}</h3>
            <svg 
                style="width:24px;height:24px" 
                viewBox="0 0 24 24">
                <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
            </svg>
        </header>
        <div
            part="content"
            id="item-${this.convertLabel(this.label)}"
            class='content ${!this.expanded ? "" : "open"}'>
            <slot></slot>
        </div>
    `
    }

    /* Methods */
    convertLabel(string: string) {
        return string.replace(/\s/g, '-').toLowerCase();
    }

    toggle() {
        let parent = this.parentNode;
        let expanded = parent!.querySelector("[expanded]");

   

        if(!this.multipleSupport) {
            if(expanded !== null) {
                expanded!.removeAttribute('expanded');
            }
            this.setAttribute('expanded', '');
        } else {
            if(this.expanded) {
                this.removeAttribute('expanded')
            } else {
                this.setAttribute('expanded', '')
            }
        }
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-accordion-item': AeAccordionItem;
    }
}