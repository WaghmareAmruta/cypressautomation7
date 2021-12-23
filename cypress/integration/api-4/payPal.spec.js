// Get the secret ID and client ID
// Using client ID and secret ID , hit the post request to get the token 
// Hit the get order api with the get token 
// Validate the reponse


describe('validate the order paypal api',()=>{



    it('validate the order api',()=>{

        // Get the access token 

        cy.request({
            method:"POST",
            url:"https://api-m.sandbox.paypal.com/v1/oauth2/token",
            headers:{
                Authorization:"Basic QVRHZjMxRHRqQkN5VUMkJwSWFEYklPVTRhS0YwdzJKVGVfSngtOUJTRjV0eHBaWEtmUk5zT09Xam42MTg2cDE1VFQ2OXZvUWw6RU9iMXRTUzl4LWM1VTJya0ZnR0k4bXVORGwzUldiZ28tRGI4UWxYNjJxaWR1bk1NaWdDQkxPdHBycW1uQ290MUE0RmZTamoxUkNsVnhjeXg="
            },
            body:{
                grant_type:'client_credentials'
            },
            form:true

        }).then((response)=>{
            expect(response.status).to.equal(200)
            return response.body.access_token
        }).then((token)=>{

            cy.request({

                method:"POST",
                url:"https://api-m.sandbox.paypal.com/v2/checkout/orders",
                headers:{
                    "Authorization":`Bearer ${token}`,
                    "content-type":'application/json',
                },
                body:{
                    
                        "intent": "CAPTURE",
                        "purchase_units": [
                          {
                            "amount": {
                              "currency_code": "USD",
                              "value": "100.00"
                            }
                          }
                        ]
                      
                }

            }).then((response)=>{
                expect(response.status).to.eq(201)

            })


        })



    })

})
