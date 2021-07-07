import { LitElement } from "lit";
import "./standalone";
import "./elements/interaction/theme.switcher.element";
import "./showcase/components/navigation/link.component";
import "./showcase/components/navigation/routerOutlet.component";
declare const AeShowcase_base: import("lit-element-router").Constructor<import("lit-element-router").Router> & typeof LitElement;
export declare class AeShowcase extends AeShowcase_base {
    route: string;
    params: {};
    query: {};
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    static get routes(): {
        name: string;
        pattern: string;
        data: {
            title: string;
        };
    }[];
    router(route: string, params: {}, query: {}, data: {
        title: string;
    }): void;
}
export {};
//# sourceMappingURL=showcase.d.ts.map