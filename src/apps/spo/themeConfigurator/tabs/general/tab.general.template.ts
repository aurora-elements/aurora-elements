import "../../../../../elements/tabs/tab/tab.element";
import "../../../../../elements/tabs/tabs.element";
import { html } from "lit";

export function masterTemplate() {
    return html`
        <ae-tabs 
            id="generalTabs"
            level-secondary
            exportparts="
            ae-tabs-nav,
            ae-tabs-nav-item">
            <ae-tab name="Allgemein"><p style="color: red">Allgemein</p></ae-tab>
            <ae-tab name="Metadaten & SEO"><p style="color: red">Metadaten & SEO</p></ae-tab>
            <ae-tab name="Login"><p style="color: red">Login</p></ae-tab>
            <ae-tab name="Register"><p style="color: red">Register</p></ae-tab>
            <ae-tab name="Spaceübersicht"><p style="color: red">Spaceübersicht</p></ae-tab>
        </ae-tabs>
    `;
}