import { css } from "lit";

export const styles = css`
  :host {
    transition:                 opacitiy 500ms ease-in-out 0s;
    display:                    none;
    background:                 var(--ae-confirm-dialog--overlay-background-color, rgba(0, 0, 0, 0.5));
    position:                   fixed;
    top:                        0;
    left:                       0;
    z-index:                    -1;
    width:                      100%;
    height:                     100%;
    align-items:                center;
    justify-items:              center;
    opacity:                    0;
  }
  :host([visible]) {
    display:                    grid;
    opacity:                    1;
    z-index:                    var(--ae-confirm-dialog--z-index, 99999);
  }
  section {
    background:                 var(--ae-confirm-dialog--background-color, #ffffff);
    box-shadow:                 var(--ae-confirm-dialog--box-shadow, 0px 20px 30px -20px rgba(0, 0, 0, 0.1));
    display:                    grid;
    grid-template-rows:         var(--ae-confirm-dialog--header-height, 41px) 1fr var(--ae-confirm-dialog--footer-height, 45px);
    max-width:                  var(--ae-confirm-dialog--max-width, 300px);
    user-select:                none;
  }
  header {
    background-color:           var(--ae-confirm-dialog--header-background-color,#ed5565);
    color:                      var(--ae-confirm-dialog--header-color, #ffffff);
  }
  header h5 {
    margin:                     0;
  }
  header, div, footer {
    padding:                    var(--ae-confirm-dialog--padding, 12px 20px);
  }
  footer {
    text-align:                 right;
    padding:                    var(--ae-confirm-dialog--footer-padding, 10px 10px 20px 10px);
  }
  footer a {
    text-transform:             var(--ae-confirm-dialog--button-text-transform, uppercase);
    transition:                 opacity 300 ms linear 0s;
    text-decoration:            none;
    padding:                    var(--ae-confirm-dialog--button-padding, 10px);
    font-weight:                var(--ae-confirm-dialog--button-font-weight, 700);
    color:                      var(--ae-confirm-dialog--button-color, #ed5565);
    opacity:                    var(--ae-confirm-dialog--button-opacity, 0.7);
  }
  footer a:hover {
    opacity:                    var(--ae-confirm-dialog--button-opacity-hover, 1);
  }
  footer a[part=ae-confirm-dialog--cancel-button] {
    color:                   var(--ae-confirm-dialog--button-cancel-color, #888888);
  }
`;
