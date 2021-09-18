import { css } from "lit";

export const styles = css`
    :host {
        display: block;
        padding: var(--p2f-kiosk--padding, 2.084vw) 0 0 0;
    }
    ul {
        list-style-type: none;
        margin:0;
        padding:0;
    }
    li {
        float: left;
        color: var(--ae-p2f-kiosk-header-link--color,#9facb6); 
        line-height:20px;
    }
    a {
        color: var(--ae-p2f-kiosk-header-link--color,#9facb6); 
        line-height:20px;
    }
    a:hover {
        color: var(--p2f-kiosk--accent-color-dark, #9ac31c);
    }
    li:last-child a {
        pointer-events: none;
        color: #2d2e87;
    }
    a {
        text-decoration: none;
        font-weight: 700;
        font-size: .8rem;
    }
    svg {
        width:20px;
        height:20px;
        float:left;
    }
`;