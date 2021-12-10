describe('Validate various cypress tranveral methods',()=>{
    
    it.skip('To get children of DOM elements, use the .children() command.',()=>{
        // tranverse from a location 
        cy.visit('https://freshindiaorganics.com/')
        cy.get('ul[class="site-nav"]').children('li').should('have.length',7)
        
    })

    // it.only('To get a DOM element at a specific index, use the .eq() command.',()=>{

    //     // tranverse from a location 
    //     cy.visit('https://freshindiaorganics.com/')
    //     cy.get('.hamburger-icon > .icon-nav').click()
    //     cy.wait(5000)
    //     cy.get('.site-nav > :nth-child(4)').click()
    //     cy.contains('All Groceries').click()
    //     //cy.wait(5000)
    //     cy.get('span[class="bd-title"] > span > a').should('have.text','Groceries')
    //     cy.get('span[class="bd-title"]').find('span').find('a').should('have.text','Groceries')
    // })

    it.only('To get a DOM element at a specific index, use the .eq() command.',()=>{

        // tranverse from a location 
        cy.visit('https://www.cricbuzz.com/')
        cy.get('.cb-nav').eq(0).children('a').should('have.length',5)
        cy.get('.cb-nav').eq(0).children('div').should('have.length',8)
    })

})