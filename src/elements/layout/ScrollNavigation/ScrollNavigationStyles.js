import { css } from "lit-element";

export const styles = css`
    :host {
        color: #9c9c9c;
        transform: translateY(-100%);
        transition: transform 300ms cubic-bezier(.75,.02,.5,1) 0s;
    }
    :host([is-visible]) {
        transform: translateY(0%);    
    }
    h2 {
        float: left;
        padding-right: 20px;
        font-weight: 400;
        margin: 18px 0;
        border-right: 1px solid var(--grey-middle);
        font-size: 1.2rem;
        color: #484848;
    }
    span {
        padding: 20px;
        display: inline-block;
        cursor: pointer;
        user-select: none;
        font-size:1rem;
    }
    span:first-child {
        padding-left:0;
    }
    span[is-active] {
        color: var(--color-accent, #3579B2);
    }
`;