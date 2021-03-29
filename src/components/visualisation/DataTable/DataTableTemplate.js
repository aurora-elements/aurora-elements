import { html } from "lit-element";
import { until } from 'lit-html/directives/until';
import { repeat } from 'lit-html/directives/repeat.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export function template(data) {
    return html`
        <table>
            <thead>
                ${data.columnLabels.map((item, index) =>
                    html`<th id=${index + 1}>${item}</th>`
                )}               
            </thead>
            <tbody>
                ${until(
                    fetch(data.rows)
                    .then(res => res.json())
                    .then(items => html`                        
                        ${repeat(
                            items,
                            item => item.id,
                            ({ col1, col2, col3, col4, col5, col6, col7, col8, col9, col10 }, index) => html`
                                <tr id=${index + 1}>
                                    ${col1? html`<td><strong>${col1}</strong></td>`: ''}
                                    ${col2? html`<td>${unsafeHTML(col2)}</td>`: ''}
                                    ${col3? html`<td>${unsafeHTML(col3)}</td>`: ''}
                                    ${col4? html`<td>${unsafeHTML(col4)}</td>`: ''}
                                    ${col5? html`<td>${unsafeHTML(col5)}</td>`: ''}
                                    ${col6? html`<td>${unsafeHTML(col6)}</td>`: ''}
                                    ${col7? html`<td>${unsafeHTML(col7)}</td>`: ''}
                                    ${col8? html`<td>${unsafeHTML(col8)}</td>`: ''}
                                    ${col9? html`<td>${unsafeHTML(col9)}</td>`: ''}
                                    ${col10? html`<td>${unsafeHTML(col10)}</td>`: ''}

                                </tr>
                            `,
                         )}
                    `),
                    html`
                        <tr>
                            <td>Loading...</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    `
                )}          
            </tbody>  
        </table>   
    `;
}