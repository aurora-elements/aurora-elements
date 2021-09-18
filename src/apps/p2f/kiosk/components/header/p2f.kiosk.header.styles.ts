import { css } from "lit";

export const styles = css`
  :host {
    background-color: var(--p2f-kiosk-header--bg, #fff);
    width: 100%;
    display: block;
    box-sizing: border-box;
    position: relative;
    z-index: 100;
  }
  .container {
    margin: 0 auto;
    max-width: var(--p2f-kiosk-container--width, 1400px);
    display: grid;
    grid-template-columns: auto 1fr 200px;
    grid-gap: calc(var(--p2f-kiosk--padding, 2.084vw) / 2);
    height: 100%;
    box-sizing: border-box;
  }
  img {
    max-height: 65px;
    height: 100%;
    align-self: center;
    justify-self: start;
    cursor: pointer;
  }
  .link-favorites {
    transition: color 300ms linear 0s;
    align-self: center;
    justify-self: end;
    color: var(--ae-p2f-kiosk-header-link--color, #9facb6);
  }
  .link-favorites:hover {
    color: var(
      --ae-p2f-kiosk-header-link--color-hover,
      var(--p2f-kiosk--accent-color-dark, #9ac31c)
    );
  }
  .link-favorites span {
    display: block;
    float: left;
    padding-right: 5px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.8rem;
    line-height: 190%;
    padding-top: 2px;
  }
  .link-favorites svg {
    width: 20px;
    height: 20px;
    padding-top: 4px;
  }
  ::slotted(*) {
    align-self: center;
  }
  slot[name="header-extended-content"] {
    overflow: hidden;
    display: grid;
    align-content: center;
  }
`;
