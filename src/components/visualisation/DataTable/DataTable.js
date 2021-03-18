import { LitElement } from "lit-element";
import { template } from "./DataTableTemplate.js";
import { styles } from './DataTableStyles.js';

class AuroraDataTable extends LitElement {
    /* Properties - LitElement */
    static get properties() {
        return {
            columnsLabels: { 
                type: Array, 
                attribute: 'columns-labels'
            },
            columns: { type: String, reflect: true }
        };
    }
    constructor() {
        super();
        this.columnsLabels = ["Property","Type","Default Value","Description"];
    }


    /* Styles - LitElement */
    static get styles() {
        return [styles]
    }

    /* Render template */
    render() {
        return template(this)
    }

    /* Get root */
    get root() {
        return this.shadowRoot || this
    }
}
customElements.define('aurora-data-table', AuroraDataTable);