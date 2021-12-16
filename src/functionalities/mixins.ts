import { CSSResult, LitElement } from "lit";

type Constructor<T = {}> = new (...args: any[]) => T;

interface AuroraElementConfig {
    styles: CSSResult;
    template: Function;
}

export const AuroraElement = <T extends Constructor<LitElement>>(superClass: T, config: AuroraElementConfig) => {

  class AuroraElementClass extends superClass {

    /* Styles - LitElement */
    static styles =[config.styles];

    /* Render template */
    protected render() { return config.template(this); }

  };

  return AuroraElementClass as T;

}