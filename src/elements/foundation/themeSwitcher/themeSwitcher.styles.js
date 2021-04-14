import { css } from "lit-element";

export const styles = css`
    :host {
        display: block;
        cursor: pointer;
        width:32px;
    }

    slot {
        display: block;
    }

    slot[name=theme-icon-dark] #fill {
        fill: var(--fill-icon-dark, var(--color-text-primary, #b0b3b8));
    }
`;
