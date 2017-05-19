import { PuuniPage } from './app.po';

describe('puuni App', () => {
  let page: PuuniPage;

  beforeEach(() => {
    page = new PuuniPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
