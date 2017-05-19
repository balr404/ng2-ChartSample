import { Ng2ChartSamplePage } from './app.po';

describe('ng2-chart-sample App', () => {
  let page: Ng2ChartSamplePage;

  beforeEach(() => {
    page = new Ng2ChartSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
