import { css } from "lit-element";

export const styles = css`
    :host {
        text-decoration: none;
        width: 100%;
        display: block;
        padding: 0 20px 10px 20px;
        line-height: 24px;
        color: #9c9c9c;
        outline: none!important;
        cursor: pointer;
    }
    :host(.aurora-state-active) {
        cursor: default;
        color: var(--routerLink-color-active, var(--color-accent-primary, #00569c));
    }
`;