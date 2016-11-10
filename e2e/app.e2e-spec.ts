import { UsingAngularCliAndServicesPage } from './app.po';

describe('using-angular-cli-and-services App', function() {
  let page: UsingAngularCliAndServicesPage;

  beforeEach(() => {
    page = new UsingAngularCliAndServicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
