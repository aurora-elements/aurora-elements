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
        margin: 20px 0 0 0;  
    }
    h3 {
        color:#484848;
        font-size: 2rem;
        font-weight: 300;
        line-height: 160%;
        margin-top:80px;
        margin-bottom:0;  
    }
    p {
        font-size: 1.25rem;
        color: #9c9c9c;
        font-weight: 300;
        line-height: 160%;
        margin-top:0;
    }
    :host([is-subheadline]) p {
        color: #9c9c9c;
        font-weight: 300;
        font-size: 1.125rem;
        line-height: 160%;       
    }
`;