import { fetchFeeds, feedsInitialState } from '../../src/services/slices';

import reducer from '../../src/services/slices/feed';

const feedsMockData = {
  orders: [],
  total: 1,
  totalToday: 1
};

describe('Тестирование feed', () => {
  describe('Асинхронная функция для получения ленты заказов: fetchFeed', () => {
    test('Начало запроса: fetchFeed.pending', () => {
      const state = reducer(feedsInitialState, fetchFeeds.pending('pending'));

      expect(state.isLoading).toBeTruthy();
      expect(state.error).toBeNull();
    });
    test('Результат запроса: fetchFeed.fulfilled', () => {
      const state = reducer(
        feedsInitialState,
        fetchFeeds.fulfilled(feedsMockData, 'fulfilled')
      );

      expect(state.isLoading).toBeFalsy();
      expect(state.error).toBeNull();
      expect(state.data).toEqual(feedsMockData);
    });
    test('Ошибка запроса: fetchFeed.rejected', () => {
      const error = 'fetchFeed.rejected';

      const state = reducer(
        feedsInitialState,
        fetchFeeds.rejected(new Error(error), 'rejected')
      );

      expect(state.isLoading).toBeFalsy();
      expect(state.error?.message).toEqual(error);
    });
  });
});
