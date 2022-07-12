/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

const restoEmpty = 'Tidak ada resto untuk ditampilkan';
Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('.list');
  I.see(restoEmpty, '.list');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(restoEmpty, '.list');

  I.amOnPage('/');
  I.seeElement('.restaurant-item_detail');
  I.wait();
  const firstResto = locate('.restaurant-item_detail').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);

  I.click(firstResto);

  I.seeElement('#likeButton');
  I.wait();
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.list');
  const likedRestoTitle = await I.grabTextFrom('.restaurant-item_detail');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});
