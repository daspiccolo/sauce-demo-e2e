import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly successMessage: Locator;
    readonly errorMessage: Locator;
    readonly overviewTitle: Locator;
    readonly overviewProductName: Locator;
    readonly totalLabel: Locator;
    readonly cancelButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.successMessage = page.locator('[data-test="complete-header"]');
        this.errorMessage = page.locator('[data-test="error"]');
        this.overviewTitle = page.locator('[data-test="title"]');
        this.overviewProductName = page.locator('[data-test="inventory-item-name"]');
        this.totalLabel = page.locator('[data-test="total-label"]');
        this.cancelButton = page.locator('[data-test="cancel"]');
    }
    async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async continueCheckout() {
        await this.continueButton.click();
    }

    async finishCheckout() {
        await this.finishButton.click();
    }
    async cancelCheckout() {
        await this.cancelButton.click();
    }   
}