import { LitElement, html, css } from "lit";
import {
    customElement,
    property
  } from 'lit/decorators.js';

const styles = css`
    :root {
        scroll-behavior: smooth;
    }
    :host {
        transition:
                transform 300ms cubic-bezier(0.22, 0.61, 0.36, 1) 0s,
                opacity 300ms cubic-bezier(0.22, 0.61, 0.36, 1) 0s,
                background-color 300ms cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
        transform: translateX(100%);
        opacity:0;
        position:fixed;
        display: block;
        bottom:20px;
        right:60px;
        height:40px;
        contain: content;
        width:40px;
        background-color:#e0e6ed;
        z-index:1000;
        cursor: pointer;
    }
    :host(:hover) svg {
        fill: var(--scrollTop-color-hover, var(--color-accent-primary, #00569c));
    }
    :host([is-active]) {
        transform: translateX(0);
        opacity:1;
    }
    :host svg {
        width:24px;
        height:24px;
        transform: rotate(90deg) translate(-50%, -8px);
        position: absolute;
        top: 50%;
        left: 0%;
        fill: #484848;
    }
`;

const template = html`
    <slot>
        <svg 
            style="width:24px;height:24px"
            part="icon" 
            viewBox="0 0 24 24">
            <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
        </svg>
    </slot>
`;

@customElement('ae-scroll-top')
export class AeScrollTop extends LitElement {

    /* Properties - LitElement */
    @property({attribute: 'scroll-container'})
    scrollContainer!:string;

    /* Styles - LitElement */
    static get styles() {
        return [styles]
    }

    /* Render template */
    render() {
        return template;
    }

    /* First updated - LitElement */
    firstUpdated() {

        const scrollCon = this.parentNode!.querySelector(this.scrollContainer);

        scrollCon!.addEventListener('scroll', () => {
            if (scrollCon!.scrollTop > 50) {
                this.setAttribute('is-active', '');
            } else {
                this.removeAttribute('is-active');
            }
        });

        this.addEventListener('click', () => {
            scrollCon!.scrollTo({
                top: 0,
                behavior: "smooth"
              })
        })
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-scroll-top': AeScrollTop
    }
}
