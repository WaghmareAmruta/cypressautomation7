describe('get comment concept with intercept',()=>{


    beforeEach(()=>{
        cy.visit('https://example.cypress.io/commands/network-requests')
    })

    it('verify the get comment button',()=>{

        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment');

        cy.contains('Get Comment').click()
        cy.wait('@getComment')
        .then(({response:rs,request:rq})=>{

            return rs.body.body
           
        }).then((str)=>{

            cy.get('.network-comment').should('have.text',str)

        })


    })

    it('verify the post comment button',()=>{

        


    })

    it('verify the put comment button',()=>{

        


    })


    // let j =[1,2,4]

    // let [a,b,d] = j

    // let person = {
    //     fullName:"chinmay",
    //     age:23

    // }


    // let {fullName:fn,age:ag} = person







})