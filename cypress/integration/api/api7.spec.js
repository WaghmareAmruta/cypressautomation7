describe('verify the POST url', () => {

    function generateEmail() {
        let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        let string = '';
        for (var ii = 0; ii < 15; ii++) {
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return string + '@gmail.com';
    }

    // let payload = {
    //     "name": "Dharitri Pothuvaal Jr.123",
    //     "email":null,
    //     "gender": "male",
    //     "status": "active"
    // }

    it('verify for correct response for get', () => {

        cy.getAPIData('GET', 'https://gorest.co.in/public/v1/users').then(function (response) {
            cy.log(response)
        })
    })

    it.only('verify for correct response for get', () => {
        cy.fixture('example').then(function (payload) {
            payload.email = generateEmail()
            cy.getAPIData('POST', 'https://gorest.co.in/public/v1/users', payload).then(function (response) {
                expect(response.status).to.eq(201)
                return response.body.data
            })
                .then((obj) => {
                    cy.getAPIData('GET', `https://gorest.co.in/public/v1/users/${obj.id}`).then(function (response) {
                        expect(response.body.data.email).to.eqls(payload.email)
                        expect(response.body.data.name).to.eqls(payload.name)
                        expect(response.body.data.gender).to.eqls(payload.gender)
                        expect(response.body.data.status).to.eqls(payload.status)
                    })

                })
        })




    })






})

// Auth 2.0
// client secret --- token -- access api