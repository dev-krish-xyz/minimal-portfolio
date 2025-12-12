import { type FC } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import Portfolio from './components/Portfolio';

const App: FC = () => {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Portfolio />
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;