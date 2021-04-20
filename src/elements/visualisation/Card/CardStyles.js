import { css } from "lit-element";

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

    :host([loaded]) {
        overflow: hidden;
    }
    img {
        opacity: 0;
        transition: opacity 300ms ease;
        max-width: 100%;
        max-height: 400px;
    }
    :host([loaded]) img {
        opacity: 1;
        display: block;
        margin: 0 auto;
    }

    svg {
        width:100px;
        height:100px;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%;);
    }
    svg circle {
        fill: var(--color-accent, #888);
    }
    :host([loaded]) svg {
        display: none;
    }



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