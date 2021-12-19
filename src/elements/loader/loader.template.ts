import { html } from "lit";

export function template() {
  return html`
    <slot name="ae-loader--icon">
      <svg
        version="1.1"
        x="0px"
        y="0px"
        part="ae-loader--icon"
        viewBox="0 0 100 20"
        enable-background="new 0 0 0 0"
        xml:space="preserve"
      >
        <circle stroke="none" cx="30" cy="10" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.1"
          />
        </circle>

        <circle stroke="none" cx="50" cy="10" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.2"
          />
        </circle>

        <circle stroke="none" cx="70" cy="10" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.3"
          />
        </circle>
      </svg>
    </slot>
  `;
}
