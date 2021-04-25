import { css } from "lit-element";

export const styles = css`
    :host {
        contain: content;
        display: block;
    }
    svg {
        width:100px;
        display: block;
    }
    svg circle {
        fill: var(--loader-svg--fill, var(--ae--accentColor, #888888));
    }
`;