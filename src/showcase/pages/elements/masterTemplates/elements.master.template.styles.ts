import { css } from "lit";

export const elementsMasterStyles = css`
    :host {
        display: block;
        width: 100%;
        height:100%;
    }
    small {
        width: 100%;
        display: block;
        padding-bottom: 40px;
        opacity: .5;
    }
    .element-preview {
        background-color:var(--grey-ligthest);
        padding:20px;
        margin-bottom:40px;
    }

    ae-tabs {
        margin-top:40px;
        --ae-tabs-nav--bg: var(--grey-ligthest, #f8f8f8);
        --ae-tabs-nav--bg-active: var(--grey-middle, #e0e6ed);
        --ae-tabs-nav--color: var(--color-headlineBlock-primary, var(--color-text-primary, #484848));
    }

    .code-block-wrapper {
        position: relative;
        background-color: var(--grey-ligthest, #f8f8f8);
    }
    .code-block-wrapper a {
        transition: color 300ms linear 0s;
        position: absolute;
        top: 20px;
        right: 20px;
        color: var(--showcase-grey--3, #9c9c9c);
    }
    .code-block-wrapper a:hover {
        color: var(--showcase-accent--1, #3470b0);
    }
    .code-copied {
        animation: copied 1s cubic-bezier(0.75, 0.02, 0.5, 1);
    }
    @keyframes copied {
        0% {
            background-color: var(--grey-ligthest, #f8f8f8);
        }
        50% {
            background-color: var(--showcase-grey--2,#9c9c9c);
        }
        100% {
            background-color: var(--grey-ligthest, #f8f8f8);
        }
    }
`;