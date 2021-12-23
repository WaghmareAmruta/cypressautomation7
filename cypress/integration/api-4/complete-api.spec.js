describe('validate get api', () => {


    let accessToken = "Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9"
    let url = `https://gorest.co.in/public/v1/users`
    it('verify get request with chain', () => {
        //1)get users list
        // cy.request()==> reponse (body , headers , status , duration)

        cy.ApiCall(accessToken, "GET", url).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.data.length).to.be.eq(response.body.meta.pagination.limit)
            response.body.data.forEach(el => {
                expect(el).to.have.all.keys('id', 'name', 'email', 'gender', 'status')
            })
            return response.body.data
        })
    })

    it.only('verify post req in chain', () => {
        function generateEmail() {
            let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let string = '';
            for (let i = 0; i < 9; i++) {
                string += char[Math.floor(Math.random() * char.length)];
            }
            return (string + '@gmail.com');
        }

        let payload = {
            "name": "Sulina",
            "email": generateEmail(),
            "gender": "female",
            "status": "active"
        }
        //2) create user
        cy.ApiCall(accessToken, "POST", url, payload).then((response) => {
            expect(response.status).to.eql(201)
            return response.body.data.id
        }).then((usersId) => {

            cy.request({
                method: "GET",
                url: `https://gorest.co.in/public/v1/users/${usersId}`,
                headers: {
                    Authorization: accessToken
                }
            }).then((response) => {
                expect(response.status).to.eq(200)
                return usersId
            }).then((usersId) => {
                //3)update user
                cy.ApiCall(accessToken, "PUT", url, payload,usersId).then((response) => {
                    expect(response.status).to.eq(200)
                    return usersId
                }).then((usersId) => {
                    cy.log(usersId)
                    cy.ApiCall(accessToken,"DELETE",url,payload,usersId).then((response) => {
                        // cy.log(response)
                        expect(response.status).to.eq(204)
                    })
                })
            })


        })


    })


})