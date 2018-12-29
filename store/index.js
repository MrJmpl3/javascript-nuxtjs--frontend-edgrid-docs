/*
 * Copyright (c) 2018.
 * Archivo desarrollado por Jose Manuel Casani Guerra bajo el pseudonimo de MrJmpl3
 *
 * Email: jmpl3.soporte@gmail.com
 * Twitter: @MrJmpl3
 * Pagina Web: https://www.mrjmpl3-official.es
 */

import actions from '@/store/actions';
import getters from '@/store/getters';
import mutations from '@/store/mutations';
import initialState from '@/store/state';
import Vuex from 'vuex';

const options = {
  state: initialState,
  getters,
  actions,
  mutations
};

const createStore = () => new Vuex.Store(options);

export default createStore;
