import { LitElement } from "lit-element";
import hljs from 'highlight.js';
import { template } from "./CodeMirrorTemplate.js";
import { styles } from './CodeMirrorStyles.js';

class AuroraCodeMirror extends LitElement {
    /* Properties - LitElement */
    static get properties() {
        return {
            label: { type: String },
            language: { type: String, default: 'xml'}
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

    /* Get root */
    get root() {
        return this.shadowRoot || this
    }

    /* Methods */
    onSlotchange() {
        this.requestUpdate();

        let copyButton =            this.root.querySelector('.copy-button');
        let copySuccess =           this.root.querySelector('.copy-success');
        let slot =                  this.root.querySelector('slot');
        let contentToCopy =         slot.assignedNodes();
        let filteredContentToCopy = contentToCopy.filter((item) => item.nodeType!== 3);
        let outputContentToCopyArray = [];

        filteredContentToCopy.map(i => {
            outputContentToCopyArray.push(i.textContent);
        });

        let outputContent = outputContentToCopyArray.join('\n');

        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(outputContent).then(() => {
                copySuccess.classList.add('show-message');
    
                setTimeout(() => {
                    copySuccess.classList.remove('show-message');
                }, 2500);
    
            }), () => {
                console.log('Error writing to the clipboard');
            };
        });
    }


    firstUpdated() {
        super.firstUpdated();
        this.classList.add(this.language);
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

        hljs.configure({
            tabReplace: '', // 4 spaces
            languages: ['xml', 'html', 'js', 'javascript']
          });
        document.querySelectorAll('aurora-code-mirror').forEach(block => {
            hljs.highlightBlock(block);
        });       
    }  
}

customElements.define('aurora-code-mirror', AuroraCodeMirror);