/* eslint-disable linebreak-style */
import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <section class="content">
        <div class="latest">
            <h1>Your Favorite Restaurants</h1>
            <div class="list" id="post-content"></div>
        </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('#post-content');
    restoContainer.innerHTML = 'Tidak ada resto untuk ditampilkan';
    restaurant.forEach((restos) => {
      restoContainer.innerHTML += createRestaurantItemTemplate(restos);
    });
  },
};

export default Like;
