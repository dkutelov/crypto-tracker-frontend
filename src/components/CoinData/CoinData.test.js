import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import CoinData from './CoinData';

const coinData = {
  name: 'bitcoin',
  image: {
    large:
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579>',
  },
  market_data: {
    current_price: {
      usd: 123,
    },
    sparkline_7d: {
      price: [
        56481.41661328395,
        57408.75242222494,
        57458.88762091019,
        57695.34737227642,
        57760.8556466419,
        57678.64518365409,
        57707.785635819404,
        57957.14832967089,
        57739.52846765616,
        57645.28777969739,
        57668.90103712901,
        57925.518780866594,
        58065.644024815316,
        58289.540464922866,
        57998.39141848117,
        57975.0683898623,
        58035.13247752884,
        58193.72385394534,
        58029.163084181775,
        57950.2201089116,
        57955.70221849897,
        57806.29874959166,
        57942.86929554848,
        58520.32328504297,
        58563.585721537915,
        58466.298303851705,
        58471.52968662805,
        58358.69990997884,
        58242.12811112787,
        58206.08504768155,
        58408.94696915119,
        58349.03086321498,
        58390.692099922046,
        58338.14040696499,
        58318.33689020226,
        58057.37194756994,
        58136.267623707194,
        58089.16926938455,
        58365.75240392538,
        58547.140060133665,
        59243.51830240575,
        60865.80211839993,
        60861.90087053184,
        60598.76611318025,
        60485.64812054706,
        60477.923339716515,
        60711.14001578309,
        60567.14011236432,
        60551.295466289586,
        60183.81465738429,
        60409.340168074086,
        60314.64432505629,
        60221.75940319549,
        60179.80103929574,
        60004.55113714745,
        59922.16314354235,
        59635.62300723821,
        58625.10786517287,
        59069.16299202304,
        59181.335951811874,
        59787.312335644245,
        60185.8900059472,
        60442.84904777686,
        60430.33241614489,
        60269.76780700085,
        59949.479427035345,
        59706.32610710421,
        59771.34923376124,
        59697.16166362463,
        60015.04874920584,
        59639.59835223458,
        59601.779637089545,
        59761.77431713581,
        59667.55860210892,
        59402.940555124434,
        59595.030666435865,
        59745.43851682953,
        59551.85521671423,
        59835.72756728276,
        59854.873512943836,
        59685.26327921007,
        59572.98349413053,
        59583.91527079244,
        60062.539344026925,
        60076.17415341904,
        59792.177987949384,
        59952.45313123375,
        59671.33641024264,
        60384.74198231349,
        60227.06657322482,
        60168.26037525915,
        60742.590216002216,
        60774.26126925519,
        60690.221583559236,
        60213.3914743032,
        59765.58779544893,
        60262.03873758763,
        60421.56215511043,
        60368.170420026836,
        59990.25406072179,
        60068.50244176861,
        60021.169617286636,
        59774.818947756095,
        59977.92378409435,
        60062.1709317423,
        60152.51039457572,
        60034.2485973507,
        60091.49024165346,
        59896.1663501267,
        60442.0321255465,
        60809.02650159209,
        60939.81835575613,
        60476.27462077217,
        60560.307447294224,
        60775.161006055256,
        60594.71123244162,
        61021.62540207804,
        62580.303596391575,
        62924.114183950514,
        62682.237905528804,
        62960.57530761367,
        62955.34781321568,
        62806.288093028794,
        62950.78423138996,
        63539.782572281576,
        63100.07575222822,
        63321.88737608773,
        63031.16624577411,
        62948.667638845785,
        63130.73769939548,
        63175.34737507455,
        63233.94854744293,
        63576.676041048275,
        63334.40588164744,
        63449.585349768306,
        63178.856542508394,
        63721.49339192109,
        64158.54880023529,
        64378.60148402156,
        64594.9938985327,
        64445.541033586225,
        64071.599782174315,
        63877.83521907724,
        64155.38462492383,
        64495.51679282642,
        64418.566179872054,
        63621.32220454317,
        63085.16440618572,
        62963.650973380274,
        63511.26398577948,
        62563.211836785005,
        62179.80898790308,
        62020.81382429886,
        62700.909613902644,
        62697.99293559072,
        62945.15635224032,
        62807.12323259299,
        62926.23452072718,
        62998.519267321375,
        62901.519002613466,
        63077.162755288555,
        63071.56719826141,
        63363.1196008427,
        62866.872299208044,
        62914.37275191379,
        62715.40749459185,
        62592.451564514886,
        62320.26566265919,
      ],
    },
  },
  description: {
    en: 'Lorem ipsum dolor sit amet ...',
  },
  categories: ['crypto', 'coins'],
};

describe('CoinData Component', () => {
  it('Should display crypto name', () => {
    render(
      <BrowserRouter>
        <CoinData coinData={coinData} />
      </BrowserRouter>
    );

    expect(document.querySelector('h2').textContent).toBe('bitcoin');
  });
});