/// <reference types="cypress"/>

describe('funcionalidade: Catalogo de livros', () => {

    beforeEach(() => {
        cy.visit('catalog.html')
    });
    // o skip foi usado para pular esse teste //
    it.skip('Deve clicar no botao Adicionar a cesta', () => {
        cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
        cy.get('#cart-count').should('contain', 1)

    });
    // Encurtamento para btn-primary//
    it('Deve clicar em todos os botoes Adicionar a cesta', () => {
        cy.get('.btn-primary').click({ multiple: true })

    });

    it('Deve clicar no primeiro botao Adicionar a cesta', () => {
        cy.get('.btn-primary').first().click()
    });

    it('Deve clicar no ultimo botao Adicionar a cesta', () => {
        cy.get('.btn-primary').last().click()
    });

    // 0 e 1, 1 e 2 ... e segue essa logica de numeracao //

    it('Deve clicar no terceiro botao Adicionar a cesta', () => {
        cy.get('.btn-primary').eq(2).click()

    });


    it('Deve clicar no quinto botao Adicionar a cesta', () => {
        cy.get('.btn-primary').eq(2).click()
        cy.get('#global-alert-container').should('contain', 'A Divina Comédia')
    });

    // Se eu quiser testar por nome //
    it('Deve clicar no nome do livro e direcionar para a tela do livro', () => {
        cy.contains('Dom Quixote').click()
        // o nome da url confere //
        cy.url().should('include', 'book-details')
        //adicionar na cesta //
        cy.get('#add-to-cart-btn').click()
        //Mensagem de adicionado com sucesso //
        cy.get('#alert-container').should('contain', ' Livro adicionado à cesta com sucesso!')


    });



});
