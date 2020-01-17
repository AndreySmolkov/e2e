import { Base } from "../Base"
import { pages } from "../pages"
import { Page } from "puppeteer"
import  camelcase  from 'lodash.camelcase'

class Footer extends Base{
    public contactUs = { selector:".about-contact a", PageToGo: pages.ContactPage }
    constructor(public page: Page){
      super()
    }

    async clickAndGo(buttonName: string): Promise<any>{
      const currentBtn = this[camelcase(buttonName)]
      const { selector, PageToGo } = currentBtn
      return this.clickAndNavigate(this.page, selector, PageToGo)
    }
}

export { Footer }