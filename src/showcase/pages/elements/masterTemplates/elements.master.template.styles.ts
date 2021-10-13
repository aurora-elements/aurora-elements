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
`;