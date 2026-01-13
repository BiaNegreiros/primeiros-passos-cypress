import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
    
    myInfoPage.fillPersonalDetails(chance.first(), chance.name({ middle: true }), chance.last())
    myInfoPage.fillEmployeeDetails(chance.string(), chance.integer({min: 1, max: 200}), chance.integer({min: 500, max: 1000}), '2031-03-28')
    myInfoPage.fillStatusDetails('2001-04-19')
    myInfoPage.saveForm()

  })

})