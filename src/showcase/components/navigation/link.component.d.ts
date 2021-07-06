import { LitElement } from "lit";
declare const NavLink_base: import("lit-element-router").Constructor<import("lit-element-router").Navigator> & typeof LitElement;
export declare class NavLink extends NavLink_base {
    href: string;
    static get styles(): import("lit").CSSResultGroup;
    render(): import("lit-html").TemplateResult<1>;
    handleClick(e: Event): void;
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'nav-link': NavLink;
    }
}
export {};
//# sourceMappingURL=link.component.d.ts.map