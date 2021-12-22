


//  Create the user 
//  Get the user by id 
//  Update the user by id 
//  Delete the user


describe('validate the complete scenario',()=>{

    it('validate the complete ascenario for user (create , retrice, update , delete)',()=>{
        let accessToken = "Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9"
        // create user
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
        
        cy.request({
            method:"POST",
            url:"https://gorest.co.in/public/v1/users",
            headers:{
                Authorization:accessToken
            },
            body:payload
        }).then((response)=>{
            expect(response.status).to.eq(201)
            return response.body.data.id
        })
        .then((userId)=>{

            cy.request({
                method:"GET",
                url:`https://gorest.co.in/public/v1/users/${userId}`,
                headers:{
                    Authorization:accessToken
                }
            }).then((response)=>{
                expect(response.status).to.eq(200)
                return response.body.data.id
            })
            .then((id)=>{
                cy.request({
                    method:"PUT",
                    url:`https://gorest.co.in/public/v1/users/${id}`,
                    headers:{
                        Authorization:accessToken
                    },
                    body:payload
                }).then((response)=>{
                    expect(response.status).to.eq(200)
                    return response.body.data.id
                }).then((ids)=>{

                    cy.request({
                        method:"DELETE",
                        url:`https://gorest.co.in/public/v1/users/${ids}`,
                        headers:{
                            Authorization:accessToken
                        }
                    }).then((response)=>{

                        expect(response.status).to.eq(204)

                    })



                })

            })




        })

        




    })




})