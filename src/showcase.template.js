import { html } from "lit-element";

export function template(data) {
    return html`
        <div class="nav">
            <a href="/">
                <img class="logo" src="/dist/showcase/img/aurora-logo.png" />
            </a>
            <span class="claim">ELEMENTS</span>
            <aurora-accordion slot="link">
                <aurora-accordion-item label="Get Started">
                    <nav-link href="/">Welcome</nav-link>
                    <nav-link href="/whatsnew">What's new</nav-link>
                </aurora-accordion-item>
        
                <aurora-accordion-item label="Interaction">
                </aurora-accordion-item>
        
                <aurora-accordion-item label="Form">
                </aurora-accordion-item>
        
                <aurora-accordion-item label="Visualisation">
                </aurora-accordion-item>
        
                <aurora-accordion-item label="Layout">
                </aurora-accordion-item>
                <aurora-accordion-item label="Apps">
                </aurora-accordion-item>
            </aurora-accordion>
        </div>
        <section id="content" class="content">
            <div id="main">
                <router-outlet active-route=${data.route}>
                    <welcome-page route="welcome"></welcome-page>
                    <whatsnew-page route="whatsnew"></whatsnew-page>
                    <not-found-page route="not-found"></not-found-page>
                </router-outlet>
            </div>
            <footer></footer>
        </section>
        <aurora-scroll-top scroll-container="#content"></aurora-scroll-top>
    `
}