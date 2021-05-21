import { css } from "lit";
export const styles = css`
  :host {
    display: block;
  }
  a {
    text-decoration: none;
    width: 100%;
    display: block;
    padding: 0 20px 10px 20px;
    line-height: 24px;
    color: #9c9c9c;
    outline: none !important;
    cursor: pointer;
  }
  a[route-active] {
    cursor: default;
    color: var(--link-color-hover, var(--color-accent-primary, #00569c));
  }
  a:hover {
    color: var(--link-color-hover, var(--color-accent-primary, #00569c));
  }
`;