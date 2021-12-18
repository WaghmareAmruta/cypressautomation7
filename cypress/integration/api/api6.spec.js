

describe('verify the api with Bearer token',()=>{
    it('verify the number of users',()=>{
        cy.request({
            method:"GET",
            url:'https://gorest.co.in/public/v1/users',
            headers:{
                Authorization:'Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9'
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data.length).to.eq(20)
            let el =  res.body.data.find(function(el){
                    return el.id == 1578
            })
            return el
        })

    })

    it.only('verify the number of users 2',()=>{
        cy.getAPIData('GET','https://gorest.co.in/public/v1/users')
        .then(function (res){
            expect(res.status).to.eq(200)
            expect(res.body.data.length).to.eq(20)
            return  res.body.data[0].id
        })
        .then((id)=>{
           cy.log(id)
           cy.getAPIData('GET',`https://gorest.co.in/public/v1/users/${id}`)
           .then((response)=>{
                expect(response.body.data).to.have.property('email')
           })

        })

    })

    it.only('verify the number of users 2',()=>{
        cy.getAPIData('GET','https://gorest.co.in/public/v1/users')
        .then(function (res){
            expect(res.status).to.eq(200)
            expect(res.body.data.length).to.eq(20)
            return  res.body.data
        })
        .then((arr)=>{

            arr.forEach(element => {
                cy.getAPIData('GET',`https://gorest.co.in/public/v1/users/${element.id}`)
                .then((response)=>{
                     expect(response.body.data).to.have.property('email')
                })
     
                
            });
           
          
        })

    })









})