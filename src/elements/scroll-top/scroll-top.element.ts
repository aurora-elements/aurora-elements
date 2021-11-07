import { html, LitElement } from "lit";
import { customElement, property } from 'lit/decorators.js';
import { template } from "./scroll-top.template";
import { styles } from "./scroll-top.styles";

@customElement('ae-scroll-top')
export class AeScrollTop extends LitElement {

    /* Properties - LitElement */
    @property({attribute: 'scroll-container'})
    scrollContainer?:string;

    /* First updated - LitElement */
    firstUpdated() {
        let scrollCon:any;
        if(this.scrollContainer) {
            scrollCon = this.parentNode?.querySelector(this.scrollContainer);

            scrollCon?.addEventListener('scroll', () => {
                if (scrollCon.scrollTop > 50) {
                    this.setAttribute('is-active', '');
                } else {
                    this.removeAttribute('is-active');
                }
            });
            this.addEventListener('click', () => {
                scrollCon.scrollTo({
                    top: 0,
                    behavior: "smooth"
                  })
            })
        }
    }

    /* Styles - LitElement */
    static styles = [styles];

    /* Render template */
    protected render() { return html`${template()}`; }
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-scroll-top': AeScrollTop
    }
}