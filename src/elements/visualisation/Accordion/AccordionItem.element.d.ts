import { LitElement } from "lit";
declare class AeAccordionItem extends LitElement {
    label: string;
    expanded: boolean;
    multipleSupport: boolean;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    convertLabel(string: string): string;
    toggle(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ae-accordion-item': AeAccordionItem;
    }
}
export {};
//# sourceMappingURL=AccordionItem.element.d.ts.map