import {
  fetchIngredients,
  ingredientsInitialState
} from '../../src/services/slices';

import reducer from '../../src/services/slices/ingredients';
import { ingredientsMockData } from '../test-constants';

describe('Тестирование ingredients', () => {
  describe('Ассинхронные экшены', () => {
    test('получение ингредиентов (pending)', () => {
      const state = reducer(
        ingredientsInitialState,
        fetchIngredients.pending('pending')
      );
      const { isLoading } = state;
      expect(isLoading).toBe(true);
    });

    test('Получение ингредиентов (fulfilled)', () => {
      const state = reducer(
        ingredientsInitialState,
        fetchIngredients.fulfilled(ingredientsMockData, 'fulfilled')
      );
      const { isLoading, data } = state;
      expect(isLoading).toBe(false);
      expect(data).toEqual(ingredientsMockData);
    });
    test('получение ингредиентов (rejected)', () => {
      const error = 'fetchIngredients.rejected';
      const state = reducer(
        ingredientsInitialState,
        fetchIngredients.rejected(new Error(error), 'rejected')
      );
      const { isLoading } = state;
      expect(isLoading).toBe(false);
      expect(state.error?.message).toBe(error);
    });
  });
});
