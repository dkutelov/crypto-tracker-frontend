import { useEffect, useState, useContext } from 'react';
import CoinData from '../../components/CoinData/CoinData';

import Layout from '../../components/Layout/Layout';
import Loading from '../../components/Loading/Loading';

import ErrorContext from '../../context/errorContext';
import * as cryptoService from '../../services/cryptoService';

const CoinDetail = ({ match }) => {
  const id = match.params.name;
  const [coinData, setCoinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { _, errorDispatch } = useContext(ErrorContext);

  useEffect(() => {
    cryptoService
      .getOne(id)
      .then((data) => {
        setCoinData(data);
        setLoading(false);
      })
      .catch((err) => {
        errorDispatch({
          type: 'SET_ERROR_MESSAGE',
          payload: 'Something went wrong! Try again!',
        });
        setLoading(false);
        console.log(err);
      });
  }, [id, errorDispatch]);

  return (
    <Layout>{loading ? <Loading /> : <CoinData coinData={coinData} />}</Layout>
  );
};

export default CoinDetail;
