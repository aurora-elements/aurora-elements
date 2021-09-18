import { css } from "lit";

export const styles = css`
  :host {
    width: 100%;
    margin: 0 auto;
    visibility: hidden;
    position: absolute;
    display: none;
  }
  .grid {
    padding-bottom: var(--p2f-kiosk--padding, 2.084vw);
  }
  ae-p2f-kiosk-filterbar,
  ae-p2f-grid {
    float: left;
    width: 100%;
  }
  ae-p2f-grid {
    margin-top: 20px;
    margin-bottom: 30px;
  }
  ae-p2f-kiosk-filterbar {
    margin-top: 15px;
  }
  ::part(document) {
    border-radius: var(--p2f-kiosk--border-radius);
  }
`;
