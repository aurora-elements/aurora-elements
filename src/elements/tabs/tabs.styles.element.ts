import { css } from "lit";

export const styles = css`
    :host {
        display:            grid;
        width:              100%;
        grid-template-rows: var(--ae-tabs-nav--height, 50px) 1fr;
    }
    nav {
        width:              100%;
        background-color:   var(--ae-tabs-nav--bg, #7c9e16);
    }
    nav a {
        transition:         background-color 300ms ease-in-out 0s, opacity 300ms ease-in-out 0s;
        background-color:   rgba(0,0,0,0);
        float:              left;
        padding:            var(--ae-tabs-nav-item--padding, 0 20px);
        text-transform:     var(--ae-tabs-nav--text-transform, uppercase);
        font-size:          var(--ae-tabs-nav--font-size, .8rem);
        font-weight:        var(--ae-tabs-nav--font-weight, 600);
        line-height:        var(--ae-tabs-nav--height, 50px);
        text-decoration:    none;
        color:              var(--ae-tabs-nav--color, #ffffff); 
        opacity:            .5;
    }
    nav a:hover {
        opacity:            1;
    }
    nav a[active] {
        background-color:   var(--ae-tabs-nav--bg-active, #9ac31c);
        opacity:            1;
        cursor:             default;
        pointer-events:     none;
    }
/* Level secondary */
    :host([level-secondary]) nav {
        background-color:   var(--ae-tabs-nav--bg-secondary, #f5f5f5);    
    }

    :host([level-secondary]) nav a {
        color:              var(--ae-tabs-nav--color-secondary, #aaaaaa); 
        text-transform:     var(--ae-tabs-nav--text-transform-secondary, none);
        opacity:            1;
    }
    :host([level-secondary]) nav a:hover {
        color:              var(--ae-tabs-nav--color-active-secondary, #7c9e16); 
    }
    :host([level-secondary]) nav a[active] {
        background-color:   var(--ae-tabs-nav--bg-active-secondary, #ffffff);
        color:              var(--ae-tabs-nav--color-active-secondary, #7c9e16)
    } 

/* dropdown nav */
    #ae-tabs-nav-dopdown-content {
        display: none;
        position:absolute;
        background: #ffffff;
    }
    #ae-tabs-nav-dopdown-content a {
        width:100%;
        padding: 0 20px;
        opacity: 1;
        background: none;
        color: #333;
    }
    #ae-tabs-nav-dopdown-content[open] {
        display: block;
    }
`;