class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            middleNameField: '[name="middleName"]',
            lastNameField: '[name="lastName"]',
            employeeIdField: ':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
            otherIdField: ':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
            driverLicenseField: ':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
            licenseExpireDateField: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
            dateCloseButton: '.--close',
            nationalityButton: ':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon',
            maritalStatusButton: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon',
            firstSaveButton: ':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button',
            dateBirth: ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input',
            genderSelector: ':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input',
        }

        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName) 
    }

    fillEmployeeDetails(nickName, idNumber, driverLicense, expireDateLicense) {
        cy.get(this.selectorsList().employeeIdField).clear().type(nickName)
        cy.get(this.selectorsList().otherIdField).clear().type(idNumber)
        cy.get(this.selectorsList().driverLicenseField).clear().type(driverLicense)
        cy.get(this.selectorsList().licenseExpireDateField).clear().type(expireDateLicense)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    fillStatusDetails(dateOfBirth) {
        cy.get(this.selectorsList().nationalityButton).click()
        cy.get(':nth-child(27) > span').click()
        cy.get(this.selectorsList().maritalStatusButton).click()
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()
        cy.get(this.selectorsList().dateBirth).clear().type(dateOfBirth)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genderSelector).click()
    }

    saveForm() {
        cy.get(this.selectorsList().firstSaveButton).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
}

export default MyInfoPage