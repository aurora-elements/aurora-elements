import { html } from "lit-element";
import { nothing } from 'lit-html';
import { until } from 'lit-html/directives/until';
import { repeat } from 'lit-html/directives/repeat.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { locale } from '../../foundation/translater/translater.component';

const tableTemplate = (col1, col2, col3, col4, col5, col6, col7, col8, col9, col10, index) => html`
    <tr part="tr" id=${index + 1}>
        ${col1? html`<td part="td"><strong>${col1}</strong></td>`: nothing }
        ${col2? html`<td part="td">${unsafeHTML(col2)}</td>`: nothing }
        ${col3? html`<td part="td">${unsafeHTML(col3)}</td>`: nothing }
        ${col4? html`<td part="td">${unsafeHTML(col4)}</td>`: nothing }
        ${col5? html`<td part="td">${unsafeHTML(col5)}</td>`: nothing }
        ${col6? html`<td part="td">${unsafeHTML(col6)}</td>`: nothing }
        ${col7? html`<td part="td">${unsafeHTML(col7)}</td>`: nothing }
        ${col8? html`<td part="td">${unsafeHTML(col8)}</td>`: nothing }
        ${col9? html`<td part="td">${unsafeHTML(col9)}</td>`: nothing }
        ${col10? html`<td part="td">${unsafeHTML(col10)}</td>`: nothing }
    </tr>
`;

const tableLoadingTemplate = () => html`
    <tr part="tr-loading">
        <td part="td-loading">${locale === 'de' ? 'Daten werden geladen...' : 'Loading...'}</td>
        <td part="td-loading"></td>
        <td part="td-loading"></td>
        <td part="td-loading"></td>
    </tr>
`;

export function template(data) {
    return html`
        <table part="table">
            <thead part="header">
                ${data.columnLabels.map((item, index) =>
                    html`<th id=${index + 1}>${item}</th>`
                )}               
            </thead>
            <tbody part="tbody">
                ${until(
                    fetch(data.rows)
                    .then(res => res.json())
                    .then(items => html`                        
                        ${repeat(
                            items,
                            item => item.id,
                            ({ col1, col2, col3, col4, col5, col6, col7, col8, col9, col10 }, index) => html`
                                ${tableTemplate(col1, col2, col3, col4, col5, col6, col7, col8, col9, col10, index)}
                            `,
                         )}
                    `),
                    html`
                        ${tableLoadingTemplate()}
                    `
                )}          
            </tbody>  
        </table>   
    `;
}