import {
    LitElement,
    html,
    css
} from "lit";
import {
    customElement,
    property
} from 'lit/decorators.js';

const styles = css`
    :host {
        display: block;
    }
    h2 {
        font-size: 2.8125rem;
        font-weight: 300;
        color: var(--color-headlineBlock-primary, var(--color-text-primary, #484848));
        line-height: 1.4;
        margin: 0;  
        padding-top:60px;
    }
    h3 {
        color: var(--color-headlineBlock-primary, var(--color-text-primary, #484848));
        font-size: 2rem;
        font-weight: 300;
        line-height: 1.4;
        padding-top:80px;
        margin:0;  
    }
    p {
        font-size: 1.25rem;
        color: var(--color-headlineBlock-secondary, var(--color-text-secondary, #9c9c9c));
        font-weight: 300;
        line-height: calc(1ex / 0.32);
        margin-top:0;
        text-align: justify;
        margin:0;
        hyphens: auto;
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        font-size-adjust:.5;
        -webkit-font-size-adjust:.5;
        -moz-font-size-adjust:.5;
        -ms-font-size-adjust:.5;
        
    }
    :host([is-subheadline]) p {
        color: var(--color-headlineBlock-secondary, var(--color-text-secondary, #9c9c9c));
        font-weight: 300;
        font-size: 1.125rem;
        line-height: 160%;       
    }
    ::slotted(p:first-child) {margin-top:5px;} 
    ::slotted(p:last-child) {margin-bottom:0;} 
`;

@customElement('ae-headline-block')
export class AeHeadlineBlock extends LitElement {
    /* Properties - LitElement */
    @property()
    headline?: string;

    @property({ 
        attribute: 'is-subheadline', 
        type: Boolean 
    })
    isSubheadline?: boolean = false;


    /* Styles - LitElement */
    static get styles() {
        return [styles]
    }

    /* Render template */
    render() {
        return html`
            ${this.isSubheadline ?
                html`<h3>${this.headline}</h3>` :
                html`<h2>${this.headline}</h2>`
            }
            <p><slot></slot></p>
        `;
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'ae-headline-block': AeHeadlineBlock
    }
}

