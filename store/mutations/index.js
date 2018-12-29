/*
 * Copyright (c) 2018.
 * Archivo desarrollado por Jose Manuel Casani Guerra bajo el pseudonimo de MrJmpl3
 *
 * Email: jmpl3.soporte@gmail.com
 * Twitter: @MrJmpl3
 * Pagina Web: https://www.mrjmpl3-official.es
 */

import {
  MUTATION_ASIGNAR_BANNER_OPTIONS,
  MUTATION_HIDE_BANNER,
  MUTATION_REINICIAR_BANNER_OPTIONS,
  MUTATION_SHOW_BANNER
} from '@/store/mutations/types';
import initialState from '@/store/state';
import Vue from 'vue';

const mutations = {
  [MUTATION_REINICIAR_BANNER_OPTIONS](state) {
    Vue.set(state, 'bannerOptions', initialState.bannerOptions);
  },
  [MUTATION_ASIGNAR_BANNER_OPTIONS](state, payload) {
    Vue.set(state, 'bannerOptions', payload.bannerOptions);
  },
  [MUTATION_SHOW_BANNER](state) {
    Vue.set(state, 'banner', true);
  },
  [MUTATION_HIDE_BANNER](state) {
    Vue.set(state, 'banner', false);
  }
};

export default mutations;
