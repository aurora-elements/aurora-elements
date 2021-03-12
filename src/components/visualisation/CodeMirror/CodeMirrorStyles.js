import { css } from "lit-element";

export const styles = css`
    :host {
        width:100%;
        overflow-x: auto;
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    .language {
        color: red;
        background-color: #c1c1c1;
        padding: 12px 16px;
        border-radius: 5px 5px 0 0;
        text-align:right;
        margin:0;
    }
    .code-wrapper {
        position: relative;
    }
    pre {
        background-color: #e0e6ed;
        color: #000;
        padding: 20px;
        border-radius: 0 0 5px 5px;
        margin:0;
    }
    code {
        margin: -15px 0 0 -30px;
        display: block;
    }
    #copyButton {
        position: absolute;
        top:8px;
        right: 8px;
        padding: 8px;
        background-color: #ccc;
        border: none;
        outline: none;
        color: #000;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.2s ease-in;
        opacity: 0;
    }
    #copyButton:hover {
        background-color: red;
    }
    .code-wrapper:hover #copyButton {
        opacity: 1;
    }
    #copy-success {
        position: absolute;
        bottom: 12px;
        left: 50%;
        transform: translateX(-50%);
        background-color: red;
        color: #fff;
        padding: 16px 32px;
        font-size: 24px;;
        border-radius: 5px;
        display: none;
    }
    #copy-success.show-message {
        display: inline-block;
    }
`;