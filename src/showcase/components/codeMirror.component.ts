import { LitElement, html, css } from "lit";
import { customElement, property, query } from 'lit/decorators.js';
import hljs from 'highlight.js/lib/highlight';
//import xml from 'highlight.js/lib/languages/xml';

//hljs.registerLanguage('xml', xml);

const styles = css`
    :host {
        width:100%;
        overflow-x: auto;
        margin:0;
        padding:0;
        box-sizing: border-box;
        padding:0!important;
        color: #484848;
        background-color: var(--grey-ligthest, #f8f8f8);
        position:relative;
        display: block;
    }
    .language {
        background-color: var(--grey-ligthest, #fff);
        padding: 10px 0;
        margin: 0;
    }

    slot {
        white-space: pre;
        display: block;
        padding: 0px 40px 30px 40px;
        font-family: 'Roboto Mono', Consolas, Menlo, monospace;
        line-height: 1.6;
    }

    .copy-button {
        position: absolute;
        top: 0;
        right: 0;
        padding: 8px;
        background-color: #e0e6ed;
        border: none;
        outline: none;
        color: #484848;
        cursor: pointer;
        transition: all 0.2s ease-in;
        opacity: 0;
        display: none;
    }
    .copy-button:hover {
        background-color: var(--codeMirror-color-hover, var(--color-accent-primary, #00569c));
        color: #fff;
    }

    .code-wrapper {
        position: relative;
        border-left: 3px solid var(--grey-middle, #e0e6ed);
    }
    .code-wrapper:hover .copy-button {
        opacity: 1;
    }
    .copy-success {
        position: absolute;
        top: 5px;
        right: 0;
        background-color: #f5f5f5;
        padding: 5px 10px;
        display: none;
        font-size:80%;
        color: var(--codeMirror-success-color, var(--color-accent-primary, #00569c));

    }
    .copy-success.show-message {
        display: inline-block;
    }
`;

@customElement('ae-code-mirror')
export class AeCodeMirror extends LitElement {
    /* Properties - LitElement */
    @property({ type: String }) 
    label: string;
    @property({ type: String }) 
    language: string = 'xml';
    @property({ type: String, attribute: 'copy-button-label' }) 
    copyButtonLabel: string = 'Copy'; 
    @property({ type: String, attribute: 'copied-message' }) 
    copiedMsg: string = 'Code was copied!'; 

    @query('.copy-button')
    copyButton: HTMLElement;
    @query('.copy-success')
    copySuccess: HTMLElement;
    @query('slot')
    slotEl: HTMLSlotElement;

    /* Styles - LitElement */
    static get styles() {
        return [styles]
    }

    /* Render template */
    render() {
        return html`
            ${this.label ? html`<p class="language">${this.label}</p>` : html``}
            
            <div class="code-wrapper">
                <slot @slotchange="${this.onSlotchange}"></slot>
                <button class="copy-button">
                    ${this.copyButtonLabel}
                </button>
            </div>
            <span class="copy-success">
                ${this.copiedMsg}
            </span>
        `
    }

    /* Methods */
    onSlotchange() {
        this.requestUpdate();

        let contentToCopy =             this.slotEl.assignedNodes();
        let filteredContentToCopy =     contentToCopy.filter((item) => item.nodeType!== 3);
        let outputContentToCopyArray =  [];

        filteredContentToCopy.map(i => {
            outputContentToCopyArray.push(i.textContent);
        });

        let outputContent =             outputContentToCopyArray.join('\n');

        this.copyButton.addEventListener('click', () => {

            navigator.clipboard.writeText(outputContent).then(() => {

                this.copySuccess.classList.add('show-message');
    
                setTimeout(() => {
                    this.copySuccess.classList.remove('show-message');
                }, 2500);
    
            }), () => {
                console.log('Error writing to the clipboard');
            };
        });
    }


    firstUpdated() {

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
            tabReplace: '',
            languages: ['xml', 'html', 'js', 'javascript']
          });

        document.querySelectorAll('ae-code-mirror').forEach(block => {
            hljs.highlightBlock(block);
        });       
    }  
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-code-mirror': AeCodeMirror;
    }
}
