import { createI18n } from 'vue-i18n';
import messages from './index';

const language = (
  (navigator.language ? navigator.language : navigator.userLanguage) || "zh"
).toLowerCase();
const i18n = createI18n({
  fallbackLocale: 'ch',
  globalInjection: true,
  legacy: false,
  locale: language.split("-")[0] || "zh",
  messages
});

export default i18n;
