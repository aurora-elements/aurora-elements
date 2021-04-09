import { html } from "lit-element";
import { until } from 'lit-html/directives/until';
import { repeat } from 'lit-html/directives/repeat.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { locale } from '../../../elements/foundation/translater/translater.component'


export function template(data) {
    return html`
        <ae-headline-block 
            headline="Imprint">
            Impressum...
        </ae-headline-block>
    `
}