/* eslint-disable linebreak-style */
/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DB_NAME, DB_VERSION, OBJECT_STORE_NAME } = CONFIG;
const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    db.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestoIdb = {
  async getResto(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },

  async getAllResto() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  async putResto(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },

  async deleteResto(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteRestoIdb;
