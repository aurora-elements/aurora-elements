import { css } from "lit";

export const styles = css`
    :host {
        background-image: var(--p2f-kiosk--bg-image, none);
        background-color: var(--p2f-kiosk--bg-color, #e9e9e9);
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

     /* scrollbar */
    * {
        scrollbar-width: thin;
        scrollbar-color: 
        var(--p2f-kiosk-scrollBar--bg,#9c9c9c)  
        var(--p2f-kiosk-scrollBar--color,#e0e6ed);
    }
    *::-webkit-scrollbar {
        width: 12px;
    }

    *::-webkit-scrollbar-track {
        background: var(--p2f-kiosk-scrollBar--color,#e0e6ed);
    }

    *::-webkit-scrollbar-thumb {
        background-color: var(--p2f-kiosk-scrollBar--bg,#9c9c9c); 
        border-radius: 20px;
        border: 3px solid var(--p2f-kiosk-scrollBar--color, #e0e6ed);
    }

    ::part(container) {
        max-width: var(--p2f-kiosk-container--width, 1400px);
        padding-left: var(--p2f-kiosk--padding, 2.084vw);
        padding-right: var(--p2f-kiosk--padding, 2.084vw);
        margin: 0 auto;
        box-sizing: border-box;
    }
    [slot=header-extended-content] {
        overflow:hidden;
    }
    .p2f-kiosk-content {
        overflow-y: auto;
        overflow-x: hidden;
    }

    ae-p2f-grid {
        width: 100%;
        box-sizing: border-box;
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