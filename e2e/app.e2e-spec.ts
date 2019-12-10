import { Proyect1Page } from './app.po';

describe('proyect1 App', function() {
  let page: Proyect1Page;

  beforeEach(() => {
    page = new Proyect1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
