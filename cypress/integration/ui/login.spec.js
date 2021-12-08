describe('verify the login functionality',()=>{

    // cy
    // Cypress

    it('TC_01 verify the login functionality with valid credentials',()=>{
        
        // css  selector ---> tagName[attribute="value"]
        // <h1 id="one">Hello</h1>
        // cy.visit() --- to visit the url

        // Element select ----->

        // cy.get(`${css selector}`)
        // cy.contains(`Hello`)

         cy.visit('https://opensource-demo.orangehrmlive.com/')
         cy.get('input[id="txtUsername"]').type('Admin')
         cy.get('input[id="txtPassword"]').type('admin123')
         cy.get('input[id="btnLogin"]').click()
         cy.get('[href="http://www.orangehrm.com/"] > img').should('be.visible')



    })
    it('TC_01 verify the login functionality with invalid credentials',()=>{

         cy.visit('https://opensource-demo.orangehrmlive.com/')
         cy.get('input[id="txtUsername"]').type('Admin')
         cy.get('input[id="txtPassword"]').type('dmin123')
         cy.get('input[id="btnLogin"]').click()
         cy.get('#spanMessage').should('have.text','Invalid credentials')


        
    })





})

// describe('verify the login functionality',function(){
    
// })