/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Resto');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

const restoEmpty = 'Tidak ada resto untuk ditampilkan';
Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('.list');
  I.see(restoEmpty, '.list');
});

Scenario('unliking one resto', async ({ I }) => {
  I.dontSeeElement('.restaurant-item_detail');
  I.amOnPage('/');

  I.seeElement('.restaurant-item_detail');

  // I. wait();
  const firstResto = locate('.restaurant-item_detail').first();
  const firstRestoTitles = await I.grabTextFrom(firstResto);
  I.wait();
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.wait();
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.list');

  const unlikedRestoTitle = await I.grabTextFrom('.restaurant-item_detail');
  assert.strictEqual(firstRestoTitles, unlikedRestoTitle);

  I.seeElement('.restaurant-item_detail');
  await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.dontSeeElement('.restaurant-item_detail');
});
