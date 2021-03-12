import { LitElement } from "lit-element";
import hljs from 'highlight.js';
import { template } from "./CodeMirrorTemplate.js";
import { styles } from './CodeMirrorStyles.js';

class AuroraCodeMirror extends LitElement {
    /* Properties - LitElement */
    static get properties() {
        return {
            label: { type: String }
        };
    }

    /* Styles - LitElement */
    static get styles() {
        return [styles]
    }

    /* Render template */
    render() {
        return template(this)
    }

   /* createRenderRoot() {

          return this;
        }
        */

        /* Get root */
        get root() {
            return this.shadowRoot || this
        }

    firstUpdated() {
        super.firstUpdated();

        const slot =        this.root.querySelector('slot');
        const content =     slot.assignedNodes()[0].textContent;
        const copyButton = this.root.getElementById('copyButton');
        const copySuccess = this.root.getElementById('copy-success');

        document.querySelectorAll('aurora-code-mirror').forEach(block => {
            hljs.highlightBlock(block);
        });

        const copyTextHandler = () => {
            navigator.clipboard.writeText(content).then(() => {
                copySuccess.classList.add('show-message');

                setTimeout(() => {
                    copySuccess.classList.remove('show-message');
                }, 2500);

            }), () => {
                console.log('Error writing to the clipboard');
            };
        }

        copyButton.addEventListener('click', copyTextHandler);
    }  

}

customElements.define('aurora-code-mirror', AuroraCodeMirror);