import { css } from "lit";

export const styles = css`
  :host {
    width: 100%;
    padding: 11.5px 20px;
    background: #fff;
    box-shadow: var(--p2f-kiosk--box-shadow, 0px 20px 30px -20px rgba(0, 0, 0, 0.3));
    box-sizing: border-box;
    border-radius: var(--p2f-kiosk-filterbar--border-radius, --p2f-kiosk--border-radius);
  }
  input {
    height: 100%;
    max-width: 500px;
    min-width: 295px;
    width: 100%;
    border-width: 0;
    background-color: #f8f8f8;
    padding: 10px 45px;
    float: left;
    box-sizing: border-box;
    outline: none;
  }
  input::placeholder {
    transition: color 300ms linear 0s;
    color: #9facb6;
  }
  input:focus-visible::placeholder {
    color: #9ac31c;
  }
  svg {
    transition: color 300ms linear 0s;
    position: absolute;
    z-index: 10;
    color: #9facb6;
    top: 6px;
  }
  #searchBox {
    position: relative;
    float: left;
    width: auto;
  }
  #searchBox:focus-within #searchIcon {
    color: #9ac31c;
  }
  #searchIcon {
    left: 10px;
  }
  #resetIcon {
    right: 10px;
    cursor: pointer;
  }
  #resetIcon:hover {
    color: #9ac31c;
  }
`;
