import {expect, test} from "@playwright/test"
import { RegisterPage } from "../pages/register-page"

test.describe("Test Register Page", async() =>{
    
    test("Verify register successfully", async ({page}) =>{
        const registerPage = new RegisterPage(page);

        await test.step("Navigate to Register Page", async() =>{
        await registerPage.navigateToRegisterPage();
        })

        await test.step("Fill registration information", async() =>{
            await registerPage.fillUsername("tester1");
            await registerPage.fillEmail("tester1@gmail.com");
            await registerPage.selectGender("male");
            await registerPage.selectHobby(["reading", "traveling"]);
            await registerPage.selectInterest(["Technology", "Science"]);
        })

        await test.step("Click on Register button", async() =>{
            await registerPage.clickOnRegisterButton();
        })
        // await page.pause();

    })

    // test("Verify Edit registration infomation", async({page})=>{

    // })

    test("Verify Delete registration infomation", async({page})=>{      
        const registerPage = new RegisterPage(page);

        await test.step("Navigate to Register Page", async() =>{
        await registerPage.navigateToRegisterPage();
        })

        await test.step("Fill registration information", async() =>{
            await registerPage.fillUsername("tester1");
            await registerPage.fillEmail("tester1@gmail.com");
            await registerPage.selectGender("male");
            await registerPage.selectHobby(["reading", "traveling"]);
            await registerPage.selectInterest(["Technology", "Science"]);
        })

        await test.step("Click on Register button", async() =>{
            await registerPage.clickOnRegisterButton();
        })
    })
})

