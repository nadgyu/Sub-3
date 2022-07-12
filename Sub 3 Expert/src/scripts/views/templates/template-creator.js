/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<h2 class="resto_title">${restaurant.name}</h2>
  <img class="resto_poster" src="${CONFIG.BASE_SMALL_IMAGE_URL}${
  restaurant.pictureId
}" alt="${restaurant.name}" />
  <div class="resto_info">
    <h3 class="info-list">Address</h3>
        <p class="p-detail">${restaurant.address}, ${restaurant.city}</p><br>
    <h3 class="info-list">Rating</h3>
        <i title="ratings" class="fa fa-star checked"></i>
        <p class="rating-name p-detail">${restaurant.rating}</p><br>
    <br><h3 class="info-list">Category</h3>
    <p class="categories p-detail">${restaurant.categories
    .map(
      (category) => `
            <span class="category">${category.name}</span>`,
    )
    .join('')}</p>
  </div>
  <div class="resto_overview">
    <br><h3 class="info-list">Description</h3>
    <p class="p-detail">${restaurant.description}</p>
  </div>

  <br><br><h2>Menu</h2>
  <div class="menu-detail">
      <div class="food">
        <h4>Food</h4><br>
        <ul>${restaurant.menus.foods
    .map(
      (food, i) => `
                <li><p>${i + 1}) ${food.name}</p></li>`,
    )
    .join('')}
        <ul>
      </div>
      <div class="drink">
        <h4>Drink</h4><br>
        <ul>
          ${restaurant.menus.drinks
    .map(
      (drink, i) => `
                <li><p>${i + 1}) ${drink.name}</p></li>`,
    )
    .join('')}
        <ul>
      </div>
    </div>

    <br><br><h2>Reviews</h2><br>
    <div class="review-detail">${restaurant.customerReviews
    .map(
      (review) => `
          <div class="review-detail-item">
            <div class="header-review">
              <p class="namereview">${review.name}</p>
              <p class="date-rev">${review.date}</p>
            </div>
            <div class="bodyrev">
              ${review.review}
            </div>
          </div>`,
    )
    .join('')}
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<div class="list_item">
<img src="${CONFIG.BASE_SMALL_IMAGE_URL + restaurant.pictureId}" alt="${
  restaurant.name
}" />
<div class="city">${restaurant.city}</div>
<div class="list_item_content">
    <p class="list_item_rate">
        Rating : 
        <span class="span_rate">
        <a href="#" class="list_item_rate_value">${restaurant.rating}</a>
        </span>
    </p>
    <h1 class="list_item_title">
        <span class="span_title">
            <a class="restaurant-item_detail" href="/#/detail/${restaurant.id}">${restaurant.name}</a>
        </span>
    </h1>
    <div class="list_item_desc">${restaurant.description.slice(0, 150)}...</div>
</div>
</div>

`;

const createLikeButtonTemplate = () => `
<button aria-label='like this restaurant' id='likeButton' class='like'>
    <i class='fa fa-heart-o' aria-hidden='true'></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label='unlike this restaurant' id='likeButton' class='like'>
    <i class='fa fa-heart' aria-hidden='true'></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
