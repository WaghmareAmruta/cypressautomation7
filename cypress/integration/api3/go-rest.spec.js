describe('verify the sceanrio for go reset API', () => {


    function generateEmail() {
        let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        let string = '';
        for (var ii = 0; ii < 15; ii++) {
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return string + '@gmail.com';
    }

    let payload = {
        "name": "Poornima Ahluwalia",
        "email":generateEmail(),
        "gender": "female",
        "status": "inactive"
    }

    it('verify the get', () => {
        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v1/users",
            headers:{
                "Authorization":"Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9"
            }
        }).then(function(response){
            response.body.data.forEach(user => {
                expect(user).to.have.all.keys('id', 'name','email','gender','status')
            });

        })
       
    })

    it('verify the post', () => {
        cy.request({
            method:"POST",
            url:"https://gorest.co.in/public/v1/users",
            headers:{
                "Authorization":"Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9"
            },
            body:payload
        })        
    })

    it('verify the put', () => {
        // update the staus for all user
        
    })

    it('verify the Delete', () => {
        
    })

    it('updating then status for all users', () => {
    
        cy.getAPIData('GET','https://gorest.co.in/public/v1/users','4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9')
        .then(function(response){
            expect(response.status).to.eq(200)
            return response.body.data
        })
        .then(function(user){

            user.forEach(function(el){

                let payload = `{
                    "email":${el.email},
                    "name":${el.name},
                    "gender":${el.gender},
                    "status": "inactive"
                }`
                cy.getAPIData('GET',`https://gorest.co.in/public/v1/users/${el.id}`,'4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9',payload)


            })


        })


        
    })


    // run ==> create 




})


