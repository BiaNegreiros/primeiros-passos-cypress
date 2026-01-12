class MenuPage {

    selectorsList() {
        const selectors = {
            myInfoButton: ':nth-child(6) > .oxd-main-menu-item > .oxd-text',
            performanceButton: ':nth-child(7) > .oxd-main-menu-item > .oxd-text',
        }

        return selectors
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

    accessPerformance(){
        cy.get(this.selectorsList().performanceButton).click()
    }
}

export default MenuPage