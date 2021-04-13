import { html } from "lit-element";
import { until } from 'lit-html/directives/until';
import { repeat } from 'lit-html/directives/repeat.js';
import { locale } from './elements/foundation/translater/translater.component';
import logo from './showcase/img/aurora-logo.png';
import translate_de from './showcase/components/navigation/translations/de.json';
import translate_en from './showcase/components/navigation/translations/en.json';

const requestUrl = `${locale === 'de' ? translate_de : translate_en}`;

const nav = fetch(requestUrl).then(res => res.json());

const navItemTemplate = (items, label, index) => html`
    <ae-accordion-item
        ?expanded=${index === 0} 
        label="${label}">
        ${repeat(
            items,
            items => items.id,
            ({ href, label }) => html`
                <nav-link href="${href}">${label}</nav-link>                                             
            `,
        )}
    </ae-accordion-item>
`;

export function template(data) {
    return html`
        <div class="nav">
            <a href="/">
                <img class="logo" src="${logo}" />
            </a>
            <span class="claim">AURORA-ELEMENTS</span>
            <ae-accordion slot="link">
                ${until(
                    nav
                    .then(data => html`                        
                    ${repeat(
                        data,
                        item => item.id,
                        ({ items, label, visible }, index) => html`
                            ${visible?
                                html`${navItemTemplate(items, label, index)}`: html``
                            }
                        `,
                        )}
                    `),
                    html``
                )}  
            </ae-accordion>
            <div class="copyright">
                <span>&copy;2021 Marcus Kramer</span>
                <nav-link href="/imprint">Imprint</nav-link>  
            </div>
        </div>
        <section id="content" class="content">
            <div id="main">
                <router-outlet active-route=${data.route}>
                </router-outlet>
            </div>
            <footer></footer>
        </section>
        <ae-scroll-top scroll-container="#content"></ae-scroll-top>
    `
}