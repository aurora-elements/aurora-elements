import { LitElement } from 'lit';
export declare class AeDataTable extends LitElement {
    columnLabels: string[];
    rows?: string;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ae-data-table': AeDataTable;
    }
}
//# sourceMappingURL=DataTable.element.d.ts.map