import { html } from "lit";

export function template(t:any) {
    return html`
        <slot @slotchange=${t.handleSlotchange}> </slot>
    `;
}