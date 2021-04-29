import { css } from "lit";

export const styles = css`
    :host {
        contain: content;
        display: grid;
        background-color: #fff;
        border-radius: .4rem;
        box-shadow: 0 .133rem rgba(0,0,0,.05);
    }
    :host([vertical]) {}
    :host([embedded]) {
        box-shadow: none;
        border-radius: none;
    }
    :host([actions=true]) {}

    /* header */
    header {
        padding: calc(var(--basic-space) / 2) var(--basic-space);
    }
    h3 {
        font-size: 21px;
        color: var(--primary-font-color, #484848);
        line-height: 140%;
        font-weight: 400;
    }
`;