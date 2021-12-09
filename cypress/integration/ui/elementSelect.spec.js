describe('ways to select element in cypress',function(){

    it('selecting the element using css Selector',()=>{

        cy.visit('https://www.google.com/')
        cy.get('input[name="q"]').type('python')



    })
    
    it('selecting the element using  xpath',()=>{

        // cy.get('cssSelector')
        // cy.xpath('xpath')
        
        cy.visit('https://www.google.com/')
        cy.xpath('//input[@name="q"]').type('python')

        
    })
    it.only('selecting the element using text of html element',()=>{
        
        cy.visit('https://www.google.com/')
        cy.get('input[name="q"]').type('python')
        cy.contains('Google Search').click()
    })

})