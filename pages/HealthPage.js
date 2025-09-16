import BasePage from '../utils/BaseClass.js';
import { HEALTH_CARE_PAGE_ELEMENTS } from '../locators/HealthCareElements.js';
import { expect } from '@playwright/test';
import { generateFutureDatetimeString } from '../utils/function-helpers.js';


export class HealthPage extends BasePage {
  constructor(page) {
    super(page);
    this.welcomeMessage = page.locator(HEALTH_CARE_PAGE_ELEMENTS.welcomeMessage);
    this.logoutButton = HEALTH_CARE_PAGE_ELEMENTS.logoutButton(page);
    this.findDoctorsTab     = HEALTH_CARE_PAGE_ELEMENTS.findDoctorsTab(page);
    this.myAppointmentsTab  = HEALTH_CARE_PAGE_ELEMENTS.myAppointmentsTab(page);
    this.bookAppointmentButton = HEALTH_CARE_PAGE_ELEMENTS.bookAppointmentButton(page);
    this.notesTextarea = page.locator(HEALTH_CARE_PAGE_ELEMENTS.notesTextarea);
    this.datetimeInput = page.locator(HEALTH_CARE_PAGE_ELEMENTS.datetimeInput);
    this.yourAppointmentsHeader = HEALTH_CARE_PAGE_ELEMENTS.yourAppointmentsHeader(page);
    this.finalBookAppointmentButton = HEALTH_CARE_PAGE_ELEMENTS.finalBookAppointmentButton(page);



  }

 async assertPageLoaded() {
  await expect(this.welcomeMessage).toBeVisible();
  await expect(this.logoutButton).toBeVisible();
}

 async assertCriticalUIVisible() {
    await expect(this.findDoctorsTab).toBeVisible();                
    await expect(this.myAppointmentsTab).toBeVisible();             
    await expect(this.bookAppointmentButton.first()).toBeVisible(); 
  }

   async assertYourAppointmentsVisible() {
    await expect(this.yourAppointmentsHeader).toBeVisible({ timeout: 15_000 });
    await expect(this.yourAppointmentsHeader).toHaveText(/Your Appointments/i);
  }

 async bookAppointmentFlow(text) {
    const formattedDate = generateFutureDatetimeString();

    await this.bookAppointmentButton.nth(0).click();
    await this.datetimeInput.fill(formattedDate);
    await this.fill(this.notesTextarea, text);
    await this.click(this.finalBookAppointmentButton);

   
    await this.assertYourAppointmentsVisible();
  }
}