import { css } from "lit";

export const styles = css`
  :host {
    display: block;
    width: 100%;
    margin: 0 auto;
    max-width: var(--p2f-kiosk-container--width);
    transition: transform 500ms linear 0s;
  }
  .grid-container {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: calc(var(--p2f-kiosk--padding) / 2);
    grid-template-rows: max-content;
    display: grid;
    padding: var(--p2f-kiosk--padding);
  }
  div:not(.grid-container) {
    background-color: #fff;
    display: grid;
    grid-template-rows: 1fr 60px;
    box-shadow: var(--p2f-kiosk--box-shadow);
    border-radius: var(--p2f-kiosk--border-radius);
    cursor: pointer;
    background-image: linear-gradient(to right, var(--p2f-kiosk--accent-color) 50%, #fff 0);
    background-position: right;
    background-size: 201% 200%;
    transition: background-position 300ms ease-in-out 0s, color 200ms linear 0s;
    overflow: hidden;
  }
  div:not(.grid-container):hover {
    color: #fff;
    background-position: left;
  }

  span {
    display: block;
    padding: 0 20px;
    line-height: 60px;
    font-size: 20px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  img {
    display: block;
    width: 100%;
  }
  [part=p2f-kiosk-overview-feature-documents-headline] {
    color: var(--p2f-kiosk-headlines--color);
    font-weight: 600;
    margin-top:0;  
  }
  [part=p2f-kiosk-overview-category-name] {
    color: var(--p2f-kiosk-category-label--color);  
  }
  ::part(document) {
    border-radius: var(--p2f-kiosk--border-radius);
  }
`;
