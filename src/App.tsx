import { useQuery } from 'react-query';
import CurrencyList from './components/CurrencyList';
import CurrencyConverter from './components/CurrencyConverter';
import { currencyRatesQueryKey } from './config';
import { Layout } from './styles/Layout';
import fetchCurrencyRates from './utils/services';
import { Currency } from './models/Currency';

const App: React.FC = () => {
  const date = new Date().toLocaleDateString();
  const { data, isLoading, error } = useQuery<Currency[], ErrorConstructor>(
    currencyRatesQueryKey,
    fetchCurrencyRates,
    { refetchOnWindowFocus: true });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong, please try again later...</div>;
  }

  if (!data || data.length < 1) {
    return <div>There are no currencies to display...</div>;
  }

  return (
    <Layout>
      <h1>Currencies to date: {date}</h1>
      <CurrencyConverter currencies={data} />
      <CurrencyList currencies={data} />
    </Layout>
  );
};

export default App;
