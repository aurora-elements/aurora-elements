import { css } from "lit-element";

export const styles = css`
    :host {
        display: grid;
        contain: content;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        width: 100%;
    }
    ::slotted(aurora-accordion-item){
        border-bottom: 1px solid var(--accordion-item-border-color, var(--border-color, #c1c1c1));
    }
    ::slotted(aurora-accordion-item:last-child) {
        border-bottom: none;
    }
    ::slotted([visible=true]:last-child) {
        border:10px solid red!important;
    }
`;
