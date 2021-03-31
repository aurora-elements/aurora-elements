// default en
let locale = 'en';
// this might be useful, so let's export
export const currentLocale = () => locale;// messages in the language of the current locale
let messages = {};
let dictionary = {};// Lookup helper to simplify the monster function be
const translate = key => messages[key] ? messages[key] : key;// The work horse. It does all we work with the literal 
// template translating and will be exported as a default
const l10n = (strings, values) => {
    const r = strings.reduce((prevString, nextString, index) => prevString + (index > 0 ? values[index - 1] : '') + nextString, '');
    return translate(r);
};
export default l10n;// Let's try to be clever an build `messages` lookup
// table combining the available languages with the fallbacks 
// to defaultconst init = (lc, json) => {
// Uniform the locale abbreveation
locale = lc.split('-');
const [mainlocale] = locale;
locale = locale[1] ? `${locale[0]}-${locale[1].toUpperCase()}` : lc;
// Create `messages` dictionary from the corresponding
// langauge
const locales = Object.keys(json);
if (locales.length > 0) {
    messages = Object.assign({}, json[locales[0]]);
    if (mainlocale !== locale) {
        if (json[mainlocale]) {
            messages = Object.assign(messages, json[mainlocale]);
        }
    }
    if (json[locale]) {
        messages = Object.assign(messages, json[locale]);
    }
} // also save json object in the dictionary
// just it case we would nee other be current localization

dictionary = json;
dictionary[lc] = messages;
// export `just in case` function to get message
// a message in non-default language
export const byLang = (lc, key) => dictionary[lc][key] ? dictionary[lc][key] : `L10N:${key}[${lc}]:L10N`; // Finally read the translation from json and initimport translations from ‘./translations.json’;
init(navigator.language, translations);