import { LitElement } from 'lit';
import './tab.wizard.element';
export declare class Wizard extends LitElement {
    steps: Array<string>;
    stepActive?: string;
    private stepNext?;
    nextStepBtn?: HTMLElement;
    private tabs?;
    protected stepsTemplate(): import("lit-html").TemplateResult<1>;
    protected render(): import("lit-html").TemplateResult<1>;
    nextStep: () => void;
    private initTabs;
    protected firstUpdated(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    static styles: import("lit").CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        'ae-wizard': Wizard;
    }
}
//# sourceMappingURL=wizard.element.d.ts.map