import {
  fetchOrder,
  fetchOrders,
  createOrder,
  resetOrderModalData,
  ordersInitialState
} from '../../src/services/slices';

import reducer from '../../src/services/slices/orders';
import { ordersMockData } from '../test-constants';

describe('Тестирование orders', () => {
  describe('Асинхронная функция для получения заказов', () => {
    test('Начало запроса (pending)', () => {
      const state = reducer(ordersInitialState, fetchOrders.pending('pending'));

      expect(state.isOrdersLoading).toBeTruthy();
      expect(state.error).toBeNull();
    });

    test('Результат запроса (fulfilled)', () => {
      const state = reducer(
        ordersInitialState,
        fetchOrders.fulfilled(ordersMockData, 'fulfilled')
      );

      expect(state.isOrdersLoading).toBeFalsy();
      expect(state.error).toBeNull();
      expect(state.data).toEqual(ordersMockData);
    });

    test('Ошибка запроса (rejected)', () => {
      const error = 'fetchOrders.rejected';

      const state = reducer(
        ordersInitialState,
        fetchOrders.rejected(new Error(error), 'rejected')
      );

      expect(state.isOrdersLoading).toBeFalsy();
      expect(state.error?.message).toEqual(error);
    });
  });

  describe('Асинхронная функция для получения заказа по номеру', () => {
    test('Начало запроса (pending)', () => {
      const state = reducer(
        ordersInitialState,
        fetchOrder.pending('pending', ordersMockData[0].number)
      );

      expect(state.isOrderLoading).toBeTruthy();
    });

    test('Результат запроса (fulfilled)', () => {
      const state = reducer(
        ordersInitialState,
        fetchOrder.fulfilled(
          ordersMockData[0],
          'fulfilled',
          ordersMockData[0].number
        )
      );

      expect(state.isOrderLoading).toBeFalsy();
      expect(state.orderModalData).toEqual(ordersMockData[0]);
    });

    test('Ошибка запроса (rejected)', () => {
      const error = 'fetchOrder.rejected';

      const state = reducer(
        ordersInitialState,
        fetchOrder.rejected(new Error(error), 'rejected', -1)
      );

      expect(state.isOrderLoading).toBeFalsy();
    });
  });

  describe('Асинхронная функция для создания заказа', () => {
    test('Начало запроса (pending)', () => {
      const state = reducer(
        ordersInitialState,
        createOrder.pending('pending', ordersMockData[0].ingredients)
      );

      expect(state.orderRequest).toBeTruthy();
    });

    test('Результат запроса (fulfilled)', () => {
      const state = reducer(
        ordersInitialState,
        createOrder.fulfilled(
          { order: ordersMockData[0], name: 'EXAMPLE' },
          'fulfilled',
          ordersMockData[0].ingredients
        )
      );

      expect(state.orderRequest).toBeFalsy();
      expect(state.orderModalData).toEqual(ordersMockData[0]);
    });

    test('Ошибка запроса (rejected)', () => {
      const error = 'createOrder.rejected';

      const state = reducer(
        ordersInitialState,
        createOrder.rejected(new Error(error), 'rejected', [])
      );

      expect(state.orderRequest).toBeFalsy();
    });
  });
});