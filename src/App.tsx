import React, { FC, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/css/global.scss'
import { I18nextProvider } from 'react-i18next';
import i18n from './helpers/localization/i18next_settings';
import { ThemeProvider } from './helpers/providers/ThemeProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartPage, DashboardPage, HomePage, ProfilePage } from './pages';
import Header from './components/Header';
import { ModalURL } from './components/Modal URL';
import { ProductProvider } from './helpers/providers/ProductProvider';
import { globalStore } from './stores';
import { Provider } from 'react-redux';
import { Navigation, PrivateRoute } from './components/Navigation';
import { Contacts } from './components/Contacts';
import { useSelector } from 'react-redux';
import { authController } from './stores/globalStore/auth';
import { getProfile } from './stores/globalStore/profile';
import { useDispatch } from 'react-redux';
import { toggleApp } from './stores/globalStore/globalStore';
const App: FC = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(toggleApp(true))
    console.log('%cМагазин готов к работе', 'background:green;color:white;padding:16px;border-radius:8px')
  }, [])
  return (
    <div className='app-container'>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider>
            <div className={'App'}>
              <ProductProvider>
                <Contacts />
                <Header>
                  <Navigation />
                </Header>
                <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/profile' element={
                    <PrivateRoute>
                      <ProfilePage />
                    </PrivateRoute>} />
                  <Route path='/dashboard' element={
                    <PrivateRoute adminMode>
                      <DashboardPage />
                    </PrivateRoute>} />
                  <Route path='/cart' element={<CartPage />} />
                </Routes>
                <ModalURL />
              </ProductProvider>
            </div>
          </ThemeProvider>
        </I18nextProvider>
      </BrowserRouter>
    </div >
  );
}

export default App;
