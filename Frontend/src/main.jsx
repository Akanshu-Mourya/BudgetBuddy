import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx'
import { Toaster } from './Components/ui/sonner';
import { Provider } from 'react-redux'
import store from './redux/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { AuthProvider } from './redux/auth';

const persistor = persistStore(store);
createRoot(document.getElementById('root')).render(
  <AuthProvider >
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
      <Toaster />
    </StrictMode>
  </AuthProvider>
)


