describe('verify the get api', () => {

    it('verify the get request', () => {

        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v1/users",
            headers: {
                Authorization: "Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9"
            }
        })
            .then((response) => {
                //cy.log(response)
                expect(response.status).to.be.equal(200)
                expect(response.body.meta.pagination.limit).to.be.eq(response.body.data.length)
                response.body.data.forEach(obj => {
                    expect(obj).to.have.all.keys('id', 'name', 'email', 'gender', 'status')

                });
            })

    })

    it.only('verify the post request', () => {
        function generateEmail() {
            let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
            let string = '';
            for (var ii = 0; ii < 15; ii++) {
                string += chars[Math.floor(Math.random() * chars.length)];
            }
            return string + '@gmail.com';
        }


        let payload = {
            "name": "BhV",
            "email": generateEmail(),
            "gender": "female",
            "status": "active"
        }

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v1/users',
            headers: {
                Authorization: "Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9"
            },
            body: payload

        }).then((response) => {
           // cy.log(response)
            expect(response.status).to.eq(201)
            return response.body.data.id

        })
        .then((userid) => {
                cy.request({
                    method: "GET",
                    url: `https://gorest.co.in/public/v1/users/${userid}`,
                    headers: {
                        Authorization: "Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9"
                    }
                }).then((response) => {
                    expect(response.status).to.equal(200)
                })

            })
    })

})












// create a user post ----> validate the status ....
// user create  take the id and hit get get to get into on single 
// get succ

// User cretes --- id ---pass next

