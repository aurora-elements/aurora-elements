import { html } from "lit-element";

export function template(data) {
    return html`
        <svg
            version="1.1"
            x="0px"
            y="0px"
            part="${data.partLoaderSvgSelector?
                data.partLoaderSvgSelector: 'loader-svg'}"
            viewBox="0 0 100 100"
            enable-background="new 0 0 0 0"
            xml:space="preserve">
            <circle stroke="none" cx="30" cy="50" r="6">
                <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.1"/>
            </circle>
            <circle stroke="none" cx="50" cy="50" r="6">
                <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.2"/>
            </circle>
            <circle stroke="none" cx="70" cy="50" r="6">
                <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.3"/>
            </circle>
        </svg>           
    `;
}