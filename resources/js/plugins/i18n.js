import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {

};

export const i18n = new VueI18n({
    silentTranslationWarn: true,
    locale: 'EN', // set locale
    fallbackLocale: 'EN', // set fallback locale
    messages, // set locale messages
});