import { css } from "lit-element";

export const styles = css`
    :root {
        scroll-behavior: smooth;
    }
    :host {
        transition:
                transform 300ms cubic-bezier(0.22, 0.61, 0.36, 1) 0s,
                opacity 300ms cubic-bezier(0.22, 0.61, 0.36, 1) 0s,
                background-color 300ms cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
        transform: translateX(100%);
        opacity:0;
        position:fixed;
        display: block;
        bottom:20px;
        right:40px;
        height:40px;
        contain: content;
        width:40px;
        background-color:#e0e6ed;
        z-index:1000;
        cursor: pointer;
    }
    :host(:hover) svg {
        fill: var(--color-accent, #00569c);
    }
    :host([is-active]) {
        transform: translateX(0);
        opacity:1;
    }
    :host svg {
        width:24px;
        height:24px;
        transform: rotate(90deg) translate(-50%, -8px);
        position: absolute;
        top: 50%;
        left: 0%;
        fill: #484848;
    }
`;