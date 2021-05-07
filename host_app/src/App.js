import React, { useState } from 'react'
import './App.scss'
import Grid from '@material-ui/core/Grid'

import leftImage from './assets/images/Grupo-29995.svg'
import rightImage from './assets/images/Grupo-29996.svg'
import arrowDown from './assets/images/arrow-down.svg'
import forward from './assets/images/forward.svg'
import backward from './assets/images/backward.svg'
import planP from './assets/images/planP.svg'

import RadioGroup from './components/RadioGroup'

import { Paper } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
// import styled from 'styled-components'

// const Title = styled.p`
//   font-size: 1.5em;
//   text-align: center;
//   color: ${props => props.color || 'blue'};
// `

function Item(props) {
  return (
      <Paper className="planCard">
          <div className="planCard__section01">
            <img src={planP} alt="plan name"/>
            <h2>Plano P</h2>
          </div>

          <hr />

          <div className="planCard__section02">
            <span className="priceTop">
              <span className="dashedPrice">
                <p>R$ 431,64</p>
                <strong>R$ 302,15</strong>
              </span>
              <p>equivalente a</p>
            </span>

            <span className="priceMiddle">
              R$ <strong>8,39</strong>/mês*
            </span>

            <button>Contrate Agora</button>

            <span className="priceBottom">
              <strong>1 ano de Domínio Grátis</strong>
              <span>
                <p>economiza R$ 174,48</p>
                <span>40% OFF badge</span>
              </span>
            </span>
          </div>

          <hr />

          <div className="planCard__section03">
            <ul>
              <li>Para 1 site</li>
              <li>100 GB de Armazenamento</li>
              <li>Contas de E-mail Ilimitadas</li>
              <li>Criador de Sites Grátis</li>
              <li>Certificado SSL Grátis (https)</li>
            </ul>
          </div>
      </Paper>
  )
}

function App() {
  const [selected, setSelected] = useState('first')

  const items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!'
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!'
    }
  ]

  return (
    <div className="App">
      <nav>
        <img src='https://svgshare.com/i/X1s.svg' alt='hostgator' />
      </nav>

      <main className="mainContainer">
        <section className="mainContainer__content">
          <div className="background">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
              <path d="M-7.62,144.56 C161.11,154.44 316.87,131.73 501.97,145.55 L500.00,0.00 L0.00,0.00 Z"></path>
            </svg>
            <img src={arrowDown} alt='arrow down' />
          </div>

          <Grid container className="mainContent">
            <Grid item xs={3} className="sideImage">
              <img src={leftImage} alt='coffe table' />
            </Grid>

            <Grid item xs={6} className="details">
              <h2>Hospedagem de Sites</h2>
              <h1>Tenha uma hospedagem de sites estável e<br/> evite perder visitantes diariamente</h1>

              <ul>
                <li>99,9% de disponibilidade: seu site sempre no ar</li>
                <li>Suporte 24h, todos os dias</li>
                <li>Painel de Controle cPanel</li>
              </ul>
            </Grid>

            <Grid item xs={3} className="sideImage">
              <img src={rightImage} alt='user desk' />
            </Grid>
          </Grid>
        </section>

        <section className="mainContainer__plans">
          <p>Quero pagar a cada:</p>
          <div>
            <RadioGroup
              value="first"
              selected={selected}
              text="3 anos"
              onChange={setSelected}
            />
            <RadioGroup
              value="second"
              selected={selected}
              text="1 ano"
              onChange={setSelected}
            />

            <RadioGroup
              value="third"
              selected={selected}
              text="1 mês"
              onChange={setSelected}
            />
          </div>
        </section>

        <section className="mainContainer__carousel">
          <Carousel
            NextIcon={<img src={forward}/>}
            PrevIcon={<img src={backward}/>}
            navButtonsProps={{
              style: {
                backgroundColor: '#1D5297',
                height: 35,
                width: 35,
                margin: '0 4px'
              }
            }}
            autoPlay={false}
            animation="slide"
            // navButtonsAlwaysVisible
            navButtonsAlwaysInvisible
            indicators={false}
          >
            {items.map((item, i) => <Item key={i} item={item} />)}
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
