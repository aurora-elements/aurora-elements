import { css } from "lit";

export const styles = css`
    :host {
        display: block;
    }
    div {
        float:left;
        width:100%;
    }
    label {
        font-family: 'Roboto', sans-serif;
        float: left;
        width:100%;
        font-size: 16px;
        color: #555555;
        line-height: 1.5;
        padding-bottom: 5px;
        padding-top:15px;
    }
    .input-wrapper {
        width: 100%;
        position: relative;
        background-color: #f7f7f7;
        border: 1px solid #e6e6e6;
        border-radius: 10px;
    }
    .input-wrapper .input-focus {
        position: absolute;
        display: block;
        width: calc(100% + 2px);
        height: calc(100% + 2px);
        top: -1px;
        left: -1px;
        pointer-events: none;
        border: 1px solid #00569c;
        border-radius: 10px;
        visibility: hidden;
        opacity: 0;
        -webkit-transition: all 0.4s;
        -o-transition: all 0.4s;
        -moz-transition: all 0.4s;
        transition: all 0.4s;
        -webkit-transform: scaleX(1.1) scaleY(1.3);
        -moz-transform: scaleX(1.1) scaleY(1.3);
        -ms-transform: scaleX(1.1) scaleY(1.3);
        -o-transform: scaleX(1.1) scaleY(1.3);
        transform: scaleX(1.1) scaleY(1.3);
    }
    input:focus + .input-focus {
        visibility: visible;
        opacity: 1;
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
    }
    input {
        font-family: 'Roboto', sans-serif;
        color: #333333;
        line-height: 1.2;
        font-size: 18px;
        display: block;
        width: 100%;
        background: transparent;
        height: 50px;
        padding: 0 20px;
        outline: none;
        border: none;
        overflow: visible;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        font-weight: 400;
        box-sizing:border-box;
    }

    input:focus {
        border-color: transparent !important;
    }

    #iconText {
        display: none;
    }

    #togglePasswordVisibility svg {
        transition: color 400ms linear 0s;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: #cccccc;
        cursor: pointer;
    }
    #togglePasswordVisibility svg:hover {
        color: #00569c;
    }

    button {
        font-family: 'Roboto', sans-serif;
        transition: background-color 400ms linear 0s;
        width: 100%;
        padding: 17px 20px;
        float:left;
        line-height: 1.2;
        font-size: 16px;
        text-align: center;
        text-transform: uppercase;
        background-color: #3f3d56;
        color: #fff;
        border: none;
        border-radius:10px;
        cursor: pointer;
        margin-top:20px;
    }
    button:hover {
        background-color: #00569c;
    }
`;