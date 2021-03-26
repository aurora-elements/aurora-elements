import { css } from "lit-element";

export const styles = css`
    :host {
        color: #9c9c9c;
    }
    span {
        padding: 20px;
        display: inline-block;
        cursor: pointer;
        user-select: none;
    }
    span:first-child {
        padding-left:0;
    }
    span[is-active] {
        color: var(--color-accent, #3579B2);
    }
`;