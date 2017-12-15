import { Untitled6Page } from './app.po';

describe('untitled6 App', () => {
  let page: Untitled6Page;

  beforeEach(() => {
    page = new Untitled6Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
