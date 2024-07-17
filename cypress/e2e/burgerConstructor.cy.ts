import * as orderFixture from '../fixtures/order.json';

describe('Конструктор бургера', () => {
  beforeEach(() => {
    // Перехват запросов на получение ингредиентов
    cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients' });

    // Посещение основной страницы перед каждым тестом
    cy.visit('http://localhost:4000/');
  });

  it('Список ингредиентов доступен для выбора', () => {
    // Проверка наличия булочек
    cy.get('[data-ingredient="bun"]').should('have.length.at.least', 1);
    // Проверка наличия основных ингредиентов и соусов
    cy.get('[data-ingredient="main"],[data-ingredient="sauce"]').should(
      'have.length.at.least',
      1
    );
  });

  describe('Модальные окна', () => {
    describe('Открытие модального окна', () => {
      it('Открытие по клику на карточку ингредиента', () => {
        cy.get('[data-ingredient="bun"]:first-of-type').click();
        cy.get('#modals').children().should('have.length', 2);
      });

      it('Через нажатие на крестик', () => {
        cy.get('[data-ingredient="bun"]:first-of-type').click();
        cy.get('#modals button:first-of-type').click();
        cy.get('#modals').children().should('have.length', 0);
      });

      it('Закрытие через нажатие на оверлей', () => {
        cy.get('[data-ingredient="bun"]:first-of-type').click();
        cy.get('#modals>div:nth-of-type(2)').click({ force: true });
        cy.get('#modals').children().should('have.length', 0);
      });
    });
  });

  describe('Создание заказа', () => {
    beforeEach(() => {
      // Используем фейковые токены авторизации
      cy.setCookie('accessToken', 'EXAMPLE_ACCESS_TOKEN');
      localStorage.setItem('refreshToken', 'EXAMPLE_REFRESH_TOKEN');
      cy.intercept('GET', 'api/auth/user', { fixture: 'user' });
      cy.intercept('POST', 'api/orders', { fixture: 'order' });
      cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients' });
    });

    it('Оформление заказа', () => {
      cy.get('[data-order-button]').should('be.disabled');
      cy.get('[data-ingredient="bun"]:first-of-type button').click();
      cy.get('[data-order-button]').should('be.disabled');
      cy.get('[data-ingredient="main"]:first-of-type button').click();
      cy.get('[data-order-button]').should('be.enabled');

      // Кнопка оформления заказа
      cy.get('[data-order-button]').click();

      // После успешной отправки заказа должго открыться модальное окно с подтверждением.
      cy.get('#modals').children().should('have.length', 2);

      // Новое модальное окно должно содержать тестовый номер заказа
      cy.get('#modals h2:first-of-type').should(
        'have.text',
        orderFixture.order.number
      );

      // После оформления заказа кнопка должна снова стать неактивной, а конструктор - сброшенным
      cy.get('[data-order-button]').should('be.disabled');
    });
    afterEach(() => {
      // Очистка фейковых токенов
      cy.clearCookie('accessToken');
      localStorage.removeItem('refreshToken');
    });
  });
});
