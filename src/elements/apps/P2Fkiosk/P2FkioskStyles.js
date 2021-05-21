import { css } from "lit";

export const styles = css`
    :host {
        display: block;
        width: 100%;
        background-color: var(--kiosk-bg, #f1f1f1);
        float: left;
        font-size: var(--kiosk-font-size, 15px);
    }
    .hidden-by-category, .hidden-by-filter {
        display: none;
    }
    aurora-card {
        cursor: pointer;
    }
    aurora-card::part(label) {
        font-size: 100%;
        margin: 0;
    }

    .slider {
        float: left;width: 100%;
        display: grid;
        grid-gap: calc(20px/ 2);
        grid-template-columns: 10px;
        grid-template-rows: 40px;
        grid-auto-flow: column;
        grid-auto-columns: max-content;
        overflow-x: scroll;
        scroll-snap-type: x proximity;
        padding-bottom: calc(.75 * 20px);
        margin-bottom: calc(-.25 * 20px);
    }
    .slider:before,
    .slider:after {
      content: '';
      width: 10px;
    }
    .slider aurora-card {
        scroll-snap-align: center;
        padding: calc(20px/ 2 * 1.5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #fff;
        border-radius: 8px;
    }
`;
