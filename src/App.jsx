import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import LoadingScreen from './components/common/LoadingScreen';
import getTheme from './styles/theme';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const WinCleaner = lazy(() => import('./pages/WinCleaner'));
const BrowserTools = lazy(() => import('./pages/BrowserTools'));
const DollarExchange = lazy(() => import('./pages/DollarExchange'));
const Contact = lazy(() => import('./pages/Contact'));

const queryClient = new QueryClient();

function AppContent() {
  const { isDark } = useTheme();
  const theme = getTheme(isDark ? 'dark' : 'light');

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wincleaner" element={<WinCleaner />} />
              <Route path="/browser-tools" element={<BrowserTools />} />
              <Route path="/dollar-exchange" element={<DollarExchange />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App; 