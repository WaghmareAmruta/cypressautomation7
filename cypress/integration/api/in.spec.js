
describe('Network reequests',()=>{

    // intercept
    //  request -------> response ------- UI

    beforeEach(()=>{
        cy.visit('https://example.cypress.io/commands/network-requests')
    })

    it('Validate the XHR GET request',()=>{
        // request body , request header , 
        // status , duration , response body , respose header
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as("getComment")
        
        cy.contains('Get Comment').click()
        cy.wait('@getComment').its('response.statusCode').should('eq',200)

    })
    it.only('Validate the XHR GET request',()=>{
        // request body , request header , 
        // status , duration , response body , respose header
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as("getComment")
        
        cy.contains('Get Comment').click()
        cy.wait('@getComment').should((obj)=>{
            cy.log(obj)
            expect(obj.response.statusCode).to.eq(200)
            expect(obj.response.statusMessage).to.eq("OK")
            expect(obj.request.method).to.eq('GET')
            expect(obj.response['body']).to.have.all.keys('postId', 'id', 'name', 'email','body');
            cy.get('.network-comment').should('have.text',obj.response.body.body)


        })


    })

})