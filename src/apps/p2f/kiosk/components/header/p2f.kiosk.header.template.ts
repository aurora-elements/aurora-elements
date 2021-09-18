import { html } from "lit";
import { spoUriConverter } from "../../../../../functionalities/directives/spo/spo.uri.converter.directive";
import logo from '../../logo.svg';

export function headerTemplate(t:any) {
    return html`
        <div 
            class="container" 
            part="container">
            <img 
                @click=${t.showOverview}
                part="p2f-kiosk-header-logo"
                style="${t.logo ? '' : 'width:150px;'}"
                src="${t.logo ? spoUriConverter(t.data.url + '/api', t.logo) + '?height=130' : logo}" />

            <slot name="header-extended-content"></slot>

            <a 
                href="#" 
                class="link-favorites" 
                part="ae-header-link-favorites">
                <span>Meine Favoriten</span>
                <slot name="header-icon-favorites">
                    <svg viewBox="0 0 24 24">
                        <path 
                            fill="currentColor" 
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                    </svg>
                </slot>
            </a>
        </div>            
    `;
}