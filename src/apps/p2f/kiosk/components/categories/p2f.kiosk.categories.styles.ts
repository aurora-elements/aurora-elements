import { css } from "lit";

export const styles = css`
  :host {
    width: 100%;
    float: left;
    background: transparent;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: calc(var(--p2f-kiosk--padding) / 2);
    grid-template-rows: max-content;
    display: grid;
    padding: var(--p2f-kiosk--padding);
  }
  div {
    cursor: pointer;
    user-select: none;
    font-weight: 700;
    font-size: 0.8rem;
  }
  div {
    background-color: #f8f8f8;
    display: grid;
    grid-template-rows: 1fr 60px;
    box-shadow: var(--p2f-kiosk--box-shadow);
    border-radius: var(--p2f-kiosk--border-radius);
    cursor: pointer;
    transition: background-color 300ms ease-in-out 0s, color 200ms linear 0s;
    overflow: hidden;
  }
  div:hover span {
    color: #fff;
    background-color: var(--p2f-kiosk--accent-color);
  }
  .category-hidden {
    display: none;
  }
  .category-visible {
    display: block;
  }
  .active {
    color: #fff !important;
    cursor: default;
    pointer-events: none;
    background-color: #2d2e87;
  }

  [part=p2f-kiosk-categories-category-img] {
    max-width: 100%;
  }
  [part=p2f-kiosk-categories-category-name] {
    padding: 20px;
    background-color: #fff;
  }
`;
