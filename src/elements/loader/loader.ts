import { LitElement } from "lit";
import { auroraCustomElement } from "../../functionalities/decorators";
import { AuroraElement } from "../../functionalities/mixins";
import {styles} from "./loader.styles";
import {template} from "./loader.template";

@auroraCustomElement('ae-loader')
export class AeLoader extends AuroraElement(LitElement, {
    styles,
    template   
}) {

}

declare global {
    interface HTMLElementTagNameMap {
        'ae-loader': AeLoader;
    }
}
