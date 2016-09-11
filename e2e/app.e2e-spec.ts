import { DoodoodleNg2Page } from './app.po';

describe('doodoodle-ng2 App', function() {
  let page: DoodoodleNg2Page;

  beforeEach(() => {
    page = new DoodoodleNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
