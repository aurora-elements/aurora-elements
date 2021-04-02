import { css } from "lit-element";
export const NavLinkStyles = css`
  .nav-link {
    text-decoration: none;
    border: solid 2px black;
    color: black;
    padding: 5px;
    margin-right: 5px;
    border-radius: 5px;
    display: inline-block;
    text-align: center;
  }
  slot {
    font-weight: bold;
  }
  .nav-link:hover {
    color: #ffffff;
    background-color: #000000;
  }
`;