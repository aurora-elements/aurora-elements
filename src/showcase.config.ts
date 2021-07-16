import { locale } from './functionalities/directives/translater.directive';
import translate_de from './showcase/components/navigation/translations/de.json';
import translate_en from './showcase/components/navigation/translations/en.json';

const requestUrl = `${locale === 'de' ? translate_de : translate_en}`;

export const nav = fetch(requestUrl).then(res => res.json());