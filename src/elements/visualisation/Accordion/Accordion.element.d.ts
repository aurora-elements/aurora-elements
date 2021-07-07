import { LitElement } from "lit";
declare class AeAccordion extends LitElement {
    items: any;
    multiple: boolean;
    initialized: boolean;
    slotEl?: any;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    shouldUpdate(changedProperties: any): any;
    getItems(): any;
    expandItem(expanded: any): void;
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ae-accordion': AeAccordion;
    }
}
export {};
//# sourceMappingURL=Accordion.element.d.ts.map