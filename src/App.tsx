import React, { FC, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/css/global.scss';
import { I18nextProvider } from 'react-i18next';
import i18n from './helpers/localization/i18next_settings';
import { ThemeProvider } from './helpers/providers/ThemeProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartPage, DashboardPage, HomePage, OrderPage, ProfilePage } from './pages';
import Header from './components/Header';
import { Navigation, PrivateRoute } from './components/Navigation';
import { Contacts } from './components/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { getError, setAppInit, setError } from './stores/sagaStore/slices/app';
import { ModalURL } from './components/Modal URL';
import useNotification from 'antd/es/notification/useNotification';

const App: FC = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);

  const [api, contextHolder] = useNotification();
  const openNotificationWithIcon = (msg: string) => {
    api.error({
      message: 'Ошибка',
      description: msg,
      placement: 'top',
      duration: 5,
    });
  };

  useEffect(() => {
    if (error?.message.length > 0) {
      openNotificationWithIcon(error.message);
      dispatch(
        setError({
          message: '',
          code: '',
        })
      );
    }
  }, [error, dispatch]);

  useEffect(() => {
    dispatch(setAppInit());
    console.log('%cМагазин готов к работе', 'background:green;color:white;padding:16px;border-radius:8px');
  }, [dispatch]);

  return (
    <div className="app-container">
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider>
            <div className="App">
              {contextHolder}
              <Contacts />
              <Header>
                <Navigation />
              </Header>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/orders"
                  element={
                    <PrivateRoute>
                      <OrderPage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <PrivateRoute>
                      <ProfilePage />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute adminMode>
                      <DashboardPage />
                    </PrivateRoute>
                  }
                />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
              <ModalURL />
            </div>
          </ThemeProvider>
        </I18nextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
