describe('Testando multiplas páginas', () => {
  it('Deve conseguir acessar a página de cartões', { browser: 'edge' }, () => {
    cy.visit('/');
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('neilton@alura.com');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();

    cy.location('pathname').should('eq', '/home'); //verifica pathname

    cy.getByData('app-home').find('a').eq(1).click(); //localiza todos os elementos a do container data-test=app-home e seleciona o de array numero 1
    cy.getByData('titulo-cartoes')
      .should('exist') // verifica se elemento existe
      .and('have.text', 'Meus cartões'); // verifica se tem o texto "Meus Cartões"

    cy.location('pathname').should('eq', '/home/cartoes'); // verifica pathname
  });
});
