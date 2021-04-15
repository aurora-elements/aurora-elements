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
    slot[name=theme-icon-light] #fill {
        fill: var(--fill-icon-light, var(--color-accent-primary, #ee8735));
    }
    @media (prefers-color-scheme: dark) {
        slot[name=theme-icon-dark] {display: block;}
        slot[name=theme-icon-light] {display: none;}
    }
    @media (prefers-color-scheme: light) {
        slot[name=theme-icon-dark] {display: none;}
        slot[name=theme-icon-light] {display: block;}
    }
`;
