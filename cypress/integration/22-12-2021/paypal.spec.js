describe('validate the order paypal api',()=>{



    it('validate the order api',()=>{

        // Get the access token 

        cy.request({
            method:"POST",
            url:"https://api-m.sandbox.paypal.com/v1/oauth2/token",
            headers:{
                Authorization:"Basic QVZmVNjRzcDVWFpwNnM0SUFwWmhBeFI5LU1rUldqeW80NEtDOTNvOUYtQUczc3RqNEpfMkc6RUFtbzRMSEhTWHZldmRPbVFENG55WWpOSnN3SUtYTHR0TEVTR012eHlBQlM5QXcwN2R4UlhtSGNZVDlqaDFWREFjeTc5YlhrSG1ZTnpETU0="
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