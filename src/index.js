import { ThemeProvider } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store'
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'

import App from './App';
import { theme } from './theme';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const queryClient = new QueryClient()

root.render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <QueryClientProvider client={queryClient}>
                        <App />
                    </QueryClientProvider >
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </StrictMode>,
);