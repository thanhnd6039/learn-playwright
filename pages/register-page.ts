import { Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class RegisterPage extends BasePage {
    xpathUsername: string = "//*[@id='username']";
    xpathEmail: string = "//*[@id='email']";
    xpathReadingHobby: string = "//*[@id='reading']";
    xpathInterest: string = "//*[@id='interests']";
    xpathRegisterButton: string = "//*[@type='submit']";

    constructor(page: Page){
        super(page)
    }

    async navigateToRegisterPage(){
        await this.navigateTo("https://material.playwrightvn.com/01-xpath-register-page.html");
    }

    async fillUsername(username: string){
        await this.page.locator(this.xpathUsername).fill(username);
    }

    async fillEmail(email: string){
        await this.page.locator(this.xpathEmail).fill(email);
    }

    async selectGender(gender: string){
        const xpathGender: string = `//*[@id='${gender}']`;
        await this.page.locator(xpathGender).check();
    }

    async selectHobby(hobbies: string[]){
        for(const hobby of hobbies){
            const xpathHobby: string = `//*[@id='${hobby}']`;
            let isHobbyChecked = await this.page.locator(xpathHobby).isChecked();           
            if(isHobbyChecked == false){
                await this.page.locator(xpathHobby).check();
            }
        }
    }

    async selectInterest(interests: string[]){
        await this.page.locator(this.xpathInterest).selectOption(interests)
    }

    async clickOnRegisterButton(){
        await this.page.locator(this.xpathRegisterButton).click();
    }

    // async deleteRegistrationInformation(){
    //     const xpathDeleteButton: string = 
    // }


}