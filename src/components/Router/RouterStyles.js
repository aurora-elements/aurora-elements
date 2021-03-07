import { css } from "lit-element";

export const styles = css`
    :host {

    }
    ::slotted(a) {
        border-top: 1px solid #e0e6ed;
        display: block;
        color: #484848;
        text-decoration: none;
        padding: 20px 30px;
        font-size: 20px;
        float: left;
        width: 100%;
        box-sizing: border-box;
    }
`;