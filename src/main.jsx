import React from 'react';
import ReactDOM from 'react-dom/client';
import { route } from './route';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import { AuthProvider } from './context/AuthContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <RouterProvider router={route}></RouterProvider>
      </Provider>
    </AuthProvider>
  </React.StrictMode >
)
