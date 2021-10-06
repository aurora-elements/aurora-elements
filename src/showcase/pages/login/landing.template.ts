import { html } from "lit";
import { 
  iconAngular,
  iconBalsamiq,
  iconBitbucket,
  iconCss,
  iconGit,
  iconGithub, 
  iconGooglemail, 
  iconHtml, 
  iconIntellij, 
  iconJavascript, 
  iconJquery, 
  iconLesscss, 
  iconLinkedin, 
  iconMoqups, 
  iconNpm, 
  iconPhotoshop, 
  iconTwitter, 
  iconTypescript, 
  iconVscode, 
  iconVue, 
  iconWebcomponents, 
  iconWebpack, 
  iconXing, 
  imageLanding, 
  imageWhatIdo, 
  logoExpert, 
  logoHaworth, 
  logoKpmg, 
  logoKreativburschen, 
  logoLidl, 
  logoLyreco, 
  logoMyhoney, 
  logoPorsche, 
  logoVw} from "./images";

export function landingTemplate() {
    return html`
        <section id="landing">
            <div>
              <h2><span>Hallo</span></h2>
              <h1>Ich bin Marcus Kramer</h1>
              <h3>UI/UX - Frontend Engineer</h3>
              <a 
                class="social-media-item" 
                href="https://www.xing.com/profile/Marcus_Kramer3/cv" 
                target="_blank">
                ${iconXing()}
              </a>
              <a 
                class="social-media-item" 
                href="https://www.linkedin.com/in/marcus-kramer-97612b179/" 
                target="_blank">
                ${iconLinkedin()}
              </a>
              <a 
                class="social-media-item" 
                href="https://github.com/theCherti" 
                target="_blank">
                ${iconGithub()}
              </a>
              <a 
                class="social-media-item" 
                href="https://twitter.com/FrontendCherti" 
                target="_blank">
                ${iconTwitter()}
              </a>
              <a 
                class="social-media-item" 
                href="mailto:m.kramer.hannover@gmail.com" 
                target="_blank">
                ${iconGooglemail()}
              </a>
            </div>
            <div>
              ${imageLanding()}
            </div>
        </section>
        <section id="customers">
            <h2>Kunden</h2>
            <p>
            Zusammen mit einem internationalem Team habe ich Projekte für verschiedene Kunden umgesetzt. Unter anderem für:
            </p>
            <ul>
              <li title="Volkswagen">
                ${logoVw()}
              </li>
              <li title="Porsche">
                ${logoPorsche()}
              </li>
              <li title="KPMG">
                ${logoKpmg()}
              </li>
              <li title="Expert">
                ${logoExpert()}
              </li>
              <li title="Lyreco">
                ${logoLyreco()}
              </li>
              <li title="Lidl">
                ${logoLidl()}
              </li>
              <li title="Kreativburschen">
                ${logoKreativburschen()}
              </li>
              <li title="Haworth">
                ${logoHaworth()}
              </li>
              <li title="myHoney">
                ${logoMyhoney()}
              </li>
            </ul>
        </section>
        <section id="whatIdo">
          <div>
            ${imageWhatIdo()}
          </div>
          <div>
            <h2>Über mich</h2>
            <p>
            Seit Beginn meiner Karriere als Frontend-Entwickler vor über 10 Jahren habe 
            ich im Büro und Remote die UI & UX für verschiedene digitale Produkte entwickelt und verbessert. 
            Ich bin von Natur aus neugierig und arbeite ständig daran, mein Fähigkeiten und mein Wissen zu erweitern.
            </p>
            <ul class="list-icons">
              <li>
                ${iconHtml()}
                <span>HTML</span>
              </li>
              <li>
                ${iconCss()}
                <span>CSS</span>
              </li>
              <li>
                ${iconLesscss()}
                <span>LessCSS</span>
              </li>
              <li>
                ${iconWebcomponents()}
                <span>Web Components</span>
              </li>
              <li>
                ${iconJavascript()}
                <span>JavaScript</span>
              </li>
              <li>
                ${iconJquery()}
                <span>JQuery</span>
              </li>
              <li>
                ${iconTypescript()}
                <span>TypeScript</span>
              </li>
              <li>
                ${iconVue()}
                <span>Vue</span>
              </li>
              <li>
                ${iconAngular()}
                <span>Angular</span>
              </li>
            </ul>
            <ul class="list-icons">
              <li>
                ${iconGit()}
                <span>Git</span>
              </li>
              <li>
                ${iconBitbucket()}
                <span>Bitbucket</span>
              </li>
              <li>
                ${iconWebpack()}
                <span>Webpack</span>
              </li>
              <li>
                ${iconNpm()}
                <span>npm</span>
              </li>
            </ul>
            <ul class="list-icons">
              <li>
                ${iconIntellij()}
                <span>IntelliJ IDEA</span>
              </li>
              <li>
                ${iconVscode()}   
                <span>VS Code</span>           
              </li>
              <li>
                ${iconPhotoshop()}   
                <span>Adobe Photoshop</span>           
              </li>
              <li>
                ${iconMoqups()}   
                <span>Moqups</span>           
              </li>
              <li>
                ${iconBalsamiq()}   
                <span>balsamiq</span>           
              </li>
            </ul>
          </div>
        </section>
    `;
}