import { fetchFeeds, feedsInitialState } from '../../src/services/slices';

import reducer from '../../src/services/slices/feed';
import { feedsMockData } from '../test-constants'


describe('Тестирование feed', () => {
  describe('Асинхронная функция', () => {
    test('Начало запроса (pending)', () => {
      const state = reducer(feedsInitialState, fetchFeeds.pending('pending'));

      expect(state.isLoading).toBeTruthy();
      expect(state.error).toBeNull();
    });
    test('Результат запроса (fulfilled)', () => {
      const state = reducer(
        feedsInitialState,
        fetchFeeds.fulfilled(feedsMockData, 'fulfilled')
      );

      expect(state.isLoading).toBeFalsy();
      expect(state.error).toBeNull();
      expect(state.data).toEqual(feedsMockData);
    });
    test('Ошибка запроса (rejected)', () => {
      const error = 'fetchFeeds.rejected';

      const state = reducer(
        feedsInitialState,
        fetchFeeds.rejected(new Error(error), 'rejected')
      );

      expect(state.isLoading).toBeFalsy();
      expect(state.error?.message).toEqual(error);
    });
  });
});
