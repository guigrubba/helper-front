describe('Testando acesso para', () => {
  it('Web Navigation', () => {
    cy.visit('http://localhost:4000/');
    cy.get('.options > :nth-child(1)').click();
    cy.get('.bot-msg').should('contain.text', 'Seja bem vindo. Eu sou o IWS helper! Fiquei sabendo que você está precisando de ajuda com a navegação do nosso site, em que eu posso ajudar?');
  });

  it('About us', () => {
    cy.visit('http://localhost:4000/');
    cy.get('.options > :nth-child(2)').click();
    cy.get('.bot-msg').should('contain.text', 'Seja bem vindo. Eu sou o IWS helper! Fiquei sabendo que você está com duvidas sobre a empresa, em que eu posso ajudar?');
  });

  it('Functionalities', () => {
    cy.visit('http://localhost:4000/');
    cy.get('.options > :nth-child(3)').click();
    cy.get('.bot-msg').should('contain.text', 'Seja bem vindo. Eu sou o IWS helper! Fiquei sabendo que você gostaria de saber mais sobre os produtos oferecidos pela empresa, em que eu posso ajudar?');
  });

  it('Others', () => {
    cy.visit('http://localhost:4000/');
    cy.get('.options > :nth-child(4)').click();
    cy.get('.bot-msg').should('contain.text', 'Seja bem vindo. Eu sou o IWS helper! Fiquei sabendo que você gostaria de saber mais sobre a empresa, em que eu posso ajudar?');
  });

  it('Testing input from chat', () => {
    cy.visit('http://localhost:4000/');
    cy.get('.options > :nth-child(2)').click();
    cy.get('input').type('teste 1, 2, 3');
  });

  it('Testing send message and getting response of no conection', () => {
    cy.visit('http://localhost:4000/');
    cy.get('.options > :nth-child(2)').click();
    cy.get('input').type('Olá boa tarde! Você poderia me falar qual a localização da matrix?');
    cy.get('img.arrow-icon').click();
    cy.get('.your-msg').should('contain.text', 'Olá boa tarde! Você poderia me falar qual a localização da matrix?');
    cy.get(':nth-child(3) > .bot-msg').should('contain.text', 'Parece que estou problemas para conectar com a API. Tente novamente mais tarde.')
  });

  it('Testing navBar home button', () => {
    cy.visit('http://localhost:4000/');
    cy.get('.options > :nth-child(2)').click();
    cy.get('[style="cursor: pointer;"]').click();
  });

  // it('Testing navBar site button', () => {
  //   cy.visit('http://localhost:4000/');
  //   cy.get('.options > :nth-child(2)').click();
  //   cy.get('ul > :nth-child(3)').click();
  //   cy.wait(10000);
  //   cy.url('href').should('eq','https://www.iws.com.br/');
  //   cy.wait(10000);
  // });

})