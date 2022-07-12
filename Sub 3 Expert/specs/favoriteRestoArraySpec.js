/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */
/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteRestos = [];

const FavoriteRestoArray = {

  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteRestos.find((resto) => resto.id == id);
  },

  getAllResto() {
    return favoriteRestos;
  },

  putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    if (this.getResto(resto.id)) {
      return;
    }

    favoriteRestos.push(resto);
  },

  deleteResto(id) {
    favoriteRestos = favoriteRestos.filter((resto) => resto.id != id);
  },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestos = []);

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
