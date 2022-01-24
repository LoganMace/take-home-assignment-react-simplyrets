import { Header } from './components/Header/Header';
import route from './routes';

const App = () =>  {
  return (
    <>
      <Header />
      {route}
    </>
  );
}

export default App;
