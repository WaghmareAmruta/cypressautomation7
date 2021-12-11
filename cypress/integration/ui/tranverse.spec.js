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

    it('To get a DOM element at a specific index, use the .eq() command. Example One',()=>{

        // tranverse from a location 
        cy.visit('https://www.cricbuzz.com/')
        cy.get('.cb-nav').eq(0).children('a').should('have.length',5)
        cy.get('.cb-nav').eq(0).children('div').should('have.length',8)
    })
    
    it('To get a DOM element at a specific index, use the .eq() command. Example Two',()=>{

        // tranverse from a location 
        cy.visit('https://www.cricbuzz.com/')
        cy.get('.cb-nav').eq(0).children('a').should('have.length',5)
        cy.get('.cb-nav').eq(0).children('div').should('have.length',8)
    })

    it('To get a DOM element at a specific index, use the .eq() command. Example Three',()=>{

        // tranverse from a location 
        cy.visit('http://automationpractice.com/index.php')
        cy.get('ul[class="sf-menu clearfix menu-content sf-js-enabled sf-arrows"]')
        .children('li').eq(2).click()
        cy.get('.category-name').should('be.visible') 
        
    })

    it('To get the first DOM element within elements, use the .first() command.',()=>{
        // tranverse from a location 
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.product_img_link').first().click()
        cy.xpath('//h1[@itemprop="name"]').should('be.visible')
        
    })

    it('To get the last DOM element within elements, use the .last() command.',()=>{
        // tranverse from a location 
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.product_img_link').last().click({force:true})
        cy.get('h1').should('be.visible')

        // DOM element ---not visible is current 
        // overlapped with other element
        //cy.xpath('//h1[@itemprop="name"]').should('be.visible')
        
    })

    it('To get DOM elements that match a specific selector, use the .filter() command.',()=>{
        // tranverse from a location 
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-menu.clearfix.menu-content.sf-js-enabled.sf-arrows')
        .children('li').find('a').filter('a[title="Dresses"]').eq(0).click({force: true})
        cy.get('.category-name').should('be.visible')
          
    })

    it('To get DOM elements that match a specific selector, use the .filter() command.',()=>{
        // tranverse from a location 
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-menu.clearfix.menu-content.sf-js-enabled.sf-arrows')
        .children('li').find('a').filter('a[title="Dresses"]').eq(0).click({force: true})
        cy.get('.category-name').should('be.visible')
          
    })

    it.only('To get descendant DOM elements of the selector, use the .find() command.',()=>{
        // tranverse from a location 
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#homefeatured')
        .last()
        .find('li').should('have.length',7)
    })

    it.only('To get the next sibling DOM element within elements, use the .next() command.',()=>{
        // tranverse from a location 
        cy.visit('http://automationpractice.com/index.php')
        // cy.get('.toggle-footer').eq(1)
        // .children('li').first().next().should('contain','New products')

        cy.get('.toggle-footer').eq(1)
        .children('li').first().next().find('a').should('contain','New products')

        
    })

  






})