import React, { FC, useEffect, useState } from 'react';
import LogoImg from './logo.svg';
import './App.css';
import './assets/css/global.scss'
import Layout from './components/Layout';
import { ThemeContext } from './helpers/context';
import Contacts from './components/Contacts';
import { I18nextProvider } from 'react-i18next';
import i18n from './helpers/localization/i18next_settings';
import { ThemeProvider } from './helpers/providers/ThemeProvider';

const App: FC = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.classList.add(theme + '-mode');
    return () => {
      document.body.classList.remove(theme + '-mode');
    }
  }, [theme])
  const AboutMe = () => {
    return (
      <header className="App-header">
        <LogoImg className='App-logo' />
        <p>Цель: систематизировать уже имеющиеся знания и получить новые.</p>
        <p>Чем хочу овладеть: <s>миром</s> актуальными навыками по front-end</p>
        <p>Чем владею: HTML, CSS(SASS, LESS), JS(JQuery, React), Siebel CRM</p>
        <p>О себе: Поляков Андрей, 25.02.1994г.р., увлекаюсь автодиагностикой, Subaru. Работаю в Ak Bars Digital.</p>
      </header>
    )
  }
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <div className={'App'}>
          <Layout style={{ padding: '8px' }}>
          </Layout>
        </div>
        </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
