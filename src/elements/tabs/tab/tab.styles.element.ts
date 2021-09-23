import { css } from "lit";

export const styles = css`
    :host {
        display: none;
    }
    :host([active]) {
        display: block;
    }

`;