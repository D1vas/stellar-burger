import {
  setBun,
  addIngredient,
  removeIngredient,
  moveIngredient,
  resetConstructor,
  constructorInitialState
} from '../../src/services/slices';

import reducer from '../../src/services/slices/builder';
import {
  bunMockData,
  ingredientMockData,
  ingredient1MockData
} from '../test-constants';

describe('Тестирование builder', () => {
  describe('Работа с булками', () => {
    test('Установка булки через setBun', () => {
      const state = reducer(constructorInitialState, setBun(bunMockData));

      expect(state.bun).toEqual(bunMockData);
      expect(state.ingredients).toHaveLength(0);
    });

    test('Установка булки через addIngredient', () => {
      const state = reducer(
        constructorInitialState,
        addIngredient(bunMockData)
      );

      const updatedObject = { ...state.bun } as Record<string, any>;
      delete updatedObject['id'];

      expect(updatedObject).toEqual(bunMockData);
      expect(state.ingredients).toHaveLength(0);
    });
  });

  describe('Работа с ингредиентами', () => {
    test('Добавление ингредиента', () => {
      const state = reducer(
        constructorInitialState,
        addIngredient(ingredientMockData)
      );

      expect(state.ingredients).toHaveLength(1);

      const updatedObject = { ...state.ingredients[0] } as Record<string, any>;
      delete updatedObject['id'];

      const initialObject = { ...ingredientMockData } as Record<string, any>;
      delete initialObject['id'];

      expect(updatedObject).toEqual(initialObject);
      expect(state.bun).toBeNull();
    });

    test('Удаление ингредиента', () => {
      const _initialState = {
        bun: null,
        ingredients: [ingredientMockData, ingredient1MockData]
      };

      const state = reducer(
        _initialState,
        removeIngredient(ingredientMockData.id)
      );

      expect(state.ingredients).toHaveLength(1);
      expect(state.ingredients[0]).toEqual(ingredient1MockData);
      expect(state.bun).toBeNull();
    });

    describe('Передвижение ингредиентов', () => {
      test('Передвижение вниз', () => {
        const _initialState = {
          bun: null,
          ingredients: [ingredientMockData, ingredient1MockData]
        };

        const state = reducer(
          _initialState,
          moveIngredient({ index: 0, upwards: false })
        );

        expect(state.ingredients).toHaveLength(2);
        expect(state.ingredients[0]).toEqual(ingredient1MockData);
        expect(state.ingredients[1]).toEqual(ingredientMockData);
        expect(state.bun).toBeNull();
      });

      test('Передвижение вверх', () => {
        const _initialState = {
          bun: null,
          ingredients: [ingredientMockData, ingredient1MockData]
        };

        const state = reducer(
          _initialState,
          moveIngredient({ index: 1, upwards: true })
        );

        expect(state.ingredients).toHaveLength(2);
        expect(state.ingredients[0]).toEqual(ingredient1MockData);
        expect(state.ingredients[1]).toEqual(ingredientMockData);
        expect(state.bun).toBeNull();
      });
    });
  });

  test('Очистка конструктора', () => {
    const _initialState = {
      bun: bunMockData,
      ingredients: [ingredientMockData, ingredient1MockData]
    };

    const state = reducer(_initialState, resetConstructor());

    expect(state.ingredients).toHaveLength(0);
    expect(state.bun).toBeNull();
  });
});
