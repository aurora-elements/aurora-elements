import { LitElement, html, css } from 'lit';
import { customElement, property, query, queryAssignedNodes } from 'lit/decorators.js';

import { template } from "./DataTableTemplate.js";
import { styles } from './DataTableStyles.js';

@customElement('ae-data-table')
export class AeDataTable extends LitElement {

    @property({ attribute: 'column-labels', type: Array }) columnLabels? = ["Date","Component","Description"];
    
    @property({ attribute: 'column-labels', type: String }) rows?:string;



    /* Styles - LitElement */
    static get styles() {
        return [styles]
    }

    /* Render template */
    render() {
        return template(this)
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-data-table': AeDataTable;
    }
}
