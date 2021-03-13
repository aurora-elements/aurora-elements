import { css } from "lit-element";

export const styles = css`
    :host {
        width:100%;
        overflow-x: auto;
        margin:0;
        padding:0;
        box-sizing: border-box;
        padding:0!important;
        color: #484848;
        background-color: #f5f5f5;
        position:relative;
    }
    .language {
        background-color: #fff;
        padding: 10px 0;
        margin: 0;
        text-transform: uppercase;
    }

    slot {
        white-space: pre;
        display: block;
        padding: 0px 40px 30px 40px;
        font-family: 'Roboto Mono', Consolas, Menlo, monospace;
        line-height: 1.6;
    }

    #copyButton {
        position: absolute;
        top: 0;
        right: 0;
        padding: 8px;
        background-color: #c1c1c1;
        border: none;
        outline: none;
        color: #484848;
        cursor: pointer;
        transition: all 0.2s ease-in;
        opacity: 0;
    }
    #copyButton:hover {
        background-color: var(--color-accent, #00569c);
        color: #fff;
    }

    .code-wrapper {position: relative;}
    .code-wrapper:hover #copyButton {
        opacity: 1;
    }
    #copy-success {
        position: absolute;
        top: 5px;
        right: 0;
        background-color: #f5f5f5;
        padding: 5px 10px;
        display: none;
        font-size:80%;
        color: var(--color-accent, #00569c);

    }
    #copy-success.show-message {
        display: inline-block;
    }
`;