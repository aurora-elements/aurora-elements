import { html } from "lit";

export function template(t: any) {
  return html`
    <header
      part="ae-accordion-item--header"
      tabindex="-1"
      @click="${t.toggle}">
      <h3 part="ae-accordion-item--headline">
        ${t.label}
      </h3>
      <slot name="ae-accordion-item--icon">
        <svg 
          viewBox="0 0 24 24" 
          part="ae-accordion-item--icon">
          <path
            fill="currentColor"
            d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
        <svg 
          viewBox="0 0 24 24" 
          part="ae-accordion-item--icon-expanded">
          <path fill="currentColor" d="M19,13H5V11H19V13Z" />
        </svg>
      </slot>
    </header>
    <div
      part="ae-accordion-item--content"
      class="content">
      <div 
        class="content-inner" 
        part="ae-accordion-item--content-inner">
        <slot></slot>
      </div>
    </div>
  `;
}
