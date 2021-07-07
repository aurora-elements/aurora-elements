import { LitElement } from "lit";
export declare class AeScrollTop extends LitElement {
    scrollContainer?: string;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ae-scroll-top': AeScrollTop;
    }
}
//# sourceMappingURL=scroll.top.element.d.ts.map