import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import DisplayProfile from './DisplayProfile';

describe('Display Profile Component', () => {
  const profile = {
    avatarUrl: 'https://www.test.com/avatar.jpg',
    email: 'text@test.com',
    firstName: 'John',
    lastName: 'Doe',
  };

  it('Avatar should have proper src', () => {
    render(
      <BrowserRouter>
        <DisplayProfile profile={profile} />
      </BrowserRouter>
    );

    expect(document.querySelector('img').src).toBe(
      'https://www.test.com/avatar.jpg'
    );
  });

  it('Should match snapshot', () => {
    const component = renderer.create(
      <BrowserRouter>
        <DisplayProfile profile={profile} />
      </BrowserRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
