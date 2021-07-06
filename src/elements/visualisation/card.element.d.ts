import { LitElement } from 'lit';
export declare class AeCard extends LitElement {
    label?: string;
    image?: string;
    href?: string;
    target?: string;
    partLinkSelector?: string;
    partFigureSelector?: string;
    partLoadingSvgSelector?: string;
    partImgSelector?: string;
    partHeaderSelector?: string;
    partLabelSelector?: string;
    imageEl?: HTMLImageElement;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'ae-card': AeCard;
    }
}
//# sourceMappingURL=card.element.d.ts.map