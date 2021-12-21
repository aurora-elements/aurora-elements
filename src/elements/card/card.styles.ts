import { css } from "lit";

export const styles = css`
    :host {
        contain:                    content;
        position:                   relative;
        display:                    grid;
        background-color:           var(--ae-card--background-color,#ffffff);
        border-radius:              var(--ae-card--radius, 0);
        box-shadow:                 var(--ae-card--shadow, none);
    }
    :host([embedded]) {
        box-shadow:                 none;
        border-radius:              none;
    }
    :host([loaded]) {
        overflow:                   hidden;
    }

    a {
        transition:                 opacity 300ms linear 0s;
        height:                     100%;
        width:                      100%;
        position:                   absolute;
        top:                        0;
        left:                       0;
        z-index:                    10;
        opacity:                    0;
    }
    a:hover {
        opacity:                    1;
    }

    figure {
        width:                      100%;
        position:                   relative;
        padding:                    var(--ae-card--figure-padding, 0);
        margin:                     var(--ae-card--figure-margin, 0);
        background-color:           var(--ae-card--figure-background-color, 0);
    }
    img {
        opacity:                    0;
        transition:                 opacity 300ms ease;
        max-width:                  100%;
        max-height:                 100%;
        min-height:                 0;
    }
    :host([loaded]) img {
        opacity:                    1;
        display:                    block;
        margin:                     0 auto;
    }

    ae-loader {
        width:                      100px;
        display:                    block;
        position:                   absolute;
        top:                        50%;
        left:                       50%;
        transform:                  translate(-50%, -50%);
    }
    :host([loaded]) ae-loader {
        display:                    none;
    }

    header {
        padding:                    var(--ae-card--header-padding, 10px 20px);
        margin:                     var(--ae-card--header-margin, 0);
    }
    h3 {
        font-size:                  var(--ae-card--label-font-size, inherit);
        color:                      var(--ae-card--label-color, #484848);
        line-height:                var(--ae-card--label-line-height, 140%);
        font-weight:                var(--ae-card--label-font-weight, 400);
        margin:                     0;
    }
`;
