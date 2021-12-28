describe('get comment concept with intercept', () => {


    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests')
    })

    it('verify the get comment button', () => {

        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1",
        }).as('getComment');

        cy.contains('Get Comment').click()
        cy.wait('@getComment')
            .then(({ response: rs, request: rq }) => {

                return rs.body.body

            }).then((str) => {

                cy.get('.network-comment').should('have.text', str)

            })


    })

    it('verify the get comment button', () => {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1",

        }, {
            body: {
                "postId": 12,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "Hello I am new to coding"
            }

        }).as('getComment');

        cy.contains('Get Comment').click()
        cy.wait('@getComment')
            .then(({ response: rs, request: rq }) => {
                expect(rs.statusCode).to.eq(200)
                return rs.body.body

            }).then((str) => {

                cy.get('.network-comment').should('have.text', str)

            })


    })

    it.only('verify post request with cy.get()', () => {
        // request and reponse
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments",

        }, {

            body: {
                "name": "Using POST in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE",
                "id": 501
            }

        }).as('postComment')
        cy.contains('Post Comment').click()
        cy.wait('@postComment').then(({ request, response }) => {
            expect(request['headers']['origin']).to.eq("https://example.cypress.io")
            expect(request.body).to.include('email')

        })


    })

    it.only('verify the put comment button', () => {

        cy.intercept({
            method: "PUT",
            url: "https://jsonplaceholder.cypress.io/comments/1",

        }, {

            body: {
                "name": "Using PUT in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE",
                "id": 1
            }

        }).as('putComment')
        cy.contains('Update Comment').click()
        cy.wait('@putComment').then(({ request, response }) => {
            expect(response.statusCode).to.eq(200)

        })





    })


    // let j =[1,2,4]

    // let [a,b,d] = j

    // let person = {
    //     fullName:"chinmay",
    //     age:23

    // }


    // let {fullName:fn,age:ag} = person







})