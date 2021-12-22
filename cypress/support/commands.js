// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

// secret ID , clientID ------> token -----> authorization
Cypress.Commands.add('getAPIData', (method,token,url, body) => {
    // get and delete
    if (!body) {
        cy.request({
            method: method,
            url: url,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
    else if(body){

        // post and put
        cy.request({
            method: method,
            url: url,
            headers: {
                Authorization: `Bearer ${token}`
            },
            body:body
        })

    }


})


Cypress.Commands.add('ApiCall',(accessToken,method,url,payload,param)=>{

    if(!payload){
        cy.request({
            method: method,
            url:url,
            headers: {
                Authorization: accessToken
            }
        })

        // either the get or delete request
    }
    else if(payload && !param){
        //post
        cy.request({
            method:method,
            url:url,
            headers: {
                Authorization: accessToken
            },
            body: payload
        })


    }
    else if(param){
        // GET and DELETE for UI id 
        cy.request({
            method: method,
            url:url+`/${param}`,
            headers: {
                Authorization: accessToken
            }
        })

    }

    else if(param && payload){
        cy.request({
            method:method,
            url:url+`/${param}`,
            headers: {
                Authorization: accessToken
            },
            body: payload
        })
    }

})












//  Once  the build is ready to test 
// we will execute testcases , if there is 
// difference between  what is expected , i will report the 
//bug and  simultaneously confirm it with developer ..


// The bug in assigned state is assign back for validation to qa
// once the bug is fixed i will mark it as close , 
// if re-open i will provide more deatails reassign to developer


// Developer ----->

// user story ------>


// requirement --- cope ----15 - 2
// datatest --
// testcase ---
// utitlity 
// stub mocking 
// regression
// more feature


//