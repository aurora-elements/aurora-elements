import { css } from "lit";

export const styles = css`
  :host {
    contain: content;
    display: block;
  }
  svg {
    width: 100px;
    display: block;
  }
  svg circle {
    fill: var(--loader-icon-color, #c1c1c1);
  }
`;
