import { css } from "lit";

export const styles = css`
  :host {
    display:                    block;
    position:                   relative;
    font-size:                  var(--ae-dropdown-button--font-size, 15px);
  }
  .ae-dropdown-button {
    cursor:                     pointer;
    display:                    grid;
    grid-template-columns:      1fr var(--ae-dropdown-button--icon-width, auto);
    align-items:                center;
    justify-items:              center;
    transition:                 background-color 300ms ease-in-out 0s, 
                                color 300ms ease-in-out 0s, 
                                box-shadow 300ms ease-in-out 0s;
    background-color:           var(--ae-dropdown-button--background-color, #FFFFFF);
    color:                      var(--ae-dropdown-button--color, #1565c0);
    box-shadow:                 var(--ae-dropdown-button--box-shadow, none);
    border-radius:              var(--ae-dropdown-button--radius, 10px);
    padding:                    0 
                                var(--ae-dropdown-button--padding-right, 1.25rem) 
                                0 
                                var(--ae-dropdown-button--padding-left, 1.5625rem);
    height:                     var(--ae-dropdown-button--height, 50px);
    line-height:                var(--ae-dropdown-button--height, 50px);
    font-weight:                var(--ae-dropdown-button--font-weight, 400);
  }
  .ae-dropdown-button:hover {
    transition:                 background-color 300ms ease-in-out 0s, 
                                color 300ms ease-in-out 0s, 
                                box-shadow 300ms ease-in-out 0s, 
                                border-radius 300ms ease-in-out 0s;
    background-color:           var(--ae-dropdown-button--background-color-hover, #3579b2);
    color:                      var(--ae-dropdown-button--color-hover, #FFFFFF);
    box-shadow:                 var(--ae-dropdown-button--box-shadow-hover, none);
  }
  .ae-dropdown-button span {
    float:                      left;
    user-select:                none;
  }

  .ae-dropdown-button--icon-wrapper {
    transition:                 transform 300ms ease-in-out 0s;
    transform-origin:           center;
    height:                     var(--ae-dropdown-button--height, 50px);
    width:                      var(--ae-dropdown-button--icon-width, auto);
    display:                    grid;
    align-content:              center;
  }
  .ae-dropdown-button--icon-wrapper svg {
    height:                     20px;
  }
  .ae-dropdown-button--icon-wrapper path {
    transition:                 fill 300ms ease-in-out 0s;
    fill:                       var(--ae-dropdown-button--icon-fill, #1565c0);
    opacity:.7;
  }
  .ae-dropdown-button:hover .ae-dropdown-button--icon-wrapper path {
    fill:                       var(--ae-dropdown-button--icon-fill-hover, #FFFFFF);
  }

  .ae-dropdown-button--content {
    transition:                 max-height 300ms ease-in-out 0s;
    max-height:                 0;
    overflow:                   hidden;
    position:                   absolute;
    min-width:                  100%;
    z-index:                    100;
    background-color:           var(--ae-dropdown-button--content-background-color, #F8F8F8);
    border-radius:              0 
                                0 
                                var(--ae-dropdown-button--radius, 10px) 
                                var(--ae-dropdown-button--radius, 10px);
    box-shadow:                 var(--ae-dropdown-button--box-shadow-hover, none);
  }

  .open.ae-dropdown-button {
    border-radius:              var(--ae-dropdown-button--radius, 10px) 
                                var(--ae-dropdown-button--radius, 10px) 
                                0 
                                0;
  }
  .open .ae-dropdown-button--icon-wrapper {
    transform:                  rotate(-90deg);
  }
  .open ~ .ae-dropdown-button--content {
    max-height:                 var(--ae-dropdown-button--content-max-height, 20em);
    overflow-y:                 auto;
    animation:                  hide-scroll 300ms backwards;
  }
  @keyframes hide-scroll {
    from,
    to {
      overflow:                 hidden;
    }
  }
`;
