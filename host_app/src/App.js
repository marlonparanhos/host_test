import React from 'react'
import './App.scss'
import Grid from '@material-ui/core/Grid'
import leftImage from './assets/images/Grupo-29995.svg'
import rightImage from './assets/images/Grupo-29996.svg'
import arrowDown from './assets/images/arrow-down.svg'
// import styled from 'styled-components'

// const Title = styled.p`
//   font-size: 1.5em;
//   text-align: center;
//   color: ${props => props.color || 'blue'};
// `

function App() {
  return (
    <div className="App">
      <nav>
        <img src='https://svgshare.com/i/X1s.svg' alt='hostgator' />
      </nav>

      <main className="mainContainer">
        {/* <section className="mainContainer__background">
          <div style={{ height: '300px', overflow: 'hidden' }} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
            <path d="M-7.62,144.56 C161.11,154.44 316.87,131.73 501.97,145.55 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#1d5297ff' }}></path></svg></div>
        </section> */}

        <section className="mainContainer__content">

          <div className="background">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
              <path d="M-7.62,144.56 C161.11,154.44 316.87,131.73 501.97,145.55 L500.00,0.00 L0.00,0.00 Z"></path>
            </svg>
            <img src={arrowDown} alt='coffe table' />
          </div>

          {/* <div className="mainContent">
            <div className="img01">
              <img src={leftImage} alt='coffe table' />
            </div>

            <div className="details">
              <h2>Hospedagem de Sites</h2>
              <h1>Tenha uma hospedagem de sites estável e<br/> evite perder visitantes diariamente</h1>

              <ul>
                <li>99,9% de disponibilidade: seu site sempre no ar</li>
                <li>Suporte 24h, todos os dias</li>
                <li>Painel de Controle cPanel</li>
              </ul>
            </div>

            <div className="img02">
              <img src={rightImage} alt='user desk' />
            </div>
          </div> */}

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
      </main>
    </div>
  )
}

export default App
