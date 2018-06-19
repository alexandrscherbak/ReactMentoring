describe('Movies Search App', function() {
	it('Potter search results', function() {
		cy.visit('http://localhost:8080/search');
		cy.get('input').type('potter');
		cy.get('.search-button').click();
		cy.get('.film-info-container').should('have.length', 8);
	});
});
