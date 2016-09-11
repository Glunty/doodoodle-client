import { browser, element, by } from 'protractor/globals';

export class DoodoodleNg2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-route h1')).getText();
  }
}
