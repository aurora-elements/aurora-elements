import { LitElement } from "lit";
import "../../pages/welcome/welcome.page";
import "../../pages/whatsNew/whatsNew.page";
import "../../pages/imprint/imprint.page";
import "../../pages/visualisation/card/card.page";
import "../../pages/notFound/notFound.page";
export declare const routes: {
    name: string;
    pattern: string;
    data: {
        title: string;
    };
}[];
declare const RouterOutlet_base: import("lit-element-router").Constructor<import("lit-element-router").Outlet> & typeof LitElement;
export declare class RouterOutlet extends RouterOutlet_base {
    render(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        'router-outlet': RouterOutlet;
    }
}
export {};
//# sourceMappingURL=routerOutlet.component.d.ts.map