import { newE2EPage } from '@stencil/core/testing';

describe('ptc-profile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ptc-profile></ptc-profile>');

    const element = await page.find('ptc-profile');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the specified name', async () => {
    const page = await newE2EPage({ url: '/profile/joseph' });

    const profileElement = await page.find('ptc-root >>> ptc-profile');
    const element = profileElement.shadowRoot.querySelector('div');
    expect(element.textContent).toContain('Hello! My name is Joseph.');
  });

  // it('includes a div with the class "ptc-profile"', async () => {
  //   const page = await newE2EPage({ url: '/profile/joseph' });

  // I would like to use a selector like this above, but it does not seem to work
  //   const element = await page.find('ptc-root >>> ptc-profile >>> div');
  //   expect(element).toHaveClass('ptc-profile');
  // });
});
