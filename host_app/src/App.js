import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Grid } from '@material-ui/core'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import './App.scss'
import { arrowDown, leftImage, rightImage, hostgatorLogo } from './assets/images'

import RadioGroup from './components/RadioGroup'
import Card from './components/Card'

import { useWindowSize } from './helpers'
import { RequestPlans } from './services'
import { Responsive } from './constants'

const scrollToRef = (ref) => window.scrollTo(0, ref?.current?.offsetTop || 0)

function App() {
  const [selected, setSelected] = useState('3 anos')

  const plansSection = useRef(null)
  const executeScroll = () => scrollToRef(plansSection)

  const currentDevice = useWindowSize()

  const dispatch = useDispatch()
  const fullState = useSelector((state) => state)

  useEffect(() => {
    const products = ['product_5', 'product_6', 'product_335']
    RequestPlans(products).then(data => {
      dispatch({
        type: 'SET_REQUESTED_PRODUCTS',
        payload: data
      })
    })
  }, [])

  return (
    <div className="App">
      <header>
        <a href="https://www.hostgator.com.br/" target="_blank" rel="noreferrer">
          <img src={hostgatorLogo} alt='hostgator' />
        </a>
      </header>

      <main className="main-container">
        <section className="main-content">
          <div className="background">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
              <path d="M-7.62,144.56 C161.11,154.44 316.87,131.73 501.97,145.55 L500.00,0.00 L0.00,0.00 Z"></path>
            </svg>
            <img src={arrowDown} alt='arrow down' onClick={() => executeScroll()}/>
          </div>

          <Grid container className="main-middle-content">
            <Grid item xs={3} className="side-image">
              <img src={leftImage} alt='coffe table' />
            </Grid>

            <Grid item xs={currentDevice === 'web' ? 6 : 12} className="details">
              <h2>Hospedagem de Sites</h2>
              <h1>Tenha uma hospedagem de sites estável e<br/> evite perder visitantes diariamente</h1>

              <ul>
                <li>99,9% de disponibilidade: seu site sempre no ar</li>
                <li>Suporte 24h, todos os dias</li>
                <li>Painel de Controle cPanel</li>
              </ul>
            </Grid>

            <Grid item xs={3} className="side-image">
              <img src={rightImage} alt='user desk' />
            </Grid>
          </Grid>
        </section>

        <section className="main-plans" ref={plansSection}>
          <p>Quero pagar a cada:</p>
          <RadioGroup
            selected={selected}
            onChange={setSelected}
            options={['3 anos', '1 ano', '1 mês']}
          />
        </section>

        <section className="main-carousel">
          <Carousel
            containerClass="carousel-container"
            itemClass="carousel-item-padding"
            draggable
            renderButtonGroupOutside={false}
            responsive={Responsive}
            slidesToSlide={1}
            swipeable
            arrows
            keyBoardControl
          >
            {Object.keys(fullState?.products).map(product => (
              <Card
                key={product.id}
                data={fullState.products[product]}
                selected={selected}
                discount={0.40}
              />)
            )}
          </Carousel>
        </section>

        <footer>
          <a href="">*Confira as condições da promoção</a>
        </footer>
      </main>
    </div>
  )
}

export default App
