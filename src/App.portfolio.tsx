import { type FC } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Portfolio from './components/Portfolio';

const App: FC = () => {
  return (
    <ErrorBoundary>
      <Portfolio />
    </ErrorBoundary>
  );
};

export default App;