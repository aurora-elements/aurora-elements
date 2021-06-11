import { LitElement, html, css, nothing } from 'lit';
import { until } from 'lit/directives/until';
import { repeat } from 'lit/directives/repeat.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { customElement, property, query, queryAssignedNodes } from 'lit/decorators.js';
import { locale } from '../../../functionalities/directives/translater.directive';

import { styles } from './DataTableStyles.js';

const tableLoadingTemplate = () => html`
    <tr part="tr-loading">
        <td part="td-loading">
            ${locale === 'de' ? 
                'Daten werden geladen...' : 
                'Loading...'
            }
        </td>
        <td part="td-loading"></td>
        <td part="td-loading"></td>
        <td part="td-loading"></td>
    </tr>
`;

const tableTemplate = (
    col1: string, 
    col2: string, 
    col3: string,
    col4: string, 
    col5: string,
    col6: string,
    col7: string, 
    col8: string,
    col9: string,
    col10: string, 
    index: number
    ) => html`
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

@customElement('ae-data-table')
export class AeDataTable extends LitElement {

    @property({ attribute: 'column-labels', type: Array }) columnLabels? = ["Date","Component","Description"];
    
    @property({ type: String }) rows?:string;

firstUpdated() {
    console.log('rows: ', this.rows)
}

    /* Styles - LitElement */
    static get styles() {
        return [styles]
    }

    /* Render template */
    render() {
        return html`
        <table part="table">
            <thead part="header">
                ${this.columnLabels!.map((item, index) =>
                    html`<th id=${index + 1}>${item}</th>`
                )}               
            </thead>
            <tbody part="tbody">
                ${until(
                    fetch(this.rows!)
                    .then(res => res.json())
                    .then(items => html`                        
                        ${repeat(items, (item:any) => item.id, ({ 
                            col1, 
                            col2, 
                            col3, 
                            col4, 
                            col5, 
                            col6, 
                            col7, 
                            col8, 
                            col9, 
                            col10 
                            }, index) => html`
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
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-data-table': AeDataTable;
    }
}
