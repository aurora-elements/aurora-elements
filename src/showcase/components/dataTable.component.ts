import { LitElement, html, css, nothing } from 'lit';
import { until } from 'lit/directives/until.js';
import { repeat } from 'lit/directives/repeat.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { customElement, property } from 'lit/decorators.js';
import { locale } from '../../functionalities/directives/translater.directive';

const styles = css`
    :host {
        display: block;
    }
    table {
        box-sizing: border-box;
        border-collapse: separate;
        border-spacing: 0;
        width: 100%;
        border-bottom: 1px solid var(--grey-middle, #e0e6ed);
        text-align: justify;
    }
    table thead th {
        box-sizing: border-box;
        font-size: 80%;
        line-height: 1.3;
        min-height: 12px;
        padding: 10px 20px;
        cursor: default; 
        color: #9c9c9c;
        white-space: nowrap;
    }
    table thead th:first-child {
        padding: 10px 20px 10px 20px;
    }
    table thead th:last-child {
        padding: 10px 20px 10px 20px;
    }
    table tbody {
        border-width: 1px;
        border: none;
        vertical-align: top;
        overflow: auto;
    }
    table strong {
        color: #484848;
        white-space: nowrap;
    }
    tbody tr {
        border-top:none;
        cursor: auto;
    }
    tr td {
        border-left: none;
        border-right: none;
        border-top: 1px solid var(--grey-middle, #e0e6ed);
        font-weight: 400;
        line-height: 1.5;
        padding: 14px 20px;
        min-height: 20px;
        color: #9c9c9c;
    }
    td ul {
        margin: 0;
        padding: 0;
        list-style-position: inside;
        list-style-type: square;
    }
    tr td:first-child {
        padding: 14px 20px 14px 20px;
    }
    tr td:last-child {
        padding: 14px 20px 14px 20px;
    }
`;

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

    @property({ attribute: 'column-labels', type: Array }) 
    columnLabels = ["Attribute","Type","Default-Value","Description"];
    
    @property({ type: String }) rows?:string;

    @property({type:String})
    type:string = 'element';

    /* Styles - LitElement */
    static get styles() {
        return [styles]
    }

    /* Render template */
    render() {
        if(this.type === 'news') {
            this.columnLabels = ["Date","Component","Description"];
        } 
        else if(this.type === 'html') {
            this.columnLabels = ["Attribute","Type","Default-Value","Description"];    
        }
        else if(this.type === 'css') {
            this.columnLabels = ["Variable","1.Fallback","2.Fallback","Description"];    
        }
        else if(this.type === 'events') {
            this.columnLabels = ["Name","Details","Description"];    
        }
        else if(this.type === 'slots') {
            this.columnLabels = ["Name","Description"];    
        }
        else if(this.type === 'parts') {
            this.columnLabels = ["Name","Description"];    
        }

        return html`
        <table part="table">
            <thead part="header">
                ${this.columnLabels!.map((item, index) =>
                    html`<th id=${index + 1}>${item}</th>`
                )}               
            </thead>
            <tbody part="tbody">
                ${until(
                    fetch(this.rows)
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
