import "../../../modules/login/login.module";
import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";
import { loginTemplate } from "./login.template";
import { landingTemplate } from "./landing.template";

const styles = css`
  :host {
    display: block;
    font-family: 'Roboto', sans-serif;
  }
  #loginForm {
    display: grid;
    grid-template-columns: 50% minmax(200px, 350px);
    grid-gap: 60px;
    align-items: center;
    justify-content: center;
    padding: 60px 0 0;
    box-sizing: border-box;
  }
  #landing {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    align-items: center;
    justify-content: center;
    padding: 60px 3vw 0;
    box-sizing: border-box;
  }
  svg {
    max-width:100%;
    max-height: 78vh;
  }
  h3 {
    font-size: 3rem;
    font-family: "Roboto", sans-serif;
    margin-bottom: .5rem;
    font-weight: 300;
    line-height: 1.2;
    margin-top:0;
    color:#555555;
  }
  p {
    margin-bottom: .5rem;
    color: #b3b3b3;
    font-weight: 300;
    margin-top:0;
    font-family: "Roboto", sans-serif;
    font-size:1rem;
    line-height: 1.5;
  }
  #landing h2 {
    text-transform: uppercase;
    font-size: 40px;
    margin-bottom: 20px;
    position: relative;
    color: #cacaca;
  }
  #landing h2 span {
    background: #fff;
    padding-right:20px;
    position:relative;
    z-index: 10;
  }
  #landing h2:after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 0%;
    background: #cacaca;
  }
  #landing h1 {
    font-size: 60px;
    margin-top: 20px;
    line-height: 60px;
    margin-bottom: 25px;
    text-transform: uppercase;
    color:#3f3d56;
  }
  #landing h3 {
    font-size: 24px;
    margin-bottom: 35px;
    text-transform: uppercase;
    color: #3f3d56;
    font-weight: 500;
  }

  @media screen and (max-width: 830px) {
    svg {
      display: none;
    }
    #loginForm {
      display: block;
      width: 100%;
      max-width: 300px;
      margin: 40px auto;
    }
  }
`;

class LoginPage extends LitElement {

  @property({type: Boolean, attribute: false})
  auth: boolean;

  firstUpdated() {
    this.addEventListener('ae-login:*|authenticated', () => {
      this.auth = true;
    })
    if(sessionStorage.getItem('authenticated') != null) {
      this.auth = sessionStorage.getItem('authenticated').toLowerCase() == 'true' ? true : false;
    }
  }

  static get styles() {
    return [styles];
  }

    /* Render template */
    render() {
      return html`
        ${this.auth ? 
          html`
            ${landingTemplate()}
          ` : 
          html`
            ${loginTemplate()}
          `
        }       
      `
    }

}

customElements.define("login-page", LoginPage);