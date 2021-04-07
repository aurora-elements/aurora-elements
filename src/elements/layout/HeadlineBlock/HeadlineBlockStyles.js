import { css } from "lit-element";

export const styles = css`
    :host {
        display: block;
    }
    h2 {
        font-size: 2.8125rem;
        font-weight: 300;
        color: #484848;
        line-height: 160%;
        margin: 0;  
        padding-top:60px;
    }
    h3 {
        color:#484848;
        font-size: 2rem;
        font-weight: 300;
        line-height: 160%;
        padding-top:80px;
        margin:0;  
    }
    p {
        font-size: 1.25rem;
        color: #9c9c9c;
        font-weight: 300;
        line-height: 160%;
        margin-top:0;
        text-align: justify;
        margin:0;
    }
    :host([is-subheadline]) p {
        color: #9c9c9c;
        font-weight: 300;
        font-size: 1.125rem;
        line-height: 160%;       
    }
    ::slotted(p:first-child) {margin-top:5px;} 
    ::slotted(p:last-child) {margin-bottom:0;} 
`;