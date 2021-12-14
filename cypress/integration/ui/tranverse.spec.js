describe('Validate various cypress tranveral methods', () => {

    it.skip('To get children of DOM elements, use the .children() command.', () => {
        // tranverse from a location 
        cy.visit('https://freshindiaorganics.com/')
        cy.get('ul[class="site-nav"]').children('li').should('have.length', 7)

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

    it('To get a DOM element at a specific index, use the .eq() command. Example One', () => {

        // tranverse from a location 
        cy.visit('https://www.cricbuzz.com/')
        cy.get('.cb-nav').eq(0).children('a').should('have.length', 5)
        cy.get('.cb-nav').eq(0).children('div').should('have.length', 8)
    })

    it('To get a DOM element at a specific index, use the .eq() command. Example Two', () => {

        // tranverse from a location 
        cy.visit('https://www.cricbuzz.com/')
        cy.get('.cb-nav').eq(0).children('a').should('have.length', 5)
        cy.get('.cb-nav').eq(0).children('div').should('have.length', 8)
    })

    it('To get a DOM element at a specific index, use the .eq() command. Example Three', () => {

        // tranverse from a location 
        cy.visit('http://automationpractice.com/index.php')
        cy.get('ul[class="sf-menu clearfix menu-content sf-js-enabled sf-arrows"]')
            .children('li').eq(2).click()
        cy.get('.category-name').should('be.visible')

    })

    it('To get the first DOM element within elements, use the .first() command.', () => {
        // tranverse from a location 
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.product_img_link').first().click()
        cy.xpath('//h1[@itemprop="name"]').should('be.visible')

    })

    it('To get the last DOM element within elements, use the .last() command.', () => {
        // tranverse from a location 
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.product_img_link').last().click({ force: true })
        cy.get('h1').should('be.visible')

        // DOM element ---not visible is current 
        // overlapped with other element
        //cy.xpath('//h1[@itemprop="name"]').should('be.visible')

    })

    it('To get DOM elements that match a specific selector, use the .filter() command.', () => {
        // tranverse from a location 
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-menu.clearfix.menu-content.sf-js-enabled.sf-arrows')
            .children('li').find('a').filter('a[title="Dresses"]').eq(0).click({ force: true })
        cy.get('.category-name').should('be.visible')

    })

    it('To get DOM elements that match a specific selector, use the .filter() command.', () => {
        // tranverse from a location 
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-menu.clearfix.menu-content.sf-js-enabled.sf-arrows')
            .children('li').find('a').filter('a[title="Dresses"]').eq(0).click({ force: true })
        cy.get('.category-name').should('be.visible')

    })

    it('To get descendant DOM elements of the selector, use the .find() command.', () => {
        // tranverse from a location 
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#homefeatured')
            .last()
            .find('li').should('have.length', 7)
    })

    it('To get the next sibling DOM element within elements, use the .next() command.', () => {
        // tranverse from a location 
        cy.visit('http://automationpractice.com/index.php')
        // cy.get('.toggle-footer').eq(1)
        // .children('li').first().next().should('contain','New products')
        cy.get('.toggle-footer').eq(1)
            .children('li').first().next().find('a').should('contain', 'New products')


    })

    it('To get the next sibling DOM element within elements, use the .next() command.', () => {
        // tranverse from a location 
        cy.visit('http://automationpractice.com/index.php')
        // cy.get('.toggle-footer').eq(1)
        // .children('li').first().next().should('contain','New products')
        cy.get('.toggle-footer').eq(1)
            .children('li').first().next().find('a').should('contain', 'New products')


    })

    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.', () => {
        // tranverse from a location 
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.toggle-footer').eq(1).children().first().nextAll()
            .should('have.length', '7')

    })

    // sibling .. next nextAll , nextUntil, prev prevAll , prevUntil

    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.', () => {
        // tranverse from a location 
        cy.visit('https://www.cricbuzz.com/')
        cy.get('#cb-main-menu').children().first()
            .nextUntil('a[title="Cricket Scorecard Archives"]')
            .should('have.length', '2')

    })

    it('To get the previous sibling DOM element within elements, use the .prev() command.', () => {
        // tranverse from a location 
        cy.visit('https://www.cricbuzz.com/')
        cy.get('a[title="Cricket Scorecard Archives"]').prev().should('have.text', 'Schedule')


    })

    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.', () => {
        // tranverse from a location 
        cy.visit('https://www.cricbuzz.com/')
        cy.get('a[title="Cricket Scorecard Archives"]').prevAll().should('have.length', 3)


    })


    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.', () => {
        // tranverse from a location 
        cy.visit('https://www.cricbuzz.com/')
        cy.get('a[title="Cricket Scorecard Archives"]').prevAll().should('have.length', 3)


    })

    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.', () => {
        // tranverse from a location 
        cy.visit('https://www.cricbuzz.com/')
        cy.get('a[title="Cricket Scorecard Archives"]')
            .prevUntil('a[title="Live Cricket Score"]').should('have.length', 1)


    })

    it('To get all sibling DOM elements of elements, use the .siblings() command.', () => {
        // tranverse from a location 
        cy.visit('https://www.cricbuzz.com/')
        cy.get('a[title="Cricket Scorecard Archives"]')
            .siblings().should('have.length', 12)


    })

    it('To get the closest ancestor DOM element, use the .closest() command.', () => {
        // tranverse from a location 
        cy.visit('https://www.cricbuzz.com/')
        //cy.get('#leaderboard').closest('div').should('have.class', 'container')
        cy.get('.cb-caret-down').first()
            .closest('div')
            .should('have.id', 'newsDropDown')

    })

    it('To remove DOM element(s) from the set of elements, use the .not() command.', () => {
        // tranverse from a location 
        cy.visit('https://www.cricbuzz.com/')
        cy.get('.cb-nav').children().not('.cursor-pointer').should('have.length', 7)


    })

    it('To get parent DOM element of elements, use the .parent() command.', () => {
        // tranverse from a location 
        cy.visit('https://www.cricbuzz.com/')
        cy.get('.cb-nav').parent().should('have.class', 'container')

    })

    it('To get parents DOM element of elements, use the .parents() command.', () => {
        // tranverse from a location 
        cy.visit('https://www.cricbuzz.com/')


    })

    it.only('To get parents DOM element of elements, use the .parents() command.', () => {
        // tranverse from a location 
        cy.visit('https://www.cricbuzz.com/')
        cy.get('.cb-caret-down').first().parents('nav').should('have.id', 'cb-main-menu')


    })



})