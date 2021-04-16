import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import CryptoList from './CryptoList';
import CryptoContext from '../../context/cryptoContext';

describe('Crypto List Component', () => {
  const items = [
    {
      id: 1,
      name: 'bitcoin',
      image: 'http://www.test.com/some-image.jpg',
      symbol: 'bitcoin',
      current_price: 123,
      high_24h: 125,
      low_24h: 121,
      price_change_percentage_24h: 5.25,
      total_volume: 123123,
    },
  ];

  it('Coin image should have correct src', () => {
    render(
      <CryptoContext.Provider value={items}>
        <BrowserRouter>
          <CryptoList searchTerm='' />
        </BrowserRouter>
      </CryptoContext.Provider>
    );

    expect(document.querySelector('img').src).toBe(
      'http://www.test.com/some-image.jpg'
    );
  });

  it('Should match snapshot', () => {
    const component = renderer.create(
      <CryptoContext.Provider value={items}>
        <BrowserRouter>
          <CryptoList searchTerm='' />
        </BrowserRouter>
      </CryptoContext.Provider>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
