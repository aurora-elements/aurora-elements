import { LitElement } from "lit-element";
import { template } from "./DataTableTemplate.js";
import { styles } from './DataTableStyles.js';

class AuroraDataTable extends LitElement {
    /* Properties - LitElement */
    static get properties() {
        return {
            columnLabels: { 
                type: Array, 
                attribute: 'column-labels'
            },
            rows: { 
                type: String, 
                reflect: true 
            }
        };
    }
    constructor() {
        super();
        this.columnLabels = ["Property","Type","Default Value","Description"];
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