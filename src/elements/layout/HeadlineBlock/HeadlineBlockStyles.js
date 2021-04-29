import { css } from "lit";

export const styles = css`
    :host {
        display: block;
    }
    h2 {
        font-size: 2.8125rem;
        font-weight: 300;
        color: var(--color-headlineBlock-primary, var(--color-text-primary, #484848));
        line-height: calc(1ex / 0.32);
        margin: 0;  
        padding-top:60px;
    }
    h3 {
        color: var(--color-headlineBlock-primary, var(--color-text-primary, #484848));
        font-size: 2rem;
        font-weight: 300;
        line-height: calc(1ex / 0.32);
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