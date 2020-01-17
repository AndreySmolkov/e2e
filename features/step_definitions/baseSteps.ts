import { expect } from "chai";
import { When } from "cucumber";
import { pages } from '../pages/pages'

When(/^I open (.*) page by direct url$/,
  async function(pageName: string) {
    const expectedPage = `${pageName}Page`
    this.currentPage = new pages[expectedPage]();
    await this.currentPage.open(this.browser);
    expect(
      await this.currentPage.isPageOpened(),
      `${pageName} page is not opened, using direct url`,
    ).to.be.true;
  }
);

When(/^I click on (header|footer) "(Contact us|Follow us)" button and go to (.*) page$/,
  async function(block: string, button: string, pageName: string) {
    this.currentPage = await this.currentPage[block].clickAndGo(button)
    expect(
      await this.currentPage.isPageOpened(),
      `${pageName} page is not opened, using direct url`,
    ).to.be.true;
  }
);
