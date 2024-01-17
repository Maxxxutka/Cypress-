
describe('Автотесты на сайт QA Studio', function () {
   it('Проверка, что при вводе верного логина и пароля и нажатии кнопки Войти авторизация успешна', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); // вводим верный логин
        cy.get('#pass').type('iLoveqastudio1'); // вводим верный пароль
        cy.get('#loginButton').click(); // нажать на кнопку Войти
        cy.get('#messageHeader').should('be.visible'); // сообщение об авторизации видно
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })

    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('max.kulagin@internet.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail')
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })

    it('Негативный кейс на авторизацию 1', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio16896978'); 
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

   })

    it('Негативный кейс на авторизацию 2', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikovhhh.ru');
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

   })

    it('Негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

   })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

   })
})

describe('Покупка фото', function () {
   it('Автотест на покупку нового фото для тренера', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('max.kulagin@internet.ru');
        cy.get('#password').type('Kozlovsky96');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4371959399116938');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('0928');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('MAXIM KULAGIN');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__font-for-success').should('be.visible');
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
        cy.get('.success__image').should('be.visible');

   
    })
})
