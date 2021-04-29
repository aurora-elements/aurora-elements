import { css } from 'lit'

export const styles = css`
    :host {
        display: block;
        outline: none!important;
    }
    header {
        transition: color 300ms linear;
        cursor: pointer;
        user-select: none;
        padding: 15px 20px;
        display: grid;
        grid-template-columns: auto 24px;
        outline: none!important;
    }
    :host([expanded]) header {
        cursor: default;
        color: var(--accordion-item-color-expanded, var(--color-accent, #3579B2));
    }
    :host([expanded][multiple-support]) header {
        cursor: pointer;
    }
    :host header svg {
        transition: transform 100ms linear;
        transform: rotate(-90deg);
        fill: var(--accordion-item-border-color, var(--border-color, #c1c1c1));
    }
    :host([expanded]) header  svg {
        transform: rotate(90deg);
    }
    h3 {
        margin: 0;
        font-size: 1rem;
        user-select: none;
        font-weight: 600;
    }
    .content {
        transition: all 0.35s;
        float:left;
        width: 100%;
        box-sizing: border-box;
        outline: none!important;
        max-height:0;
        padding:0 20px 0 20px;
        overflow: hidden;
    }
    .content.open {
        padding-bottom: 20px;
        max-height: 100vh;
    }
`;
