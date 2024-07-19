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

      // Объект булки в сторе и установленный вручную совпадают
      expect(state.bun).toEqual(bunMockData);
      // Остальные ингредиенты не изменились при добавлении только булки
      expect(state.ingredients).toHaveLength(0);
    });

    test('Установка булки через addIngredient', () => {
      const state = reducer(
        constructorInitialState,
        addIngredient(bunMockData)
      );

      const updatedObject = { ...state.bun } as Record<string, any>;
      delete updatedObject['id'];

      // Объект букли в сторе и установленный вручную совпадают
      expect(updatedObject).toEqual(bunMockData);
      // Остальные ингредиенты не изменились при добавлении только булки
      expect(state.ingredients).toHaveLength(0);
    });
  });

  describe('Работа с ингридиентами', () => {
    test('Добавление ингредиента', () => {
      const state = reducer(
        constructorInitialState,
        addIngredient(ingredientMockData)
      );

      // У конструктора появился новый ингридиент
      expect(state.ingredients).toHaveLength(1);

      const updatedObject = { ...state.ingredients[0] } as Record<string, any>;
      delete updatedObject['id'];

      const initialObject = { ...ingredientMockData } as Record<string, any>;
      delete initialObject['id'];

      expect(updatedObject).toEqual(initialObject);
      // Булка не изменилась
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

      // У конструктора удалился 1 ингридиент
      expect(state.ingredients).toHaveLength(1);
      expect(state.ingredients[0]).toEqual(ingredient1MockData);
      // Булка не изменилась
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

        // У конструктора сменилась позиция ингредиентов
        expect(state.ingredients).toHaveLength(2);
        expect(state.ingredients[0]).toEqual(ingredient1MockData);
        expect(state.ingredients[1]).toEqual(ingredientMockData);
        // Булка не изменилась
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

        // У конструктора сменилась позиция ингредиентов
        expect(state.ingredients).toHaveLength(2);
        expect(state.ingredients[0]).toEqual(ingredient1MockData);
        expect(state.ingredients[1]).toEqual(ingredientMockData);
        // Булка не изменилась
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

    // Конструктор очистился
    expect(state.ingredients).toHaveLength(0);
    expect(state.bun).toBeNull();
  });
});
