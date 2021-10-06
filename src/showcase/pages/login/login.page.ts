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
    padding: 60px 90px 0;
    box-sizing: border-box;
    min-height:100vh;
    padding-bottom:20vh;
    animation: page 2000ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 0s;
  }
  svg {
    max-width:100%;
    max-height: 78vh;
  }
  h2 {
    font-size: 40px;
    color:#3f3d56;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    line-height: 1.2;
    margin-bottom:10px;
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
    margin-bottom: 30px;
    color: #b3b3b3;
    font-weight: 300;
    margin-top: 0;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    line-height: 1.5;
    background-color: #fff;
  }
  .list-icons {
    list-style-type:none; 
    padding:0;
    float:left;
    width:100%;
    margin:0;
  }
  .list-icons li {
    float: left;
    padding: 10px 20px;
    background-color: #f2f2f2;
    border-radius: 10px;
    margin-right: 30px;
    margin-bottom: 30px;
  }
  .list-icons svg {
    margin: 0 auto;
    display: block;
  }
  .list-icons span {
    float: left;
    clear: left;
    font-size: 10px;
    font-weight: 700;
    margin-top: 10px;
    width: 100%;
    display: block;
    text-align: center;
    color: #3f3d56;
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

  .social-media-item {
    transition: background-color 500ms ease-in-out 0s, box-shadow 500ms ease-in-out 0s;
    background: #f2f2f2;
    padding: 20px;
    float: left;
    border-radius: 10px;
    box-shadow: none;
    margin-right: 30px;
    margin-bottom:30px;
  }
  .social-media-item:hover {
    box-shadow: 0px 10px 60px 0px rgba(0, 0, 0, 0.2);
    background: #fff;
  }
  .social-media-item svg {
    max-width: 30px;
    max-height: 30px;
    float: left;
    display: block;
  }

  #whatIdo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    align-items: center;
    justify-content: center;
    padding: 60px 90px 0;
    box-sizing: border-box;
    min-height:100vh;
    padding-bottom:20vh;
    animation: page 2000ms cubic-bezier(0.175, 0.885, 0.320, 1.275) 0s;
  }

  #customers {
    width: 100%;
    background: #3f3d56;
    padding: 90px;
    text-align: center;
    box-sizing: border-box;
  }
  #customers h2 {
    color: #fff;
    margin-top: 0;
  }
  #customers p {
    background-color: rgba(0,0,0,0);
    max-width: 600px;
    display: block;
    margin: 0 auto;
  }
  #customers ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    grid-gap: 30px;
    justify-content: center;
    margin: 60px 0 0;
    padding: 0;
  }
  #customers li {
    transition: opacity 300ms linear 0s;
    border: 1px solid #7b7b7b;
    border-radius: 10px;
    float: left;
    padding: 10px 20px;
    opacity: .3;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #customers li:hover {opacity:.7}
  #customers svg {
    max-width: unset;
  }

  @media screen and (max-width: 830px) {
    svg {
      display: none;
    }
    #loginForm, #landing, #whatIdo {
      display: block;
      width: 100%;
      max-width: 300px;
      margin: 40px auto;
    }
    #landing, #whatIdo {max-width:100%}
  }

  @keyframes page {
    0% {
      transform:scale(0)
    }
    100% {
      transform:scale(1)  
    }
  }
`;

class LoginPage extends LitElement {

  @property({type: Boolean, attribute: false})
  auth: boolean;

  firstUpdated() {
    this.addEventListener('ae-login:*|authenticated', () => {
      this.auth = true;
      document.title = 'Willkommen - marcuskramer.online';
      document.body.classList.add('welcome');
    })
    if(sessionStorage.getItem('authenticated') != null) {
      this.auth = sessionStorage.getItem('authenticated').toLowerCase() == 'true' ? true : false;
    }
    if(this.auth) {
      document.title = 'Willkommen - marcuskramer.online'; 
      document.body.classList.add('welcome');
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