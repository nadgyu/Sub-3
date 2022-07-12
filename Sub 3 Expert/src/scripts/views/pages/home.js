/* eslint-disable linebreak-style */
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="content">
  <div class="menu-content">
    <h1>Explore the best Restaurant</h1>
    <div class="list" id="post-content"></div>
  </div>
</section>
      `;
  },

  async afterRender() {
    const restosContainer = document.querySelector('#post-content');
    const data = await RestaurantSource.getRestaurantList();
    data.restaurants.forEach((restaurant) => {
      restosContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
