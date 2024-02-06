import React, { FC, useCallback, useEffect, useState } from 'react';
import LogoImg from './logo.svg';
import './App.css';
import './assets/css/global.scss'
import Layout from './components/Layout';
import { ThemeContext } from './helpers/context';
import Contacts from './components/Contacts';
import { I18nextProvider } from 'react-i18next';
import i18n from './helpers/localization/i18next_settings';
import { ThemeProvider } from './helpers/providers/ThemeProvider';
import ProductList from './components/Product List';
import { Product, createRandomProduct } from './homeworks/ts1/3_write';
import Collapse from './components/Collapse';
import Button from './components/ButtonOtus';
import RangeSlider from './components/Range Slider';
const App: FC = () => {
  const createRandomProductArr = useCallback(() => {
    const arr: Product[] = []
    for (let i = 0; i < 1; i++) {
      arr.push(createRandomProduct(new Date().toISOString()))
    }
    return arr
  }, [])
  const [isOpen, setIsOpen] = useState(false)

  const [sliderValue, setSliderValue] = useState(57)

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
    <div className='app-container'>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <div className={'App'}>
            <Contacts />
            <Layout style={{ padding: '8px' }}>

              <Collapse opened={isOpen}>
                <ProductList initialProducts={createRandomProductArr()} />
              </Collapse>
              <Button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Скрыть продукты' : 'Показать продукты'}</Button>
              <div style={{ marginTop: '15px', height:'300px'}}>
                <RangeSlider min={0} max={330} orientation='vertical' value={sliderValue} setValue={setSliderValue}/>
                <RangeSlider min={0} max={330} orientation='horizontal'  value={sliderValue} setValue={setSliderValue}/>
              </div>
            </Layout>
          </div>
        </ThemeProvider>
      </I18nextProvider>
    </div>
  );
}

export default App;
