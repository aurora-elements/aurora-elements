import { css } from "lit";

export const styles = css`
    :host {
        transition:             transform 300ms cubic-bezier(0.22, 0.61, 0.36, 1) 0s,
                                opacity 300ms cubic-bezier(0.22, 0.61, 0.36, 1) 0s,
                                background-color 300ms cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
        transform:              translateX(100%);
        opacity:                0;
        position:               fixed;
        display:                block;
        bottom:                 var(--ae-scroll-top--bottom, 20px);
        right:                  var(--ae-scroll-top--right, 20px);
        height:                 var(--ae-scroll-top--height, 40px);
        contain:                content;
        width:                  var(--ae-scroll-top--width, 40px);
        background-color:       var(--ae-scroll-top--background-color, #f8f8f8);
        border-radius:          var(--ae-scroll-top--border-radius, 0);
        z-index:                1000;
        cursor:                 pointer;
    }
    :host(:hover) svg {
        fill:                   var(--ae-scroll-top--icon-fill-hover, #1565c0);
    }
    :host([visible]) {
        transform:              translateX(0);
        opacity:                1;
    }
    :host svg {
        width:                  var(--ae-scroll-top--icon-width, 24px);
        height:                 var(--ae-scroll-top--icon-height, 24px);
        transform:              var(--ae-scroll-top--icon-transform, rotate(90deg) translate(-50%, -8px));
        position:               absolute;
        top:                    50%;
        left:                   0%;
        fill:                   var(--ae-scroll-top--icon-fill, #212121);
    }
`;
