/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('login.html')

    });


    it('Deve fazer login com sucesso', () => {
        cy.get('#email').type('usuario@teste.com')
        cy.get('#password').type('user123')
        cy.get('#login-btn').click()
        cy.url().should('include', 'dashboard')

    });

    // Validando acoes dentro do dashboard, que requererem senha e usuario para testar //
    it('Deve fazer login com sucesso - Usando comando customizado', () => {
        cy.login('usuario@teste.com', 'user123')

    });

    it('Deve fazer login com sucesso com conta Admin - Usando comando customizado', () => {
        cy.login('admin@biblioteca.com', 'admin123')

    });

});