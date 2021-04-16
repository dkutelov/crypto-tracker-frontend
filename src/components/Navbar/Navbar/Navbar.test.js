import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import UserContext from '../../../context/userContext';

import Navbar from './Navbar';

describe('Navbar Component', () => {
  const state = {
    isAuthenticated: false,
  };
  it('Should match snapshot for non auth users', () => {
    const component = renderer.create(
      <UserContext.Provider value={{ state }}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </UserContext.Provider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  state.isAuthenticated = true;
  it('Should match snapshot for auth users', () => {
    const component = renderer.create(
      <UserContext.Provider value={{ state }}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </UserContext.Provider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
