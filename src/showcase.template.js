import { html } from "lit-element";
import { until } from 'lit-html/directives/until';
import { repeat } from 'lit-html/directives/repeat.js';
import { locale, localesPath } from './elements/foundation/translater/translater.component';

const requestUrl = `${localesPath}navigation/${locale}`;

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
                <img class="logo" src="/dist/showcase/img/aurora-logo.png" />
            </a>
            <span class="claim">ELEMENTS</span>
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
        </div>
        <section id="content" class="content">
            <div id="main">
                <router-outlet active-route=${data.route}>
                    <welcome-page route="welcome"></welcome-page>
                    <whatsnew-page route="whatsnew"></whatsnew-page>
                    <not-found-page route="not-found"></not-found-page>
                </router-outlet>
            </div>
            <footer></footer>
        </section>
        <ae-scroll-top scroll-container="#content"></ae-scroll-top>
    `
}