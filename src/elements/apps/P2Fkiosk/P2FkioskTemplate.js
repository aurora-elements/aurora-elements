import { html } from "lit";
import { until } from 'lit/directives/until';
import { repeat } from 'lit/directives/repeat.js';
import { i18n } from '../../foundation/i18n/i18n.js';

export function template(data) {
    return html`
        ${data.cssUrl? 
            html`<link 
                    rel="stylesheet" 
                    href="${data.cssUrl}.css" />` 
                : html``
        }
        <section style="float: left;width: 100%;">
            <header>
                <h2>Alle Kategorien</h2>
            </header>
            <!-- slider -->
            <div class="slider">
                <aurora-card
                    label="Alle Kategorien" 
                    @click=${data.categoryResetHandler}>
                </aurora-card>  
                ${until(
                    fetch(data.apiUrl + '/p2fDocumentCategory.json')
                    .then(res => res.json())
                    .then(items => html`                        
                        ${repeat(
                            items,
                            item => item.id,
                            ({ name, id }, index) => html`
                                <aurora-card
                                    category-id="${id}"
                                    ?is-active=${index == 0}
                                    @click=${data.categoryHandler}
                                    label="${name}">
                                </aurora-card>
                            `,
                            )}
                    `),
                    html`
                        <div>
                            <span>Loading...</span>
                        </div>
                    `
                )}   
            </div>
             <!-- slider end -->     
        </section>
        <section style="float: left; width:100%">
            <header style="margin-top:40px; background:red; color: #fff;float:left;">
                <h2>Alle Dokumente</h2>
            </header>
           
            ${data.search? 
                html`<div style="width:100%;background: green;padding:40px;box-sizing:border-box;margin-bottom:20px;">
                        <input type="text" id="search" @input="${data.onSearch}" />
                    </div>`
                : html``
            }

            <div class="grid">
                ${until(
                    fetch(data.apiUrl + '/p2fDocumentItem.json')
                    .then(res => res.json())
                    .then(items => html`                        
                        ${repeat(
                            items,
                            item => item.id,
                            ({ name, category, asset}, index) => html`
                                <aurora-card
                                    label="${name}"
                                    filter-values="${name}"
                                    item-category-id="${category.id}" 
                                    id=${index + 1}
                                    image="https://kreativburschen.customer.space.one/api/scope/wolfenbuettlerschaufenster/asset/${asset.id}/thumbnail">  
                                </aurora-card>
                            `,
                            )}
                    `),
                    html`
                        <div>
                            <span>Loading...</span>
                        </div>
                    `
                )} 
            </div>
        </section>
    `
}
