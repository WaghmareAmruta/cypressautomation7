describe('intercept concept',()=>{


    beforeEach(()=>{

        cy.visit('https://example.cypress.io/commands/network-requests')


        // wait 
        // to stubbing the mock data for testing with different test data 

        // cy.intercept -- payload --- request body
    })


    it('verify the GET xhr request with intercept',()=>{
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')

        cy.contains('Get Comment').click()
        cy.wait('@getComment').then((obj)=>{
            expect(obj.response.statusCode).to.be.eq(200)
            cy.get('.network-comment').should('have.text',obj.response.body.body)
        })

    })

    it('verify the GET xhr request with intercept',()=>{
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        },{
            body:{
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "hello i am studded data from network via cy.intercept",
                "rollNo":"123"
            }


        }).as('getComment')

        cy.contains('Get Comment').click()
        cy.wait('@getComment').then((obj)=>{
            console.log(obj)
            expect(obj.response.statusCode).to.be.eq(200)
            cy.get('.network-comment').should('have.text',obj.response.body.body)
        })

    })

    it('verify the POST xhr request with intercept',()=>{
        cy.intercept({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments"
        },{
            body:{
                
                    "name": "Using POST in cy.intercept()",
                    "email": "hello@cypress.io",
                    "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE",
                    "id": 501,
                    "skills":"hello"
            }
                
        }).as('postComment')

        cy.contains('Post Comment').click()
        cy.wait('@postComment').then((obj)=>{
            console.log(obj)
            expect(obj.response.statusCode).to.be.eq(200)
            
        })

    })

    it.only('verify the PUT xhr request with intercept',()=>{
        cy.intercept({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        },{
            body:
                {
                    "name": "Using PUT in cy.intercept()",
                    "email": "hello@cypress.io",
                    "body": "PUT CHANGE ge the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE",
                    "id": 1
                  }
    
                
        }).as('updateComment')

        cy.contains('Update Comment').click()
        cy.wait('@updateComment').then((obj)=>{
            console.log(obj)
            expect(obj.response.statusCode).to.be.eq(200)
            
        })

    })

    



})