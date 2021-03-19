import { css } from "lit-element";

export const styles = css`
    :host {

    }
    h2, h3 {
        border-bottom: 1px solid #e0e6ed;
    }
    h2 {
        font-size: 2.8125rem;
        font-weight: 300;
        color: #484848;
        margin: 20px 0 10px 0;  
        padding-bottom: 10px;     
    }
    h3 {
        color:#484848;
        font-size: 24px;
        font-weight: 400;
        line-height: 34px;
        margin-top:80px;
        margin-bottom:10px;  
        padding-bottom: 10px;      
    }
    p {
        font-size: 20px;
        color: #9c9c9c;
        font-weight: 300;
        line-height: 160%;
        margin-top:0;
    }
    :host([is-subheadline]) p {
        color: #9c9c9c;
        font-weight: 300;
        font-size: 18px;
        line-height: 160%;       
    }
`;