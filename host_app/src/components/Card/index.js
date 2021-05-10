import React from 'react'
import PropTypes from 'prop-types'
import { Paper } from '@material-ui/core'

import './styles.scss'

import { planP, planM, planTurbo, infoIcon } from '../../assets/images'

export default function Card({ data, selected, discount }) {
  const format = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }
  const handleValue = (value, auxDiscount) => auxDiscount ? value - (value * auxDiscount) : value

  const handleIcon = () => {
    switch (data.name) {
      case 'Plano P':
        return planP

      case 'Plano M':
        return planM

      case 'Plano Turbo':
        return planTurbo
    }
  }

  let planType = {}
  switch (selected) {
    case '3 anos':
      planType = {
        name: 'triennially',
        perid: 36
      }
      break
    case '1 ano':
      planType = {
        name: 'annually',
        perid: 12
      }
      break

    case '1 mês':
      planType = {
        name: 'monthly',
        perid: 1
      }
      break
  }

  const { priceOrder } = data.cycle[planType.name]

  const valueA = handleValue(priceOrder).toLocaleString('pt-BR', format)
  const valueB = handleValue(priceOrder, discount).toLocaleString('pt-BR', format)
  const valueC = (handleValue(priceOrder) / planType.perid).toLocaleString('pt-BR', format)
  const valueD = (handleValue(priceOrder) - handleValue(priceOrder, discount)).toLocaleString('pt-BR', format)

  return (
    <Paper className="plan-card">
      <span className="card-hover-up"/>
      <div className="plan-card__section01">
        <img src={handleIcon()} alt="plan name"/>
        <h2>{data.name}</h2>
      </div>

      <hr />

      <div className="plan-card__section02">
        <span className="price-top">
          <span className="dashed-price">
            <p>R$ {valueA}</p>
            <strong>R$ {valueB}</strong>
          </span>
          <p>equivalente a</p>
        </span>

        <span className="price-middle">
          R$ <strong>{valueC}</strong>/mês*
        </span>

        <a
          href={`${process.env.REACT_APP_URL}?a=add&pid=${data.id}&billingcycle=${planType.name}&promocode=PROMOHG40`}
          target="_blank"
          rel="noreferrer"
        >
          <button>Contrate Agora</button>
        </a>

        <span className="price-bottom">
          <strong>
            1 ano de Domínio Grátis
            <img src={infoIcon} alt="info icon"/>
          </strong>

          <span className="price-bottom-badge">
            <p>economiza R$ {valueD}</p>
            <span>40% OFF</span>
          </span>
        </span>
      </div>

      <hr />

      <div className="plan-card__section03">
        <ul>
          <li>{data.name === 'Plano P' ? 'Para 1 site' : 'Sites ilimitados'}</li>
          <li><strong>{data.name === 'Plano Turbo' ? '150' : '100'}GB</strong> de Armazenamento</li>
          <li>Contas de E-mail <strong>Ilimitadas</strong></li>
          <li>Criador de Sites <strong><u>Grátis</u></strong></li>
          <li>Certificado SSL <strong>Grátis</strong> (https)</li>
        </ul>
      </div>
      <span className="card-hover-down"/>
    </Paper>
  )
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  selected: PropTypes.string.isRequired,
  discount: PropTypes.number.isRequired
}
