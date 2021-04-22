import { css } from "lit-element";

export const styles = css`
    :host {
        contain: content;
        display: grid;
        background-color: var(--card--backgroundColor, var(--ae--backgroundColor, #ffffff));
        border-radius: var(--card--radius, var(--ae--radius, .4rem));
        box-shadow: var(--card--shadow, var(--ae--shadow, 0 .133rem rgba(0,0,0,.05)));
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
    a {
        height:100%;
        width: 100%;
        position: absolute;
        top: 0;
        left:0;
    }
    figure {
        margin:0;
        width:100%;
        position: relative;
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
        transform: translate(-50%, -50%);
    }
    svg circle {
        fill: var(--card-loading-svg--fill, var(--ae--accentColor, #888888));
    }
    :host([loaded]) svg {
        display: none;
    }

    /* header */
    header {
        padding: 
        calc(
            var(--card-header--padding, var(--ae--padding, 20px)) / 2) 
            var(--card-header--padding, var(--ae--padding, 20px))
        ;
    }
    h3 {
        font-size: var(--card-label--fontSize, var(--ae--fontSize, 21px));
        color: var(--card-label--color, var(--ae--color, #484848));
        line-height: 140%;
        font-weight: 400;
    }
`;