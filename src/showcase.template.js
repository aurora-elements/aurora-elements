import { html } from "lit-element";
import { until } from 'lit-html/directives/until';
import { repeat } from 'lit-html/directives/repeat.js';
import { locale, localesPath } from './elements/foundation/translater/translater.component'


export function template(data) {
    return html`
        <div class="nav">
            <a href="/">
                <img class="logo" src="/dist/showcase/img/aurora-logo.png" />
            </a>
            <span class="claim">ELEMENTS</span>
            <aurora-accordion slot="link">
                ${until(
                    fetch(`${localesPath}navigation/${locale}`)
                    .then(res => res.json())
                    .then(data => html`                        
                    ${repeat(
                        data,
                        item => item.id,
                        ({ items, label, visible }, index) => html`
                            ${visible?
                                html`
                                    <aurora-accordion-item
                                        ?expanded=${index === 0} 
                                        label="${label}">
                                        ${repeat(
                                            items,
                                            items => items.id,
                                            ({ href, label }) => html`
                                                <nav-link href="${href}">${label}</nav-link>
                                            `,
                                        )}
                                    </aurora-accordion-item>
                                `:
                                html``
                            }
                        `,
                        )}
                    `),
                    html`
                    `
                )}  
            </aurora-accordion>
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
        <aurora-scroll-top scroll-container="#content"></aurora-scroll-top>
    `
}