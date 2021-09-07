import {css, html, LitElement } from 'lit';
import { customElement, property } from "lit/decorators.js";
import { aeEvent } from '../../../../functionalities/directives/event.directive';
import { debugMode } from '../p2f.kiosk.app';

@customElement('ae-p2f-kiosk-breadcrumb')
export class P2fKioskBreadcrumb extends LitElement {
    @property({attribute: 'category-selected'})
    selectedCategoryName: string;

    static get styles() {
        return css`
            :host {
                display: block;
                padding: var(--ae-p2f-kiosk--padding-horizontal, 2.084vw) 0 0 0;
            }
            ul {
                list-style-type: none;
                margin:0;
                padding:0;
            }
            li {
                float: left;
                color: var(--ae-p2f-kiosk-header-link--color,#9facb6); 
            }
            a {
                color: var(--ae-p2f-kiosk-header-link--color,#9facb6); 
            }
            a:hover {
                color: var(--ae-p2f-kiosk--accent-color-dark, #9ac31c);
            }
            li:last-child a {
                pointer-events: none;
                color: #2d2e87;
            }
            a {
                text-decoration: none;
                font-weight: 700;
                font-size: .8rem;
            }
            svg {
                width:20px;
                height:20px;
                float:left;
            }
        `;
    }

    render() {
        return html`
            <ul>
                <li>
                    <a href="#" @click=${this.showOverview}>Übersicht</a>
                </li>
                <li>
                    <svg viewBox="0 0 24 24">
                        <path 
                            fill="currentColor" 
                            d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                </li>
                <li>
                    <a href="#">${this.selectedCategoryName}</a>
                </li>
            </ul>
        `
    }

    showOverview() {
        aeEvent(this, '*', 'p2f-kiosk-overview', 'show', {}, debugMode);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ae-p2f-kiosk-breadcrumb': P2fKioskBreadcrumb;
    }
  }