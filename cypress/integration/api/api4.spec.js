// ------ list user of user api 
// ----->  search the id and valid
//-----> user that to hit another id
// ----> response 

describe('verify the GET api', () => {
    let payload = {
        "name": "morpheus",
        "job": "leader"
    }

    it('verify the list user and single user API', () => {

        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users",
            body:payload
        }).then((response)=>{
            //cy.log(response.body)
            expect(response.body).to.have.property('id')
            return response.body

        })
        .then(function(res){
            cy.log(res)
            cy.request({
                method:"GET",
                url:`https://reqres.in/api/users/${res.id}`
            }).then(function(response){
                expect(response.body.data.first_name).to.eq(payload['name'])
            })

        })

    })

})

// 6pm ist
// expect(1).to.eqls(1)
// expect(true).to.eqls(true)
// expect({age:12}).to.have.property('age',12)