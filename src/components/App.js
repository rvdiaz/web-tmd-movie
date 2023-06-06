import { ErrorContextProvider } from '../context/ErrorContext';
import { LoadingContextProvider } from '../context/LoadingContext';
import { MovieContextprovider } from '../context/MovieContext';
import { MovieWrapper } from './Wrapper/MovieWrapper';

function App() {
  return (
  <MovieContextprovider>
    <ErrorContextProvider>
      <LoadingContextProvider>
        <MovieWrapper/>
      </LoadingContextProvider>
    </ErrorContextProvider>
  </MovieContextprovider>
  );
}

export default App;
