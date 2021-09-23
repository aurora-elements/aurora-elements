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

  [part=p2f-kiosk-categories-category-item] {
    background-color: #f8f8f8;
    display: grid;
    grid-template-rows: 1fr 60px;
    box-shadow: var(--p2f-kiosk--box-shadow);
    border-radius: var(--p2f-kiosk--border-radius);
    cursor: pointer;
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    font-weight: 700;
    font-size: 0.8rem;
  }

  [part=p2f-kiosk-categories-category-item]:hover [part=p2f-kiosk-categories-category-name] {
    color: #fff;
    background-color: var(--p2f-kiosk--accent-color);
  }

  [part=p2f-kiosk-categories-category-img] {
    max-width: 100%;
  }

  [part=p2f-kiosk-categories-category-name] {
    transition: background-color 300ms ease-in-out 0s, color 200ms linear 0s;
    padding: 20px;
    background-color: #fff;
    text-transform:uppercase;
  }
`;
