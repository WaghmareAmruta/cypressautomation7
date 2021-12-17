/// <reference types = "Cypress"/>


describe('verify the api', () => {


    it('Get request', () => {

        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        })
            .then(function (response) {
                //cy.log(response
                // 8 properties  ==>  duration ,status , body , header
                expect(response.status).to.eq(200)
                expect(response.body.total).to.eq(12)

                // we want to user with id user
                let obj = response.body.data.find(function (el) {
                    return el.id == 7
                })
                return obj 
               

            }).then(function (el) {
                //cy.log(el)
                expect(el['first_name']).to.eq('Michael')
                cy.request({
                    method: "GET",
                    url: `https://reqres.in/api/users/${el.id}`
                })
                .then(function (response) {
                    //cy.log(response)
                    expect(response.body.data.email).to.eql('michael.lawson@reqres.in')

                })


            })

    })



})