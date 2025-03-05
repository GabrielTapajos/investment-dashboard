import axios from 'axios';

const API_KEY_ALPHA_VANTAGE = 'your_alpha_vantage_api_key';
const API_KEY_COIN_GECKO = 'your_coin_gecko_api_key';

const getAlphaVantageData = async (symbol) => {
  const response = await axios.get(`https://www.alphavantage.co/query`, {
    params: {
      function: 'TIME_SERIES_DAILY',
      symbol: symbol,
      apikey: API_KEY_ALPHA_VANTAGE
    }
  });
  return response.data['Time Series (Daily)'];
};

const getCoinGeckoData = async (id) => {
  const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart`, {
    params: {
      vs_currency: 'usd',
      days: '30'
    }
  });
  return response.data.prices;
};

export const getFinancialData = async () => {
  const fiisData = await getAlphaVantageData('your_fiis_symbol');
  const cryptoData = await getCoinGeckoData('bitcoin');
  const stocksData = await getAlphaVantageData('your_stock_symbol');

  return {
    fiis: fiisData,
    crypto: cryptoData,
    stocks: stocksData
  };
};