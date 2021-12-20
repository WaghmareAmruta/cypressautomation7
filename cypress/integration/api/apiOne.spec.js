

describe('verify the GET api',()=>{


    it('verify the list of user and single user api',()=>{

        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then((res)=>{
            expect(res.status).to.equal(200)
            let a =res.body.data.find(function(el){
                return el.id == 7
            })
            return a
        }).then((obj)=>{

            cy.request({
                method:"GET",
                url:`https://reqres.in/api/users/${obj.id}`
            }).then((response)=>{

                response.body.data.to.have.property('email')

            })
            
        })
        
    })





})