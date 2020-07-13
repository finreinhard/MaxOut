import i18next, {LanguageDetectorModule} from "i18next";
import * as Localization from "expo-localization";
import i18n_en from "./i18n_en";
import i18n_de from "./i18n_de";

const languageDetector: LanguageDetectorModule = {
    type: 'languageDetector',
    detect: () => Localization.locale,
    init: () => {},
    cacheUserLanguage() {
    },
};

i18next
    .use(languageDetector)
    .init({
        fallbackLng: 'en',
        resources: {
            en: i18n_en,
            de: i18n_de,
        },
        ns: ['general', 'legal', 'skills', 'settings', 'setup'],
        defaultNS: 'general',
        interpolation: {
            escapeValue: false,
        },
    });

export const t = (key: string, args: {[key: string]: any} | undefined = undefined) => i18next.t(key, args);

export default i18next;
