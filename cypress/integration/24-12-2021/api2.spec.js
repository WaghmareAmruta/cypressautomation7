describe('verify the Outh2.0', () => {
    let token = ''
    let userId = ''

    beforeEach(() => {
        cy.request({
            method: "POST",
            url: "http://coop.apps.symfonycasts.com/token",
            body: {
                grant_type: 'client_credentials',
                client_id: 'amol2',
                client_secret: "e9e74c2c10f5297734801f52fdc25b7f"
            },
            form: true
        }).then((response) => {
            //cy.log(response)
            expect(response.status).to.eq(200)
            token = response.body.access_token

        })

    })

    it('verify the user and get the user id', () => {
        cy.request({
            method: "GET",
            url: "http://coop.apps.symfonycasts.com/api/me",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            userId = response.body.id
        })


    })

    it('Unlock the burn ! api', () => {
        cy.request({
            method: "POST",
            url: `http://coop.apps.symfonycasts.com/api/${userId}/barn-unlock`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            //cy.log(response)
            expect(response.body.message).to.eq("You just unlocked your barn! Watch out for strangers!")
        })

    })

    it('Unlock the burn ! api', () => {
        cy.request({
            method: "POST",
            url: `http://coop.apps.symfonycasts.com/api/${userId}/barn-unlock`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            //cy.log(response)
            expect(response.body.message).to.eq("You just unlocked your barn! Watch out for strangers!")
        })

    })

    it('Call "toiletseat-down', () => {
        cy.request({
            method: "POST",
            url: `http://coop.apps.symfonycasts.com/api/${userId}/toiletseat-down`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            //cy.log(response)
            expect(response.body.message).to.eq(`You just put the toilet seat down. You\u0027re a wonderful roommate!`)
        })

    })






})

