import React, { FC, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/css/global.scss'
import Contacts from './components/Contacts';
import { I18nextProvider } from 'react-i18next';
import i18n from './helpers/localization/i18next_settings';
import { ThemeProvider } from './helpers/providers/ThemeProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthPage, CartPage, DashboardPage, HomePage, ProfilePage } from './pages';
import Header from './components/Header';
import { ModalURL } from './components/Modal URL';
import { ProductProvider } from './helpers/providers/ProductProvider';
const App: FC = () => {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider>
            <div className={'App'}>
              <ProductProvider>
                <Contacts />
                <Header />
                <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/auth' element={<AuthPage />} />
                  <Route path='/profile' element={<ProfilePage />} />
                  <Route path='/dashboard' element={<DashboardPage />} />
                  <Route path='/cart' element={<CartPage />} />
                </Routes>
                <ModalURL />
              </ProductProvider>
            </div>
          </ThemeProvider>
        </I18nextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
