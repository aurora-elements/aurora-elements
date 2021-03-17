import { css } from "lit-element";

export const styles = css`
    :host {

    }
    h2 {
        font-size: 2.375rem;
        font-weight: 300;
        color: #484848;
        margin: 20px 0 40px 0;       
    }
    h3 {
        color:#484848;
        font-size: 24px;
        font-weight: 300;
        line-height: 34px;
        margin-top:60px;        
    }
    p {
        font-size: 20px;
        color: #9c9c9c;
        font-weight: 300;
        line-height: 160%;
    }
    :host([is-subheadline]) p {
        color: #9c9c9c;
        font-weight: 300;
        font-size: 18px;
        line-height: 160%;       
    }
`;