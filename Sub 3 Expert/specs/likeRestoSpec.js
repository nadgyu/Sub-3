/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-idb';
import * as TestFactories from './helpers/testFactories.js';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await FavoriteRestoIdb.getResto(1);

    expect(resto).toEqual({ id: 1 });

    FavoriteRestoIdb.deleteResto(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    await FavoriteRestoIdb.putResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }]);

    FavoriteRestoIdb.deleteResto(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
