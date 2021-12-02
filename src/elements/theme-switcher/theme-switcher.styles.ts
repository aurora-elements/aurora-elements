import { css } from "lit";

export const styles = css`
    :host {
        display:                    block;
        cursor:                     pointer;
        width:                      var(--ae-theme-switcher--width, 32px);
    }

    svg {
        width:                      var(--ae-theme-switcher--icon-width, 32px);
        height:                     var(--ae-theme-switcher--icon-height, 32px);
    }
    slot {
        display:                    block;
    }

    slot[name=theme-icon-dark] #fill {
        fill:                       var(--ae-theme-switcher--icon-dark-fill, #f8f8f8);
    }
    slot[name=theme-icon-light] #fill {
        fill:                       var(--ae-theme-switcher--icon-light-fill, #1565c0);
    }
    @media (prefers-color-scheme: dark) {
        slot[name=theme-icon-dark] {
            display:                block;
        }
        slot[name=theme-icon-light] {
            display:                none;
        }
    }
    @media (prefers-color-scheme: light) {
        slot[name=theme-icon-dark] {
            display:                none;
        }
        slot[name=theme-icon-light] {
            display:                block;
        }
    }
`;