import { html } from "lit";

export function template(t: any) {
  return html`
    <section part="ae-confirm-dialog">
      <header part="ae-confirm-dialog--header">
        <h5 part="ae-confirm-dialog--headline">
          ${t.headline}
        </h5>
      </header>
      <div part="ae-confirm-dialog--description">
        <slot name="ae-confirm-dialog--description">
          ${t.description}
        </slot>
      </div>
      <footer part="ae-confirm-dialog--footer">
        <slot name="ae-confirm-dialog--clancel-button">
          <a
            href="#"
            part="ae-confirm-dialog--cancel-button"
            @click="${t.cancel}"
          >
            ${t.btnLabelCancel}
          </a>
        </slot>
        <slot name="ae-confirm-dialog--submit-button">
          <a
            href="#"
            part="ae-confirm-dialog--submit-button"
            onclick="${t.deleteAction}(${t.deleteTargetId});"
            @click="${t.submit}"
          >
            ${t.btnLabelSubmit}
          </a>
        </slot>
      </footer>
    </section>
  `;
}
