import { css } from "lit";

export const styles = css`
  :host {
    display:                  block;
    outline:                  none !important;
  }
  header {
    transition:               color 300ms linear;
    cursor:                   pointer;
    user-select:              none;
    padding:                  var(--ae-accordion--header-padding, 20px 0);
    display:                  grid;
    grid-gap:                 var(--ae-accordion--header-gap, 20px);
    outline:                  none !important;
    border-bottom:            var(--ae-accordion--header-border-bottom, 1px solid rgba(255, 255, 255, 0.1));
    background-color:         var(--ae-accordion--header-background-color, none);
  }
  :host([is-last-item]) header,
  :host([is-last-item]) .content {
    border-bottom: none;
  }
  :host([expanded]) header, 
  :host([content-animation-off]) header {
    border-bottom:            none;
  }
  :host([icon-position=right]) header {
    grid-template-columns:    1fr var(--ae-accordion--header-icon-slot-width, 24px);
    grid-template-areas:      "headline icon";
  }
  :host([icon-position=left]) header {
    grid-template-columns:    var(--ae-accordion--header-icon-slot-width, 24px) 1fr;
    grid-template-areas:      "icon headline";
  }
  :host([icon-position=none]) header {
    grid-template-columns:    1fr;
    grid-template-areas:      "headline";
  }
  :host([icon-position=none]) slot[name=ae-accordion-item--icon] {
    display:                  none;
  }

  :host([expanded]) header {
    cursor:                   default;
    color:                    var(--ae-accordion-item--header-color-expanded, #1565c0);
    background-color:         var(--ae-accordion--header-background-color-expanded, none);
  }
  :host([expanded][multiple]) header {
    cursor:                   pointer;
  }
  :host header svg {
    transition:               transform 500ms linear 0ms;
    grid-area:                icon;
    width:                    var(--ae-accordion-item--header-icon-width, 20px);
    height:                   var(--ae-accordion-item--header-icon-height, 20px);
    fill:                     var(--ae-accordion-item--header-icon-color, #c1c1c1);
  }
  :host([icon-animation-off]) header svg {
    transition:               transform 0ms linear 0ms;
  }
  slot[name="ae-accordion-item--icon"] {
    background-color:         var(--ae-accordion-item--header-icon-slot-background-color, rgba(0, 0, 0, 0.1));
    display:                  grid;
    height:                   var(--ae-accordion-item--header-icon-slot-height, 24px);
    border-radius:            100%;
    overflow:                 hidden;
  }
  ::part(ae-accordion-item--icon-expanded) {
    transform:                translateY(100%);
  }
  :host([expanded])::part(ae-accordion-item--icon) {
    transform:                translateY(-100%);
  }
  :host([expanded])::part(ae-accordion-item--icon-expanded) {
    transform:                translateY(0%);
  }

  h3 {
    margin:                   0;
    font-size:                var(--ae-accordion-item--header-headline-font-size, 1rem);
    user-select:              none;
    font-weight:              var(--ae-accordion-item--header-headline-font-weight, 400);
    grid-area:                headline;
    line-height:              var(--ae-accordion-item--header-headline-line-height, 140%);
  }
  .content {
    float:                    left;
    width:                    100%;
    box-sizing:               border-box;
    outline:                  none !important;
    overflow:                 hidden;
    border-bottom:            var(--ae-accordion-item--content-border-bottom, 1px solid rgba(255, 255, 255, 0.1));
    animation:                collapse 500ms alternate ease-in-out both 1;
    max-height:               0;
    transition:               max-height 500ms;
  }
  .content-inner {
    padding:                  var(--ae-accordion-item--content-padding, 0 0 20px 0);
  }
  :host([expanded]) .content {
    max-height:               100vh;
    animation:                expanded 500ms normal ease-in-out both 1;
  }
  :host([content-animation-off]) .content {
    animation:                none;
  }
  :host([expanded][content-animation-off]) .content {
   animation:                 none;
  }

  @keyframes expanded {
    0% {
      opacity:                0;
      transform:              scale(0.9) rotateX(-20deg);
      transform-origin:       50% 0;
    }
    100% {
      opacity:                1;
      transform:              scale(1);
    }
  }

  @keyframes collapse {
    0% {
      opacity:                1;
      transform:              scale(1);
    }
    100% {
      opacity:                0;
      transform:              scale(0.9) rotateX(-20deg);
    }
  }
`;
