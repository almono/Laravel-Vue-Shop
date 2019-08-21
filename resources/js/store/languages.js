import axios from 'axios'
import { backendUrl } from '../helpers/backendUrl.js'
import {i18n} from '../plugins/i18n'

const state = {
    translated_words: []
};

const getters = {
    getTranslatedWords: (state) => state.translated_words
};

const actions = {
    async getLangData(context, language) {
        await axios.get(`${backendUrl()}/getLangData/${language}`).then(response => {
            /*let curr_lang = localStorage.getItem('vueCurrentLang') || 'EN';

            if(curr_lang != 'EN' && response.data[curr_lang] != undefined) {
                i18n.setLocaleMessage(curr_lang,response.data[curr_lang])
            }

            i18n.setLocaleMessage('EN',response.data.EN);
            i18n.locale = curr_lang */
        }).catch(err => {
            console.log(err)
        })
    },

    async getTranslatedWords(context, language) {
        await axios.get(`${backendUrl()}/getTranslatedWords/${language}`).then(response => {
            context.commit('setTranslatedWords', response.data)
        }).catch(err => {
            console.log(err)
        })
    },

    async getLanguageList(context) {
        await axios.get(`${backendUrl()}/getLanguageList`).then(response => {
            // after adding a language make sure the stores language list is updated
            context.commit('setLanguageList', response.data)
        }).catch(err => {
            console.log(err)
        })
    },
};

const mutations = {
    setTranslatedWords:(state, translated_words) => (state.translated_words = translated_words)
};

export default {
    state,
    getters,
    actions,
    mutations
}


