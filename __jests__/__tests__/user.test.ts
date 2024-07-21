import {
  fetchUser,
  updateUser,
  register,
  login,
  logout,
  userInitialState
} from '../../src/services/slices';

import reducer from '../../src/services/slices/user';
import {
  userMockData,
  registerMockData,
  loginMockData
} from '../test-constants';

describe('Тестирование user', () => {
  describe('Асинхронная функция для регистрации', () => {
    test('Начало запроса (pending)', () => {
      const state = reducer(
        userInitialState,
        register.pending('pending', registerMockData)
      );

      expect(state.registerError).toBeUndefined();
    });

    test('Результат запроса (fulfilled)', () => {
      const state = reducer(
        userInitialState,
        register.fulfilled(userMockData, 'fulfilled', registerMockData)
      );

      expect(state.isAuthenticated).toBeTruthy();
      expect(state.registerError).toBeUndefined();
      expect(state.data).toEqual(userMockData);
    });

    test('Ошибка запроса (rejected)', () => {
      const error = 'register.rejected';

      const state = reducer(
        userInitialState,
        register.rejected(new Error(error), 'rejected', registerMockData)
      );

      expect(state.registerError?.message).toEqual(error);
    });
  });

  describe('Асинхронная функция для входа в аккаунт', () => {
    test('Начало запроса (pending)', () => {
      const state = reducer(
        userInitialState,
        login.pending('pending', loginMockData)
      );

      expect(state.loginError).toBeUndefined();
    });

    test('Результат запроса (fulfilled)', () => {
      const state = reducer(
        userInitialState,
        login.fulfilled(userMockData, 'fulfilled', loginMockData)
      );

      expect(state.isAuthenticated).toBeTruthy();
      expect(state.loginError).toBeUndefined();
      expect(state.data).toEqual(userMockData);
    });

    test('Ошибка запроса (rejected)', () => {
      const error = 'login.rejected';

      const state = reducer(
        userInitialState,
        login.rejected(new Error(error), 'rejected', loginMockData)
      );

      expect(state.loginError?.message).toEqual(error);
    });
  });

  describe('Асинхронная функция выхода из аккаунта', () => {
    test('Результат запроса (fulfilled)', () => {
      const state = reducer(
        userInitialState,
        logout.fulfilled(undefined, 'fulfilled')
      );

      expect(state.isAuthenticated).toBeFalsy();
      expect(state.data).toEqual({
        email: '',
        name: ''
      });
    });
  });

  describe('Асинхронная функция проверки авторизации', () => {
    test('Результат запроса (fulfilled)', () => {
      const state = reducer(
        userInitialState,
        fetchUser.fulfilled(userMockData, 'fulfilled')
      );

      expect(state.isAuthenticated).toBeTruthy();
      expect(state.isAuthChecked).toBeTruthy();
      expect(state.data).toEqual(userMockData);
    });

    test('Ошибка запроса (rejected)', () => {
      const error = 'fetchUser.rejected';

      const state = reducer(
        userInitialState,
        fetchUser.rejected(new Error(error), 'rejected')
      );

      expect(state.isAuthenticated).toBeFalsy();
      expect(state.isAuthChecked).toBeTruthy();
    });
  });

  describe('Асинхронная функция редактирования информации пользователя', () => {
    test('Результат запроса (fulfilled)', () => {
      const state = reducer(
        userInitialState,
        updateUser.fulfilled(userMockData, 'fulfilled', userMockData)
      );

      expect(state.data).toEqual(userMockData);
    });
  });
});
