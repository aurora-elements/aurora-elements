import { css } from "lit";

export const styles = css`
    :host {
        background-image: var(--ae-p2f-kiosk--bg-image, none);
        background-color: var(--ae-p2f-kiosk--bg-color, #e9e9e9);
        display:grid;
        grid-template-rows: max-content 1fr;
        width:100%;
        height:100vh;
        overflow-x:hidden;
        overflow-y: auto;
        box-sizing: border-box;
    }

    ::part(container) {
        max-width: var(--ae-p2f-kiosk-container--width, 1400px);
    }


    ae-p2f-grid {
        width: 100%;
        box-sizing: border-box;
    }
    .show-box {
        background-color: var(--grey-ligthest);
        padding:40px;
        margin-bottom:40px;
        float: left;
        width: 100%;
        box-sizing: border-box;
        position:relative;
    }
    .space-bottom-20 {
        margin-bottom:20px!important;
    }
    header h1 {
        font-weight: 300;
        margin: 0 0 20px 0;
    }

    #categoryMenu {
        width:100%;
        float:left;
        background:orange;
        height:40px;
        overflow: hidden;
    }
    #categoryMenu span {
        padding:10px 20px;
        background:yellow;
        margin-right:10px;
        float:left;
        cursor:pointer;
        user-select: none;
    }
    .category-hidden {
        display:none;
    }
    .category-visible {
        display: block;
    }
    #categoryMenu span.category-active {
        color: red!important;
        cursor:default;
        pointer-events: none;
    }
`;