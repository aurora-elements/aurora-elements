import { LitElement } from "lit";
export declare class AeThemeSwitcher extends LitElement {
    target: string;
    iconLight: HTMLElement;
    iconDark: HTMLElement;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ae-theme-switcher': AeThemeSwitcher;
    }
}
//# sourceMappingURL=theme.switcher.element.d.ts.map