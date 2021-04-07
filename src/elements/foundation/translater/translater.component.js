// default locale
const defaultLocale = "en";

// supported locales
const supportedLocales = [
    "de", 
    "en"
];

// user locale
const userLocale =
  getStoredLocale() ||
  navigator.language ||
  navigator.userLanguage ||
  navigator.browserLanguage;

// get stored locale
function getStoredLocale() {
    // try getting the locale from local storage
    try {
        return localStorage.getItem("locale");
    } catch (e) {}
    return undefined;
}

// set locale
function setLocale() {

    if(supportedLocales.includes(userLocale)) { 

        document.documentElement.lang = userLocale;
        localStorage.setItem('locale', userLocale)

    } else { 

        document.documentElement.lang = defaultLocale;
        localStorage.setItem('locale', defaultLocale)
    } 

}

setLocale();

// export globale locale
export const locale = '.' + localStorage.getItem('locale') + '.json';
export const localesPath = '/dist/showcase/pages/translations/';
