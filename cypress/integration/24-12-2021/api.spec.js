describe('verify the Outh2.0', () => {

    it('verify  the Outh2.0 request ', () => {

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
            return response.body.access_token

        }).then(function (token) {

            cy.request({
                method: "GET",
                url: "http://coop.apps.symfonycasts.com/api/me",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((response) => {
                cy.request({
                    method: "POST",
                    url: `http://coop.apps.symfonycasts.com/api/${response.body.id}/barn-unlock`,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then(function(response){
                    //cy.log(response)
                    expect(response.body.message).to.eq("You just unlocked your barn! Watch out for strangers!")


                })

            })



        })

    })

})