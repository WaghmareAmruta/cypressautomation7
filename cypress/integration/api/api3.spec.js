/// <reference types = "Cypress"/>


describe('verify the api', () => {


    it('Get request', () => {

        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        })
            .then(function (response) {
                expect(response.status).to.eq(200)
                expect(response.body.total).to.eq(12)
                let obj = response.body.data.find((el) => el.id == 7)
                return obj


            })
            .then(function (el) {
                expect(el['first_name']).to.eq('Michael')
                cy.request({
                    method: "GET",
                    url: `https://reqres.in/api/users/${el.id}`
                })
            .then((response) => expect(response.body.data.email).to.eql('michael.lawson@reqres.in'))

            })

    })



})