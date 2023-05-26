import { AppProvider } from './providers/AppProvider';
import AppLayout from './layout/AppLayout';
import { AppRoute } from './routes/AppRoute';

export const App = () => (
  <AppProvider>
    <AppLayout>
      <AppRoute />
    </AppLayout>
  </AppProvider>
);
