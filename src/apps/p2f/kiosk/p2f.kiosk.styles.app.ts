import { css } from "lit";

export const styles = css`
    :host {
        background-image: var(--ae-p2f-kiosk--bg-image, none);
        background-color: var(--ae-p2f-kiosk--bg-color, #e9e9e9);
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
        display:grid;
        grid-template-rows: 100px 1fr;
        width:100%;
        height:100vh;
        overflow:hidden;
        box-sizing: border-box;
    }

    ::part(container) {
        max-width: var(--ae-p2f-kiosk-container--width, 1400px);
        padding-left: var(--ae-p2f-kiosk--padding-horizontal, 2.084vw);
        padding-right: var(--ae-p2f-kiosk--padding-horizontal, 2.084vw);
        margin: 0 auto;
        box-sizing: border-box;
    }
    [slot=header-extended-content] {
        overflow:hidden;
    }
    .ae-p2f-kiosk-content {
        overflow-y: auto;
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

    .fadeOut {
        transition: opacity 500ms linear 0s, height 0ms linear 500ms;
        opacity: 0;
        height:0;
        overflow:hidden;
        visibility: hidden;
    }
    .fadeIn {
        transition: opacity 500ms linear 0s, height 0ms linear 500ms;
        opacity: 1;
        height:100%;
        visibility: visible;
        display: block;
        position:relative;
    }
`;