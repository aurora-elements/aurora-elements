import "../../../elements/tabs/tab/tab.element";
import "../../../elements/tabs/tabs.element";
import "./tabs/general/tab.general";
import { html } from "lit";
// import publicApi from "../../../functionalities/directives/spo/spo.api.fetch.public.directive";


export function masterTemplate() {
 /*   let config = publicApi.get(`https://ae.devdock.space.one/api/config`);
console.log(config) */
    return html`
        <ae-tabs 
            exportparts="
            ae-tabs-nav,
            ae-tabs-nav-item">
            <ae-tab name="General">
                <ae-spo-theme-configurator-general></ae-spo-theme-configurator-general>
            </ae-tab>  
            <ae-tab name="Grafik"><h1>Grafik</h1></ae-tab>  
            <ae-tab name="Farben & Layout"><h1>Farben & Layout</h1></ae-tab>
            <ae-tab name="Script & CSS"><h1>Script & CSS</h1></ae-tab>         
        </ae-tabs>       
    `;
}