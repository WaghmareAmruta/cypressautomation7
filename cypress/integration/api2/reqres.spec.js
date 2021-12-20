describe('verify the post request', () => {

    it('verify the post', () => {
        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users" ,
            body:{
                "name": "morpheus",
                "job": "leader"
            }

        }).then(function(response){
                expect(response.status).to.equal(201)
                expect(response.body).to.have.property('createdAt')  
        })
    })

    it('verify the put', () => {
        cy.request({
            method:"PUT",
            url:"https://reqres.in/api/users/1" ,
            body:{
                "name": "chinmay",
                "job": "tester"
            }

        }).then(function(response){
                expect(response.status).to.equal(200)
                expect(response.body).to.have.property('updatedAt')  
        })
    })

    it('verify the DELETE', () => {
        cy.request({
            method:"DELETE",
            url:"https://reqres.in/api/users/1"
           
        }).then(function(response){
                expect(response.status).to.equal(204)
               
        })
    })





})

// [
//     {
//         "Request Body": "{\"name\":\"morpheus\",\"job\":\"leader\"}",
//         "Request Headers": {
//             "Connection": "keep-alive",
//             "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/9.1.1 Chrome/94.0.4606.81 Electron/15.2.0 Safari/537.36",
//             "accept": "*/*",
//             "accept-encoding": "gzip, deflate",
//             "content-type": "application/json",
//             "content-length": 34
//         },
//         "Request URL": "https://reqres.in/api/users",
//         "Response Body": {
//             "name": "morpheus",
//             "job": "leader",
//             "id": "112",
//             "createdAt": "2021-12-20T12:41:29.893Z"
//         },
//         "Response Headers": {
//             "date": "Mon, 20 Dec 2021 12:41:30 GMT",
//             "content-type": "application/json; charset=utf-8",
//             "content-length": "84",
//             "connection": "keep-alive",
//             "x-powered-by": "Express",
//             "access-control-allow-origin": "*",
//             "etag": "W/\"54-Q+zAfzbulVuwNc+gOU5m8Qx8XfU\"",
//             "via": "1.1 vegur",
//             "cf-cache-status": "DYNAMIC",
//             "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
//             "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=u%2FhCj8V9m7JZHWga8fp1sjz3CL8BPgfpw9FHwpN8x83bXAJn4sp%2F0k%2FuVd1%2FupOuTiMZjBO%2B%2F6cq8TAwt1Bxkd5UvFWdSO8r2BrJVqCzGB12PwfT%2FAhZ%2BBGw7N4%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
//             "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
//             "server": "cloudflare",
//             "cf-ray": "6c08f1f78d3e2dfe-BOM",
//             "alt-svc": "h3=\":443\"; ma=86400, h3-29=\":443\"; ma=86400, h3-28=\":443\"; ma=86400, h3-27=\":443\"; ma=86400"
//         },
//         "Response Status": 201
//     }
// ]