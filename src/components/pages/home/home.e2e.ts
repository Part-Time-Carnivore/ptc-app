import { newE2EPage } from '@stencil/core/testing';

describe('ptc-home', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ptc-home></ptc-home>');

    const element = await page.find('ptc-home');
    expect(element).toHaveClass('hydrated');
  });

  it('contains a "Profile Page" button', async () => {
    const page = await newE2EPage();
    await page.setContent('<ptc-home></ptc-home>');

    const element = await page.find('ptc-home >>> button');
    expect(element.textContent).toEqual('Profile page');
  });
});
