import { css } from "lit";

export const styles = css`
  :host {
    display: grid;
    contain: content;
    position: relative;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    width: 100%;
  }
`;
