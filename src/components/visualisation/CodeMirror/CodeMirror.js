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

        const head = document.getElementsByTagName('head')[0];

        if(document.getElementById('codemirror') == null) {
            const style = document.createElement('style');
            style.id= 'codemirror';
            style.innerHTML = `
                .hljs{display:block;overflow-x:auto;padding:.5em;color:#333;background:#f8f8f8}
                .hljs-comment,.hljs-quote{color:#998;font-style:italic}
                .hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}
                .hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}
                .hljs-doctag,.hljs-string{color:#d14}
                .hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}
                .hljs-subst{font-weight:400}
                .hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}
                .hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}
                .hljs-link,.hljs-regexp{color:#009926}
                .hljs-bullet,.hljs-symbol{color:#990073}
                .hljs-built_in,.hljs-builtin-name{color:#0086b3}
                .hljs-meta{color:#999;font-weight:700}
                .hljs-deletion{background:#fdd}
                .hljs-addition{background:#dfd}
                .hljs-emphasis{font-style:italic}
                .hljs-strong{font-weight:700}`;
            head.append(style);
        }

        const slot =        this.root.querySelector('slot');
        const content =     slot.assignedNodes()[0].textContent;
        const copyButton =  this.root.getElementById('copyButton');
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